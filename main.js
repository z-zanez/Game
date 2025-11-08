const scenes = [
  {
    id: "vacuum",
    time: "09:00 · 客厅",
    title: "吸尘器上线",
    narrative:
      "我在客厅铺开电线，打开吸尘器沿着地毯缓慢前进。靠近咖啡桌时，吸尘器扫过桌脚，发出一声闷响，桌面跟着摇了两下。",
    logTitle: "吸尘器撞上咖啡桌",
    logText:
      "吸尘器擦过桌脚，把咖啡桌撞得晃了起来，我心里一紧，忘了自己刚刚掌控着噪声机器。",
    focusDelta: -6,
  },
  {
    id: "table",
    time: "09:02 · 客厅",
    title: "咖啡桌怎么摇晃了",
    narrative:
      "桌面还在轻轻晃动。我已经忘记那声闷响来自吸尘器，脑子里只剩“桌子坏了”。螺丝刀就在抽屉里，我跪下开始拆第一根桌腿。",
    logTitle: "一定是桌子坏了",
    logText:
      "我认定桌子出问题，抓起螺丝刀卸下桌腿，试图“修理”一个其实被我撞到的家具。",
    focusDelta: -12,
  },
  {
    id: "spill",
    time: "09:07 · 客厅",
    title: "咖啡倾倒",
    narrative:
      "桌腿松动，咖啡杯顺势倒下，咖啡在地毯上留下污渍，我想到：需要纸巾。",
    logTitle: "拆桌腿引发咖啡倾倒",
    logText:
      "桌腿被我卸下，咖啡全洒在地上，我慌忙决定去厨房拿纸巾补救。",
    focusDelta: -10,
  },
  {
    id: "kitchen",
    time: "09:12 · 厨房",
    title: "来到厨房却忘了来的目的",
    narrative:
      "我冲进厨房，停在台面前，突然不知道自己来这干什么。视线落在面粉和黄油上，决定开始做馅饼。",
    logTitle: "决定做馅饼",
    logText:
      "纸巾这件事在脑海里消失，我开始和面、调馅，把注意力全给了馅饼。",
    focusDelta: -15,
  },
  {
    id: "pie",
    time: "09:45 · 厨房",
    title: "馅饼计划遇到纸巾危机",
    narrative:
      "面团擀好准备刷蛋液，伸手去拿纸巾才发现盒子是空的：我得去超市买纸巾！",
    logTitle: "决定去超市",
    logText:
      "做馅饼做到一半发现没纸巾要去超市买。",
    focusDelta: -4,
  },
  {
    id: "stain",
    time: "09:55 · 客厅",
    title: "准备出门却被咖啡渍吓到",
    narrative:
      "我提着包从厨房走向玄关，看到了客厅的一地咖啡，非常惊讶：这里发生了什么啊！",
    logTitle: "这里发生了什么啊！",
    logText:
      "面对自己制造的咖啡渍，我惊讶得喊出声，完全忘记这里是怎么变成这样的。",
    focusDelta: -8,
  },
];

const state = {
  sceneIndex: 0,
  focus: 65,
  completed: false,
};

const sceneCard = document.getElementById("sceneCard");
const sceneTemplate = document.getElementById("sceneTemplate");
const focusFill = document.getElementById("focusFill");
const focusLabel = document.getElementById("focusLabel");
const logList = document.getElementById("log");
const nextBtn = document.getElementById("nextBtn");
const timelineFill = document.getElementById("timelineFill");
const timelineLabel = document.getElementById("timelineLabel");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function renderScene() {
  const scene = scenes[state.sceneIndex];
  const clone = sceneTemplate.content.cloneNode(true);
  clone.querySelector(".scene-time").textContent = scene.time;
  clone.querySelector(".scene-title").textContent = scene.title;
  clone.querySelector(".scene-narrative").textContent = scene.narrative;
  clone.querySelector(
    ".scene-task"
  ).innerHTML = `<strong>此刻的念头：</strong>${scene.logText}`;

  sceneCard.innerHTML = "";
  sceneCard.appendChild(clone);

  nextBtn.textContent =
    state.sceneIndex === scenes.length - 1 ? "结束这一天" : "继续故事";
  updateTimeline();
}

function updateTimeline(isSummary = false) {
  const denominator = Math.max(scenes.length - 1, 1);
  if (isSummary) {
    timelineFill.style.width = "100%";
    timelineLabel.textContent = "一天总结";
    return;
  }
  const ratio = state.sceneIndex / denominator;
  timelineFill.style.width = `${ratio * 100}%`;
  timelineLabel.textContent = `场景 ${state.sceneIndex + 1} / ${scenes.length}`;
}

function updateMeter() {
  focusLabel.textContent = `${state.focus} / 100`;
  focusFill.style.width = `${state.focus}%`;
  if (state.focus >= 70) {
    focusFill.style.background = "linear-gradient(90deg, var(--accent), var(--success))";
  } else if (state.focus <= 30) {
    focusFill.style.background = "linear-gradient(90deg, #f87171, var(--accent-strong))";
  } else {
    focusFill.style.background = "linear-gradient(90deg, var(--accent), var(--accent-strong))";
  }
}

function addLogEntry(title, text, delta) {
  const li = document.createElement("li");
  li.className = "log-entry";
  const trend = delta >= 0 ? `+${delta}` : `${delta}`;
  li.innerHTML = `<strong>${title} · ${trend}</strong><p>${text}</p>`;
  logList.prepend(li);
}

function recordScene(scene) {
  state.focus = clamp(state.focus + scene.focusDelta, 0, 100);
  addLogEntry(scene.logTitle || scene.title, scene.logText, scene.focusDelta);
  updateMeter();
}

function handleAdvance() {
  if (state.completed) {
    resetGame();
    return;
  }

  const scene = scenes[state.sceneIndex];
  recordScene(scene);

  if (state.sceneIndex === scenes.length - 1) {
    showSummary();
  } else {
    state.sceneIndex += 1;
    renderScene();
  }
}

function focusVerdict() {
  return {
    title: "回顾这一天",
    body: "今天的情节从吸尘器到馅饼到买纸巾一路被打断，专注度不断下降。下面是一些帮自己保持专注的小技巧。",
  };
}

function showSummary() {
  state.completed = true;
  const verdict = focusVerdict();
  sceneCard.innerHTML = `
    <article>
      <p class="eyebrow">一天结束</p>
      <h2>${verdict.title}</h2>
      <p>${verdict.body}</p>
      <div class="scene-task">
        <strong>专注小技巧：</strong>
        <ul>
          <li>多在嘴上默念自己正在做的事情。</li>
          <li>在客厅和厨房贴上写着「我刚刚在做什么？」的提示卡。</li>
          <li>启动任务前拍照存证，遇到突发事件时能快速倒带记忆。</li>
        </ul>
      </div>
    </article>
  `;
  nextBtn.textContent = "重新体验";
  updateTimeline(true);
}

function resetGame() {
  state.sceneIndex = 0;
  state.focus = 65;
  state.completed = false;
  logList.innerHTML = "";
  nextBtn.textContent = "继续故事";
  updateMeter();
  renderScene();
}

nextBtn.addEventListener("click", handleAdvance);

updateMeter();
renderScene();
