const scenes = [
  {
    id: "vacuum",
    time: "09:00 · Living Room",
    title: "Vacuum Cleaner",
    narrative:
      "I turned on the vacuum cleaner in the living room and slowly moved it along the carpet. As I approached the coffee table, the vacuum bumped into the corner, causing the table to shake twice.",
    logTitle: "Vacuum Hits Coffee Table",
    logText:
      " The vacuum grazed the table leg and shook the coffee table. My heart skipped a beat — I forgot I was controlling the noisy machine.",
    focusDelta: -6,
  },
  {
    id: "table",
    time: "09:02 · Living Room",
    title: "Why Is the Coffee Table Shaking?",
    narrative:
      "The tabletop was still gently shaking. I had already forgotten it was due to the vacuum bumping into it; all I could think was, 'The table is broken.' I knelt down and started removing the first leg to try to fix it.",
    logTitle: "The Table Must Be Broken",
    logText:
      " I assumed something was wrong with the table, removed a leg, and tried to 'fix' a piece of furniture that I had actually knocked into.",
    focusDelta: -12,
  },
  {
    id: "spill",
    time: "09:07 · Living Room",
    title: "Coffee Spill",
    narrative:
      "With the leg loose, the coffee cup tipped over, leaving a stain on the carpet. I thought: I need paper towels.",
    logTitle: "Removing Table Leg Causes Coffee Spill",
    logText:
      " I removed the table leg, and the coffee spilled all over the floor. I panicked and decided to go to the kitchen to get paper towels.",
    focusDelta: -10,
  },
  {
    id: "kitchen",
    time: "09:12 · Kitchen",
    title: "Came to the Kitchen but Forgot Why",
    narrative:
      "I rushed into the kitchen and stopped at the counter, suddenly forgetting why I was there. My eyes landed on the flour and butter, and I decided to start making a pie.",
    logTitle: "Decided to Make a Pie",
    logText:
      " The paper towel mission vanished from my mind. I started kneading dough and preparing filling, giving all my attention to the pie.",
    focusDelta: -15,
  },
  {
    id: "pie",
    time: "09:45 · Kitchen",
    title: "Pie Plan Meets Paper Towel Crisis",
    narrative:
      "The dough was rolled out and ready for egg wash. I reached for paper towels only to find the box empty: I need to go to the supermarket to buy some!",
    logTitle: "Decided to Go to the Supermarket",
    logText:
      " Halfway through making the pie, I realized there were no paper towels and decided to go buy some.",
    focusDelta: -4,
  },
  {
    id: "stain",
    time: "09:55 · Living Room",
    title: "About to Leave but Shocked by Coffee Stain",
    narrative:
      "I carried my bag from the kitchen toward the living room and saw the coffee stain on the floor. I was stunned: 'What happened here?!'",
    logTitle: "What Happened Here?!",
    logText:
      " Facing the coffee stain I created, I exclaimed in shock, completely forgetting how it got this way.",
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
  ).innerHTML = `<strong>Current Thought:</strong>${scene.logText}`;

  sceneCard.innerHTML = "";
  sceneCard.appendChild(clone);

  nextBtn.textContent =
    state.sceneIndex === scenes.length - 1 ? "End the Day" : "Continue Story";
  updateTimeline();
}

function updateTimeline(isSummary = false) {
  const denominator = Math.max(scenes.length - 1, 1);
  if (isSummary) {
    timelineFill.style.width = "100%";
    timelineLabel.textContent = "Day Summary";
    return;
  }
  const ratio = state.sceneIndex / denominator;
  timelineFill.style.width = `${ratio * 100}%`;
  timelineLabel.textContent = `Scene ${state.sceneIndex + 1} / ${scenes.length}`;
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
    title: "Review of the Day",
    body: "Today's story was constantly interrupted — from the vacuum to the pie to buying paper towels. Focus just kept dropping. Here are some tips to help stay focused.",
  };
}

function showSummary() {
  state.completed = true;
  const verdict = focusVerdict();
  sceneCard.innerHTML = `
    <article>
      <p class="eyebrow">Day Ended</p>
      <h2>${verdict.title}</h2>
      <p>${verdict.body}</p>
      <div class="scene-task">
        <strong>Focus Tips:</strong>
        <ul>
          <li>Keep quietly repeating what you're doing out loud.</li>
          <li>Put reminder cards in the living room and kitchen asking, "What was I just doing?"</li>
          <li>Take a photo before starting a task to help recall if interrupted.</li>
        </ul>
      </div>
    </article>
  `;
  nextBtn.textContent = "Experience Again";
  updateTimeline(true);
}

function resetGame() {
  state.sceneIndex = 0;
  state.focus = 65;
  state.completed = false;
  logList.innerHTML = "";
  nextBtn.textContent = "Continue Story";
  updateMeter();
  renderScene();
}

nextBtn.addEventListener("click", handleAdvance);

updateMeter();
renderScene();
