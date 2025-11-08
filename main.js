const scenes = [
  {
    id: "morning",
    time: "07:20 · 卧室",
    title: "出门前的 5 分钟",
    narrative:
      "闹钟停了三次才真正坐起身。视线扫过桌面：钥匙、耳机、电费账单、散落的便利贴。大脑像浏览器一样开着十几个标签。",
    task: "把需要带走的物品装进包里，并在手机上勾完出门清单。",
    focusDelta: +10,
    focusResult:
      "我把注意力锚定在清单上，嘴里轻声重复：钥匙、卡、耳机。声音盖掉了信息提示音，手终于把重要物品收好。",
    distractions: [
      {
        label: "刷信息",
        narrative:
          "对话框接连弹出：新的梗图、朋友的语音、群里的提醒。手指不受控地点开，每条信息都像绕路的岔道。",
        delta: -15,
      },
      {
        label: "盯住便利贴",
        narrative:
          "便利贴上写着昨天没完成的想法，思绪立刻跳到下午才用得上的创意，完全忘了现在急需出门。",
        delta: -12,
      },
    ],
  },
  {
    id: "noon",
    time: "12:40 · 办公室",
    title: "午饭后的状态",
    narrative:
      "午餐后的脑雾正浓。任务板上的需求卡片排成一列，我盯着第一行字，听见空调的嗡鸣、同事的笑声、对面外卖的香味。",
    task: "在 15 分钟内整理出功能模块的优先级，发给团队。",
    focusDelta: +8,
    focusResult:
      "我戴上耳机播放白噪音，让节奏占据脑内声场，再次念出需求关键词，把要点敲进文档里。邮件发出时肩膀放松了一些。",
    distractions: [
      {
        label: "临时灵感",
        narrative:
          "看到新推送的设计案例，脑袋劈里啪啦冒点子：要不要顺便重构 UI？要不要写篇 blog？结果真正的任务还在第一句。",
        delta: -18,
      },
      {
        label: "办公室噪音",
        narrative:
          "有人在讨论旅行攻略，笑声断断续续。注意力像被磁铁拉走，只听到零碎的笑点，却忘了邮件还空着。",
        delta: -14,
      },
    ],
  },
  {
    id: "night",
    time: "21:15 · 公寓",
    title: "睡前的瀑布式思绪",
    narrative:
      "房间只亮着床头灯。手机屏幕在黑暗里发光，待办清单和社交消息堆满。身体很累，脑子却启动夜间回放模式。",
    task: "拉伸 10 分钟并写下 3 件今天完成的事，用仪式感结束一天。",
    focusDelta: +12,
    focusResult:
      "我把手机调成飞行模式，放在床外。随着一次次深呼吸，膝盖和肩膀的紧绷慢慢散去，笔记本里写下的三件事像锚，把今日固定下来。",
    distractions: [
      {
        label: "信息漩涡",
        narrative:
          "只是想回一条消息，结果滑到短视频，十分钟后才想起拉伸还没开始。",
        delta: -20,
      },
      {
        label: "突发家务",
        narrative:
          "看到书桌有点乱，开始重排书本、擦拭相框，像突然启动的整理机器人，拖延了真正的休息。",
        delta: -13,
      },
    ],
  },
];

const state = {
  sceneIndex: 0,
  focus: 70,
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
      title: "波动但可控",
      body: "今天的专注度几次被拉走，却都被你一点点拉回轨道。疲惫感仍在，但你看见自己能掌握方向盘。",
    };
  }
  if (score >= 50) {
    return {
      title: "随时可能偏航",
      body: "专注像浮标，在浪里上下起伏。没有谁在偷懒，只是需要别的辅助策略：外部提醒、番茄钟、或更短的工作单元。",
    };
  }
  return {
    title: "被一整天拖着走",
    body: "注意力条一再见底，身体跟着超负荷。请为自己安排缓冲区，找人分担或把任务拆成更小的步骤。",
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
          <li>保持外部辅助（闹钟、任务卡片、白噪音）帮助切换场景。</li>
          <li>把任务拆到 10 分钟以内，可先完成感官上最容易启动的一小步。</li>
          <li>承认大脑会分心，提前预留「走神时间」，再温柔地把自己带回正轨。</li>
        </ul>
      </div>
    </article>
  `;
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
  state.focus = 70;
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
