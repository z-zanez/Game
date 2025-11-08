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
    id: "commute",
    time: "08:35 · 地铁车厢",
    title: "通勤列车",
    narrative:
      "站到车门一侧，列车起步的晃动像节拍器。通知声、刹车声、乘客的香水味和对话都在脑中呼啸。",
    task: "趁 6 站的时间浏览会议资料，标记出待确认的问题。",
    focusDelta: +7,
    focusResult:
      "我靠在车门，用指尖敲击座位把节奏固定，再把资料切成三段，每到一个站就换一个段落，终于抓住了要点。",
    distractions: [
      {
        label: "刷短视频",
        narrative:
          "只是想看一条推荐，结果自动播放不断跳出来，列车报站声变成背景音，手中的会议资料完全没翻动。",
        delta: -14,
      },
      {
        label: "盯着乘客",
        narrative:
          "对面的人衣服上有个很妙的图案，脑海突然写起了关于它的故事，忘了自己正要准备会议。",
        delta: -10,
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
    id: "afternoon",
    time: "16:10 · 会议室",
    title: "多人会议",
    narrative:
      "会议同时开着三份文档。有人在白板写关键字，有人不断插话，项目经理在问：‘你刚才听到了吗？’",
    task: "捕捉到自己负责部分的行动项，并在会议结束前确认时间线。",
    focusDelta: +9,
    focusResult:
      "我把指尖轻敲桌面让自己保持在声音里，只记录与我相关的 3 条行动项，最后复述一次确认，终于把信息锁定。",
    distractions: [
      {
        label: "多线程脑洞",
        narrative:
          "白板上的词触发新的产品构想，意识飞向未来路线，会议现场的讨论仿佛静音。",
        delta: -16,
      },
      {
        label: "切屏查看消息",
        narrative:
          "电脑弹出群聊提醒，手下意识切到聊天窗口，一回神会议已经推进到下一页。",
        delta: -15,
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

const toolkitOptions = [
  {
    id: "breathing",
    name: "4-7-8 呼吸",
    detail: "呼气 4 秒，屏息 7 秒，吸气 8 秒，重启神经系统。",
    delta: +6,
    narrative:
      "我闭上眼按 4-7-8 的节奏呼吸，让声音占据身体，心跳慢下来，脑袋也顺势降噪。",
  },
  {
    id: "body",
    name: "身体扫描",
    detail: "从脚趾到肩颈快速扫描紧绷部位。",
    delta: +5,
    narrative:
      "我从脚趾开始默念‘放松’，一路到肩颈，注意力短暂停在身体里，像按下重置键。",
  },
  {
    id: "timer",
    name: "10 分钟番茄",
    detail: "只承诺 10 分钟，把任务拆到最小步骤。",
    delta: +8,
    narrative:
      "我设定 10 分钟倒计时，只要求自己完成一句话，计时声像护栏，让专注暂时守住。",
  },
];

const TOOL_MAX = 2;

const state = {
  sceneIndex: 0,
  focus: 70,
  resolved: false,
  completed: false,
  toolUses: 0,
  usedTools: new Set(),
};

const sceneCard = document.getElementById("sceneCard");
const sceneTemplate = document.getElementById("sceneTemplate");
const focusFill = document.getElementById("focusFill");
const focusLabel = document.getElementById("focusLabel");
const logList = document.getElementById("log");
const focusBtn = document.getElementById("focusBtn");
const driftBtn = document.getElementById("driftBtn");
const nextBtn = document.getElementById("nextBtn");
const toolGrid = document.getElementById("toolGrid");
const toolRemaining = document.getElementById("toolRemaining");
const timelineFill = document.getElementById("timelineFill");
const timelineLabel = document.getElementById("timelineLabel");

const toolMap = new Map(toolkitOptions.map((tool) => [tool.id, tool]));

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

function renderToolkit() {
  toolGrid.innerHTML = "";
  toolkitOptions.forEach((tool) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tool-card";
    btn.dataset.tool = tool.id;
    btn.innerHTML = `<strong>${tool.name}</strong><span>${tool.detail}</span>`;
    btn.addEventListener("click", () => handleToolUse(tool.id));
    toolGrid.appendChild(btn);
  });
  updateToolkitButtons();
}

function updateToolkitButtons() {
  const buttons = toolGrid.querySelectorAll(".tool-card");
  buttons.forEach((btn) => {
    const toolId = btn.dataset.tool;
    const used = state.usedTools.has(toolId);
    const disabled = used || state.toolUses >= TOOL_MAX || state.completed;
    btn.disabled = disabled;
    btn.classList.toggle("is-used", used);
  });
  updateToolRemaining();
}

function updateToolRemaining() {
  const remaining = Math.max(TOOL_MAX - state.toolUses, 0);
  toolRemaining.textContent = remaining;
}

function handleToolUse(toolId) {
  if (state.toolUses >= TOOL_MAX || state.usedTools.has(toolId) || state.completed) return;
  const tool = toolMap.get(toolId);
  if (!tool) return;

  state.toolUses += 1;
  state.usedTools.add(toolId);
  state.focus = clamp(state.focus + tool.delta, 0, 100);
  addLogEntry(tool.name, tool.narrative, tool.delta);
  updateMeter();
  updateToolkitButtons();
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

function toolkitReflection(count) {
  if (count === 0) {
    return "今天没有使用辅助卡，或许可以预先排练一遍，方便下一次及时调用。";
  }
  if (count < TOOL_MAX) {
    return "你记得主动求助外部辅助，说明已能觉察走神信号；还可以继续尝试不同策略组合。";
  }
  return "辅助卡全部出动，外部工具帮你守住了关键任务，也别忘了向身边人寻求更多支持。";
}

function showSummary() {
  state.completed = true;
  focusBtn.hidden = true;
  driftBtn.hidden = true;
  nextBtn.hidden = false;
  nextBtn.textContent = "重新体验";

  const verdict = focusVerdict(state.focus);
  const reflection = toolkitReflection(state.toolUses);
  sceneCard.innerHTML = `
    <article>
      <p class="eyebrow">一天结束</p>
      <h2>${verdict.title}</h2>
      <p>${verdict.body}</p>
      <div class="scene-task">
        <strong>辅助卡使用：${state.toolUses} / ${TOOL_MAX}</strong>
        <p>${reflection}</p>
        <strong>下一步尝试：</strong>
        <ul>
          <li>保持外部辅助（闹钟、任务卡片、白噪音）帮助切换场景。</li>
          <li>把任务拆到 10 分钟以内，可先完成感官上最容易启动的一小步。</li>
          <li>承认大脑会分心，提前预留「走神时间」，再温柔地把自己带回正轨。</li>
        </ul>
      </div>
    </article>
  `;
  updateTimeline(true);
  updateToolkitButtons();
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
  state.toolUses = 0;
  state.usedTools.clear();
  focusBtn.hidden = false;
  driftBtn.hidden = false;
  nextBtn.hidden = true;
  logList.innerHTML = "";
  updateMeter();
  updateToolkitButtons();
  renderScene();
}

focusBtn.addEventListener("click", handleFocusChoice);
driftBtn.addEventListener("click", handleDriftChoice);
nextBtn.addEventListener("click", handleNextScene);

renderToolkit();
updateMeter();
renderScene();
