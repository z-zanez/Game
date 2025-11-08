const scenes = [
  {
    id: "livingRoom",
    time: "09:05 · 客厅",
    title: "吸尘器巡航",
    narrative:
      "我打算在客厅来一场彻底清洁。吸尘器在地毯上滑行，咖啡桌上还冒着热气的咖啡。走到桌边时，管子擦过木腿，桌面轻轻晃了一下。",
    task: "沿着地毯慢慢吸，别再撞到咖啡桌。",
    focusDelta: +8,
    focusResult:
      "我刻意放慢速度，用脚背轻顶咖啡桌，提醒自己刚才是我撞到它，而不是桌子坏了。呼吸声压过吸尘器的噪音。",
    distractions: [
      {
        label: "吸尘器撞到桌脚",
        narrative:
          "手腕一歪，吸尘器整个撞上咖啡桌。桌面晃了一圈，咖啡杯也险些翻倒。",
        delta: -12,
      },
      {
        label: "盯着阳光里的灰尘",
        narrative:
          "我盯着窗外飘浮的灰尘出神，吸尘器一路拖到桌腿才意识到自己没有控制方向。",
        delta: -9,
      },
    ],
  },
  {
    id: "table",
    time: "09:07 · 客厅",
    title: "摇晃的咖啡桌",
    narrative:
      "桌面还在轻轻摇晃，我已经忘记自己刚才撞过它，只觉得这张桌子突然快散架。螺丝刀就在抽屉里，像在邀请我动手修理。",
    task: "想起真正的原因，别急着拆桌腿。",
    focusDelta: +6,
    focusResult:
      "我努力回放一分钟前的动作，脑海浮现吸尘器撞上桌脚的画面。原来问题出在我，而不是桌子。",
    distractions: [
      {
        label: "它肯定坏了",
        narrative:
          "脑中只剩“桌子坏了”。我抓起螺丝刀弯下腰，开始拧松第一根桌腿。",
        delta: -15,
      },
      {
        label: "翻说明书",
        narrative:
          "我翻到抽屉底层寻找装配说明，用力过猛连第二根桌腿也松开了。",
        delta: -11,
      },
    ],
  },
  {
    id: "spill",
    time: "09:15 · 客厅",
    title: "咖啡洒了一地",
    narrative:
      "桌腿被我拧松，咖啡杯顿时倾倒。棕色液体顺着地毯蔓延，黏在脚底。我突然记起应该先去拿纸巾。",
    task: "把注意力锁定在“去厨房拿纸巾”这件事上。",
    focusDelta: +7,
    focusResult:
      "我不停对自己说“纸巾、纸巾”，把螺丝刀放回桌面，准备直奔厨房。",
    distractions: [
      {
        label: "继续拆到底",
        narrative:
          "既然已经拆了，我干脆把四条桌腿全部卸下。咖啡继续沿着地毯扩散。",
        delta: -13,
      },
      {
        label: "幻想换新桌",
        narrative:
          "脑中浮现各种新茶几的样子，我甚至开始量想象中的尺寸，污渍被抛在身后。",
        delta: -10,
      },
    ],
  },
  {
    id: "kitchen",
    time: "09:22 · 厨房",
    title: "到厨房却忘了来干嘛",
    narrative:
      "我站在厨房中央，原本要拿纸巾，但脑袋一片空白。烤箱静默地等着，我突然想起上周没做完的馅饼。",
    task: "提醒自己是为了咖啡污渍才来厨房。",
    focusDelta: +5,
    focusResult:
      "我把“纸巾”写在手背上，又贴了一张小纸条在柜门，努力把目标固定。",
    distractions: [
      {
        label: "突然想做馅饼",
        narrative:
          "面粉和黄油已经倒进了碗里，我开始和面，纸巾任务彻底消失。",
        delta: -18,
      },
      {
        label: "整理香料罐",
        narrative:
          "我顺手把香料罐按颜色排开，越摆越投入，完全忘记咖啡还在客厅地毯上。",
        delta: -11,
      },
    ],
  },
  {
    id: "pie",
    time: "10:00 · 厨房",
    title: "馅饼计划与纸巾危机",
    narrative:
      "面团已经擀好，准备刷蛋液时才发现纸巾盒是空的。脑中闪回客厅的咖啡渍，我决定得去一趟超市。",
    task: "在动身前记下要买纸巾，并提醒自己回去擦地。",
    focusDelta: +6,
    focusResult:
      "我抓起磁贴记事本写下“纸巾 x2、回客厅擦咖啡”，贴在门口的鞋柜上当作离家提示。",
    distractions: [
      {
        label: "立刻冲去超市",
        narrative:
          "我抓起钥匙准备冲出门，只想着“买纸巾”，却没有写任何提醒，下一步注定要忘。",
        delta: -9,
      },
      {
        label: "改良馅料",
        narrative:
          "灵感突然爆发，我开始调整馅饼配方，纸巾危机再度被延后。",
        delta: -12,
      },
    ],
  },
  {
    id: "return",
    time: "10:15 · 客厅",
    title: "准备出门却被咖啡渍拦住",
    narrative:
      "我提着包走过客厅准备出门，地毯中央那块咖啡渍像新的谜团。脑中一片空白，只剩下惊讶。",
    task: "把这块污渍当线索，回想刚才的整条链路。",
    focusDelta: +5,
    focusResult:
      "我停下来，按顺序回放：吸尘器→桌腿→咖啡→纸巾→超市。记忆像拉线一样慢慢接回。",
    distractions: [
      {
        label: "惊呼“这里发生了什么啊！”",
        narrative:
          "我被吓得大叫，自问“这里发生了什么啊！”，完全忘记是自己弄的。",
        delta: -15,
      },
      {
        label: "脑补灾难现场",
        narrative:
          "脑内自动播放猫咪或孩子闯祸的画面，情绪越想越乱，只想逃离。",
        delta: -11,
      },
    ],
  },
];

const state = {
  sceneIndex: 0,
  focus: 65,
  resolved: false,
  completed: false,
};

const sceneCard = document.getElementById("sceneCard");
const sceneTemplate = document.getElementById("sceneTemplate");
const focusFill = document.getElementById("focusFill");
const focusLabel = document.getElementById("focusLabel");
const logList = document.getElementById("log");
const focusBtn = document.getElementById("focusBtn");
const driftBtn = document.getElementById("driftBtn");
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
  clone.querySelector(".scene-task").innerHTML = `<strong>目标：</strong>${scene.task}`;

  sceneCard.innerHTML = "";
  sceneCard.appendChild(clone);

  focusBtn.disabled = false;
  driftBtn.disabled = false;
  nextBtn.hidden = true;
  state.resolved = false;
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

function resolveScene(result) {
  state.focus = clamp(state.focus + result.delta, 0, 100);
  addLogEntry(result.label, result.narrative, result.delta);
  updateMeter();

  focusBtn.disabled = true;
  driftBtn.disabled = true;
  nextBtn.hidden = false;
  state.resolved = true;
  if (state.sceneIndex === scenes.length - 1) {
    nextBtn.textContent = "查看一天总结";
  } else {
    nextBtn.textContent = "进入下个场景";
  }
}

function handleFocusChoice() {
  if (state.resolved || state.completed) return;
  const scene = scenes[state.sceneIndex];
  resolveScene({
    label: "专注",
    narrative: scene.focusResult,
    delta: scene.focusDelta,
  });
}

function handleDriftChoice() {
  if (state.resolved || state.completed) return;
  const scene = scenes[state.sceneIndex];
  const option =
    scene.distractions[Math.floor(Math.random() * scene.distractions.length)];
  resolveScene({
    label: option.label,
    narrative: option.narrative,
    delta: option.delta,
  });
}

function focusVerdict(score) {
  if (score >= 80) {
    return {
      title: "混乱里仍能对齐",
      body: "吸尘器、咖啡桌、馅饼都在争抢注意力，但你靠着自我提示把任务重新排好了。把“为什么站在这里”写下来，会更快回到正题。",
    };
  }
  if (score >= 50) {
    return {
      title: "家务与支线拉扯",
      body: "咖啡渍成了提醒，你时而记得、时而忘。试着在客厅和厨房贴上小纸条，让讯息更难丢。",
    };
  }
  return {
    title: "满屋都是悬案",
    body: "拆桌腿、做馅饼、找纸巾的跳转让情绪耗尽。把大任务拆成一句口号随身携带，下次回到客厅就不会像破案。",
  };
}

function showSummary() {
  state.completed = true;
  focusBtn.hidden = true;
  driftBtn.hidden = true;
  nextBtn.hidden = false;
  nextBtn.textContent = "重新体验";

  const verdict = focusVerdict(state.focus);
  sceneCard.innerHTML = `
    <article>
      <p class="eyebrow">一天结束</p>
      <h2>${verdict.title}</h2>
      <p>${verdict.body}</p>
      <div class="scene-task">
        <strong>下一步尝试：</strong>
        <ul>
          <li>在客厅、厨房、玄关各自放上一句提醒，写清自己为何站在这里。</li>
          <li>遇到突发事件时，先停下说出“我是被什么打断的”，再行动。</li>
          <li>把纸巾、螺丝刀、购物清单放在固定托盘，减少寻找成本。</li>
        </ul>
      </div>
    </article>
  `;
  updateTimeline(true);
}

function handleNextScene() {
  if (!state.resolved && !state.completed) return;
  if (state.completed) {
    resetGame();
    return;
  }
  if (state.sceneIndex < scenes.length - 1) {
    state.sceneIndex += 1;
    renderScene();
  } else {
    showSummary();
  }
}

function resetGame() {
  state.sceneIndex = 0;
  state.focus = 65;
  state.completed = false;
  focusBtn.hidden = false;
  driftBtn.hidden = false;
  nextBtn.hidden = true;
  logList.innerHTML = "";
  updateMeter();
  renderScene();
}

focusBtn.addEventListener("click", handleFocusChoice);
driftBtn.addEventListener("click", handleDriftChoice);
nextBtn.addEventListener("click", handleNextScene);

updateMeter();
renderScene();
