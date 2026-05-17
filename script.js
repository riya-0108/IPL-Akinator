const players = [
  {
    name: "Virat Kohli",
    role: "Top-order batter",
    team: "RCB",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: true,
      bowler: false,
      allRounder: false,
      wicketkeeper: false,
      currentCaptain: false,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: false,
      spinBowler: false,
      rcb: true,
      csk: false,
      mi: false,
      kkr: false,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: true,
      purpleCapWinner: false,
      famousFinisher: false,
      opensBatting: true,
      deathOversBowler: false,
      formerIndiaCaptain: true,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "MS Dhoni",
    role: "Wicketkeeper batter",
    team: "CSK",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/MS_Dhoni_in_2011.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: true,
      bowler: false,
      allRounder: false,
      wicketkeeper: true,
      currentCaptain: false,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: false,
      spinBowler: false,
      rcb: false,
      csk: true,
      mi: false,
      kkr: false,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: true,
      opensBatting: false,
      deathOversBowler: false,
      formerIndiaCaptain: true,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Rohit Sharma",
    role: "Opening batter",
    team: "MI",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Rohit_Sharma_2015.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: true,
      bowler: false,
      allRounder: false,
      wicketkeeper: false,
      currentCaptain: false,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: false,
      spinBowler: false,
      rcb: false,
      csk: false,
      mi: true,
      kkr: false,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: false,
      opensBatting: true,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Jasprit Bumrah",
    role: "Fast bowler",
    team: "MI",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Jasprit_Bumrah.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: false,
      bowler: true,
      allRounder: false,
      wicketkeeper: false,
      currentCaptain: false,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: true,
      spinBowler: false,
      rcb: false,
      csk: false,
      mi: true,
      kkr: false,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: false,
      opensBatting: false,
      deathOversBowler: true,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Hardik Pandya",
    role: "All-rounder",
    team: "MI",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Hardik_Pandya_in_PMO_New_Delhi.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: true,
      bowler: true,
      allRounder: true,
      wicketkeeper: false,
      currentCaptain: true,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: true,
      spinBowler: false,
      rcb: false,
      csk: false,
      mi: true,
      kkr: false,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: true,
      opensBatting: false,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Andre Russell",
    role: "Power all-rounder",
    team: "KKR",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Andre_Russell_2019.jpg",
    traits: {
      indian: false,
      overseas: true,
      batter: true,
      bowler: true,
      allRounder: true,
      wicketkeeper: false,
      currentCaptain: false,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: true,
      spinBowler: false,
      rcb: false,
      csk: false,
      mi: false,
      kkr: true,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: true,
      opensBatting: false,
      deathOversBowler: true,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Rashid Khan",
    role: "Spin all-rounder",
    team: "GT",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Rashid_Khan_2021.jpg",
    traits: {
      indian: false,
      overseas: true,
      batter: false,
      bowler: true,
      allRounder: true,
      wicketkeeper: false,
      currentCaptain: false,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: false,
      spinBowler: true,
      rcb: false,
      csk: false,
      mi: false,
      kkr: false,
      srh: false,
      rr: false,
      gt: true,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: false,
      opensBatting: false,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: true,
      youngStar: false
    }
  },
  {
    name: "Sunil Narine",
    role: "Mystery spinner",
    team: "KKR",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Sunil_Narine_2014.jpg",
    traits: {
      indian: false,
      overseas: true,
      batter: true,
      bowler: true,
      allRounder: true,
      wicketkeeper: false,
      currentCaptain: false,
      rightHandBat: false,
      leftHandBat: true,
      paceBowler: false,
      spinBowler: true,
      rcb: false,
      csk: false,
      mi: false,
      kkr: true,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: false,
      opensBatting: true,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Rishabh Pant",
    role: "Wicketkeeper batter",
    team: "LSG",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Rishabh_Pant_in_2019.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: true,
      bowler: false,
      allRounder: false,
      wicketkeeper: true,
      currentCaptain: true,
      rightHandBat: false,
      leftHandBat: true,
      paceBowler: false,
      spinBowler: false,
      rcb: false,
      csk: false,
      mi: false,
      kkr: false,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: true,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: false,
      opensBatting: false,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: true
    }
  },
  {
    name: "KL Rahul",
    role: "Wicketkeeper batter",
    team: "DC",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/KL_Rahul.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: true,
      bowler: false,
      allRounder: false,
      wicketkeeper: true,
      currentCaptain: false,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: false,
      spinBowler: false,
      rcb: false,
      csk: false,
      mi: false,
      kkr: false,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: true,
      orangeCapWinner: true,
      purpleCapWinner: false,
      famousFinisher: false,
      opensBatting: true,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Shubman Gill",
    role: "Opening batter",
    team: "GT",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Shubman_Gill_2023.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: true,
      bowler: false,
      allRounder: false,
      wicketkeeper: false,
      currentCaptain: true,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: false,
      spinBowler: false,
      rcb: false,
      csk: false,
      mi: false,
      kkr: false,
      srh: false,
      rr: false,
      gt: true,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: true,
      purpleCapWinner: false,
      famousFinisher: false,
      opensBatting: true,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: true
    }
  },
  {
    name: "Sanju Samson",
    role: "Wicketkeeper batter",
    team: "RR",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Sanju_Samson_2019.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: true,
      bowler: false,
      allRounder: false,
      wicketkeeper: true,
      currentCaptain: true,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: false,
      spinBowler: false,
      rcb: false,
      csk: false,
      mi: false,
      kkr: false,
      srh: false,
      rr: true,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: false,
      opensBatting: false,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Pat Cummins",
    role: "Fast bowler",
    team: "SRH",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Pat_Cummins_2018.jpg",
    traits: {
      indian: false,
      overseas: true,
      batter: false,
      bowler: true,
      allRounder: false,
      wicketkeeper: false,
      currentCaptain: true,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: true,
      spinBowler: false,
      rcb: false,
      csk: false,
      mi: false,
      kkr: false,
      srh: true,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: false,
      opensBatting: false,
      deathOversBowler: true,
      formerIndiaCaptain: false,
      overseasCaptain: true,
      youngStar: false
    }
  },
  {
    name: "Yuzvendra Chahal",
    role: "Leg spinner",
    team: "PBKS",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Yuzvendra_Chahal_2019.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: false,
      bowler: true,
      allRounder: false,
      wicketkeeper: false,
      currentCaptain: false,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: false,
      spinBowler: true,
      rcb: false,
      csk: false,
      mi: false,
      kkr: false,
      srh: false,
      rr: false,
      gt: false,
      pbks: true,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: true,
      famousFinisher: false,
      opensBatting: false,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Suryakumar Yadav",
    role: "360-degree batter",
    team: "MI",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Suryakumar_Yadav_in_2022.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: true,
      bowler: false,
      allRounder: false,
      wicketkeeper: false,
      currentCaptain: false,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: false,
      spinBowler: false,
      rcb: false,
      csk: false,
      mi: true,
      kkr: false,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: true,
      opensBatting: false,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Travis Head",
    role: "Explosive opening batter",
    team: "SRH",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Travis_Head_2022.jpg",
    traits: {
      indian: false,
      overseas: true,
      batter: true,
      bowler: false,
      allRounder: false,
      wicketkeeper: false,
      currentCaptain: false,
      rightHandBat: false,
      leftHandBat: true,
      paceBowler: false,
      spinBowler: false,
      rcb: false,
      csk: false,
      mi: false,
      kkr: false,
      srh: true,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: false,
      opensBatting: true,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Ravindra Jadeja",
    role: "Spin all-rounder",
    team: "CSK",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Ravindra_Jadeja_in_2018.jpg",
    traits: {
      indian: true,
      overseas: false,
      batter: true,
      bowler: true,
      allRounder: true,
      wicketkeeper: false,
      currentCaptain: false,
      rightHandBat: false,
      leftHandBat: true,
      paceBowler: false,
      spinBowler: true,
      rcb: false,
      csk: true,
      mi: false,
      kkr: false,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: true,
      opensBatting: false,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  },
  {
    name: "Glenn Maxwell",
    role: "Power all-rounder",
    team: "RCB",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Glenn_Maxwell_2019.jpg",
    traits: {
      indian: false,
      overseas: true,
      batter: true,
      bowler: true,
      allRounder: true,
      wicketkeeper: false,
      currentCaptain: false,
      rightHandBat: true,
      leftHandBat: false,
      paceBowler: false,
      spinBowler: true,
      rcb: true,
      csk: false,
      mi: false,
      kkr: false,
      srh: false,
      rr: false,
      gt: false,
      pbks: false,
      lsg: false,
      dc: false,
      orangeCapWinner: false,
      purpleCapWinner: false,
      famousFinisher: true,
      opensBatting: false,
      deathOversBowler: false,
      formerIndiaCaptain: false,
      overseasCaptain: false,
      youngStar: false
    }
  }
];

const questions = [
  { id: "indian", text: "Is your mystery IPL player Indian?" },
  { id: "overseas", text: "Is your player an overseas star in the IPL?" },
  { id: "batter", text: "Is your player mostly known for explosive batting?" },
  { id: "bowler", text: "Is your player mostly known for bowling spells?" },
  { id: "allRounder", text: "Can your player change the game with both bat and ball?" },
  { id: "wicketkeeper", text: "Does your player wear the wicketkeeping gloves?" },
  { id: "currentCaptain", text: "Has your player led an IPL side recently?" },
  { id: "rightHandBat", text: "Does your player bat right-handed?" },
  { id: "leftHandBat", text: "Does your player bat left-handed?" },
  { id: "paceBowler", text: "Does your player bowl fast or medium pace?" },
  { id: "spinBowler", text: "Does your player bowl spin or mystery spin?" },
  { id: "rcb", text: "Is your player linked strongly with Royal Challengers Bengaluru?" },
  { id: "csk", text: "Is your player linked strongly with Chennai Super Kings?" },
  { id: "mi", text: "Is your player linked strongly with Mumbai Indians?" },
  { id: "kkr", text: "Is your player linked strongly with Kolkata Knight Riders?" },
  { id: "srh", text: "Is your player linked strongly with Sunrisers Hyderabad?" },
  { id: "rr", text: "Is your player linked strongly with Rajasthan Royals?" },
  { id: "gt", text: "Is your player linked strongly with Gujarat Titans?" },
  { id: "pbks", text: "Is your player linked strongly with Punjab Kings?" },
  { id: "lsg", text: "Is your player linked strongly with Lucknow Super Giants?" },
  { id: "dc", text: "Is your player linked strongly with Delhi Capitals?" },
  { id: "orangeCapWinner", text: "Has your player ever won the IPL Orange Cap?" },
  { id: "purpleCapWinner", text: "Has your player ever won the IPL Purple Cap?" },
  { id: "famousFinisher", text: "Is your player famous for finishing pressure chases?" },
  { id: "opensBatting", text: "Does your player usually open the batting?" },
  { id: "deathOversBowler", text: "Is your player trusted in the death overs?" },
  { id: "formerIndiaCaptain", text: "Has your player captained India?" },
  { id: "overseasCaptain", text: "Has your player captained an overseas national team?" },
  { id: "youngStar", text: "Is your player considered a young IPL star?" }
];

const heroPrompts = [
  "Scanning for team clues: RCB, CSK, MI, KKR, SRH...",
  "Question loading: Is your player a finisher under pressure?",
  "Mind scan active: batter, bowler, keeper, or all-rounder?",
  "New clue incoming: Indian star or overseas match-winner?",
  "AI scout mode: Orange Cap, Purple Cap, captaincy, death overs.",
  "Think of another cricketer. I will adjust the questions live."
];

const threshold = 82;
const state = {
  scores: new Map(),
  asked: new Set(),
  history: [],
  currentQuestion: null,
  finished: false,
  thinking: false
};

const els = {
  particleLayer: document.querySelector("#particleLayer"),
  heroQuestion: document.querySelector("#heroQuestion"),
  featuredPlayer: document.querySelector("#featuredPlayer"),
  playerTicker: document.querySelector("#playerTicker"),
  cursorBall: document.querySelector("#cursorBall"),
  cursorTrail: document.querySelector("#cursorTrail"),
  heroPanel: document.querySelector("#heroPanel"),
  gameLayout: document.querySelector("#gameLayout"),
  startBtn: document.querySelector("#startBtn"),
  questionCard: document.querySelector("#questionCard"),
  questionCount: document.querySelector("#questionCount"),
  topConfidence: document.querySelector("#topConfidence"),
  candidateCount: document.querySelector("#candidateCount"),
  questionKicker: document.querySelector("#questionKicker"),
  questionText: document.querySelector("#questionText"),
  answerGrid: document.querySelector("#answerGrid"),
  leaderboard: document.querySelector("#leaderboard"),
  historyList: document.querySelector("#historyList"),
  resultScreen: document.querySelector("#resultScreen"),
  playerImage: document.querySelector("#playerImage"),
  guessName: document.querySelector("#guessName"),
  guessDetails: document.querySelector("#guessDetails"),
  guessConfidence: document.querySelector("#guessConfidence"),
  reasonList: document.querySelector("#reasonList"),
  restartBtn: document.querySelector("#restartBtn"),
  playAgainBtn: document.querySelector("#playAgainBtn"),
  confettiLayer: document.querySelector("#confettiLayer")
};

let heroPromptIndex = 0;
let featuredIndex = 0;

function bootMotion() {
  createParticles();
  startHeroLoop();
  resetGame();

  if (window.gsap) {
    gsap.from(".hero-copy > *", { y: 28, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" });
    gsap.from(".slider-stage", { x: 50, opacity: 0, duration: 0.9, ease: "power3.out" });
    gsap.from(".glass-panel, .score-strip > div", { y: 20, opacity: 0, duration: 0.65, stagger: 0.04, ease: "power3.out", delay: 0.25 });
  }

  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", (event) => {
      if (event.target.closest("button, .rank-row")) document.body.classList.add("cursor-active");
    });
    document.addEventListener("mouseout", (event) => {
      if (event.target.closest("button, .rank-row")) document.body.classList.remove("cursor-active");
    });
  }

  document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("mousemove", magnetize);
    button.addEventListener("mouseleave", resetMagnet);
  });
}

function startHeroLoop() {
  renderPlayerTicker();
  rotateHeroPrompt();
  window.setInterval(rotateHeroPrompt, 2600);
  window.setInterval(rotateFeaturedPlayer, 2100);
}

function rotateHeroPrompt() {
  if (!els.heroQuestion) return;
  heroPromptIndex = (heroPromptIndex + 1) % heroPrompts.length;
  const nextPrompt = heroPrompts[heroPromptIndex];

  if (window.gsap) {
    gsap.to(els.heroQuestion, {
      y: -8,
      opacity: 0,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => {
        els.heroQuestion.textContent = nextPrompt;
        gsap.fromTo(els.heroQuestion, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.32, ease: "power3.out" });
      }
    });
    return;
  }

  els.heroQuestion.textContent = nextPrompt;
}

function rotateFeaturedPlayer() {
  if (!els.featuredPlayer) return;
  featuredIndex = (featuredIndex + 1) % players.length;
  const player = players[featuredIndex];

  if (window.gsap) {
    gsap.to(els.featuredPlayer, {
      opacity: 0,
      y: -8,
      duration: 0.18,
      onComplete: () => {
        els.featuredPlayer.textContent = player.name;
        gsap.fromTo(els.featuredPlayer, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.32, ease: "power3.out" });
      }
    });
    return;
  }

  els.featuredPlayer.textContent = player.name;
}

function renderPlayerTicker() {
  if (!els.playerTicker) return;
  const featuredPlayers = players
    .filter((player) => ["RCB", "CSK", "MI", "SRH", "GT", "KKR"].includes(player.team))
    .slice(0, 6);

  els.playerTicker.innerHTML = featuredPlayers
    .map((player) => {
      return `
        <div class="ticker-row">
          <img src="${fallbackImage(player)}" data-photo="${player.image}" alt="" />
          <strong>${player.name}</strong>
          <span>${player.team}</span>
        </div>
      `;
    })
    .join("");
}

function createParticles() {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < 48; index += 1) {
    const particle = document.createElement("span");
    particle.style.setProperty("--x", `${Math.random() * 100}vw`);
    particle.style.setProperty("--y", `${20 + Math.random() * 90}vh`);
    particle.style.setProperty("--drift", `${-40 + Math.random() * 80}px`);
    particle.style.setProperty("--speed", `${7 + Math.random() * 8}s`);
    particle.style.animationDelay = `${Math.random() * -12}s`;
    fragment.appendChild(particle);
  }
  els.particleLayer.appendChild(fragment);
}

function moveCursor(event) {
  spawnCursorTrail(event.clientX, event.clientY);
  if (!window.gsap) {
    els.cursorBall.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    return;
  }
  gsap.to(els.cursorBall, { x: event.clientX, y: event.clientY, duration: 0.12, ease: "power2.out" });
}

function spawnCursorTrail(x, y) {
  if (!els.cursorTrail || Math.random() < 0.42) return;
  const spark = document.createElement("span");
  spark.style.left = `${x}px`;
  spark.style.top = `${y}px`;
  spark.style.setProperty("--trail-x", `${-14 + Math.random() * 28}px`);
  spark.style.setProperty("--trail-y", `${12 + Math.random() * 30}px`);
  els.cursorTrail.appendChild(spark);
  spark.addEventListener("animationend", () => spark.remove());
}

function magnetize(event) {
  if (!window.gsap) return;
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;
  gsap.to(event.currentTarget, { x: x * 0.13, y: y * 0.18, duration: 0.25, ease: "power2.out" });
}

function resetMagnet(event) {
  if (!window.gsap) return;
  gsap.to(event.currentTarget, { x: 0, y: 0, duration: 0.35, ease: "elastic.out(1, 0.45)" });
}

function resetGame() {
  state.scores = new Map(players.map((player) => [player.name, 1]));
  state.asked = new Set();
  state.history = [];
  state.currentQuestion = null;
  state.finished = false;
  state.thinking = false;
  els.resultScreen.hidden = true;
  els.questionCard.classList.remove("thinking", "finalized");
  setButtonsDisabled(false);
  chooseNextQuestion();
  render();
  if (window.gsap) {
    gsap.fromTo(els.questionCard, { scale: 0.96, opacity: 0.7 }, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.5)" });
  }
}

function normalizedRankings() {
  const total = [...state.scores.values()].reduce((sum, score) => sum + score, 0);
  return players
    .map((player) => ({
      player,
      confidence: total ? (state.scores.get(player.name) / total) * 100 : 0
    }))
    .sort((a, b) => b.confidence - a.confidence);
}

function chooseNextQuestion() {
  const available = questions.filter((question) => !state.asked.has(question.id));
  if (!available.length) {
    finishGame();
    return;
  }

  let bestQuestion = available[0];
  let bestScore = Number.POSITIVE_INFINITY;
  const totalWeight = [...state.scores.values()].reduce((sum, score) => sum + score, 0);

  available.forEach((question) => {
    const yesWeight = players.reduce((sum, player) => {
      return sum + (player.traits[question.id] ? state.scores.get(player.name) : 0);
    }, 0);
    const splitBalance = Math.abs(totalWeight / 2 - yesWeight);
    const repeatedThemePenalty = recentQuestionTheme(question.id) ? totalWeight * 0.08 : 0;
    const score = splitBalance + repeatedThemePenalty;

    if (score < bestScore) {
      bestScore = score;
      bestQuestion = question;
    }
  });

  state.currentQuestion = bestQuestion;
}

function recentQuestionTheme(questionId) {
  const recentIds = state.history.slice(-2).map((entry) => entry.question.id);
  if (!recentIds.length) return false;
  const teamIds = ["rcb", "csk", "mi", "kkr", "srh", "rr", "gt", "pbks", "lsg", "dc"];
  const roleIds = ["batter", "bowler", "allRounder", "wicketkeeper", "paceBowler", "spinBowler"];
  return [teamIds, roleIds].some((group) => group.includes(questionId) && recentIds.some((id) => group.includes(id)));
}

function applyAnswer(answer) {
  if (!state.currentQuestion || state.finished || state.thinking) return;

  const question = state.currentQuestion;
  playClickSound();
  state.thinking = true;
  state.asked.add(question.id);
  state.history.push({ question, answer });
  setButtonsDisabled(true);
  els.questionCard.classList.add("thinking");
  renderHistory();

  window.setTimeout(() => {
    players.forEach((player) => {
      const traitMatches = Boolean(player.traits[question.id]);
      const current = state.scores.get(player.name);
      let multiplier = 1;

      if (answer === "yes") multiplier = traitMatches ? 1.9 : 0.16;
      if (answer === "no") multiplier = traitMatches ? 0.16 : 1.9;
      if (answer === "maybe") multiplier = traitMatches ? 1.22 : 0.8;
      if (answer === "unknown") multiplier = 1;

      state.scores.set(player.name, Math.max(current * multiplier, 0.0001));
    });

    state.thinking = false;
    els.questionCard.classList.remove("thinking");

    const top = normalizedRankings()[0];
    if (top.confidence >= threshold || state.asked.size === questions.length) {
      finishGame();
    } else {
      chooseNextQuestion();
      setButtonsDisabled(false);
      pulseQuestion();
    }

    render();
  }, 1150 + Math.random() * 650);
}

function finishGame() {
  state.finished = true;
  state.thinking = false;
  setButtonsDisabled(true);
  els.questionCard.classList.add("finalized");
  const top = normalizedRankings()[0];
  loadPlayerImage(els.playerImage, top.player);
  els.playerImage.alt = `${top.player.name} photo`;
  els.guessName.textContent = `🎯 I guess: ${top.player.name}`;
  els.guessDetails.textContent = `${top.player.role} | ${top.player.team}`;
  els.guessConfidence.textContent = `${Math.round(top.confidence)}%`;
  els.questionKicker.textContent = "The confidence threshold has been reached";
  els.questionText.innerHTML = `<span class="question-icon">🤖</span><span class="question-copy">I found your IPL player: ${top.player.name}.</span>`;
  els.reasonList.innerHTML = buildReasoning(top.player);
  els.resultScreen.hidden = false;
  render();
  celebrate();
  playWinSound();

  if (window.gsap) {
    gsap.fromTo(els.resultScreen, { y: 26, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 0.72, ease: "back.out(1.35)" });
    gsap.fromTo("#playerImage", { scale: 0.78, rotate: -4 }, { scale: 1, rotate: 0, duration: 0.9, ease: "elastic.out(1, 0.55)" });
  }
  window.setTimeout(() => {
    els.resultScreen.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 120);
}

function render() {
  const rankings = normalizedRankings();
  const top = rankings[0];
  const activeCandidates = rankings.filter((entry) => entry.confidence >= 4).length;

  els.questionCount.textContent = state.asked.size;
  els.topConfidence.textContent = `${Math.round(top.confidence)}%`;
  els.candidateCount.textContent = activeCandidates;

  if (!state.finished && state.currentQuestion) {
    els.questionKicker.textContent = `Question ${state.asked.size + 1} selected dynamically`;
    els.questionText.innerHTML = `<span class="question-icon">🧠</span><span class="question-copy">${state.currentQuestion.text}</span>`;
  }

  renderLeaderboard(rankings);
  renderHistory();
  enhanceLoadedPhotos();
}

function renderLeaderboard(rankings) {
  els.leaderboard.innerHTML = rankings
    .slice(0, 3)
    .map(({ player, confidence }, index) => {
      const pct = Math.max(1, Math.round(confidence));
      const fallback = fallbackImage(player);
      return `
        <div class="rank-row">
          <img class="avatar" src="${fallback}" data-photo="${player.image}" alt="${player.name}" />
          <div>
            <div class="rank-head">
              <span class="rank-name">${index + 1}. ${player.name}</span>
              <span class="score">${pct}%</span>
            </div>
            <span class="rank-meta">${player.role} | ${player.team}</span>
            <span class="score-track"><span style="width: ${pct}%"></span></span>
          </div>
        </div>
      `;
    })
    .join("");

  if (window.gsap) {
    gsap.fromTo(".rank-row", { x: 16, opacity: 0 }, { x: 0, opacity: 1, duration: 0.36, stagger: 0.055, ease: "power2.out" });
  }
}

function renderHistory() {
  els.historyList.innerHTML = state.history.length
    ? state.history
        .map((entry, index) => {
          return `<div class="history-item"><strong>Q${index + 1} &rarr; ${formatAnswer(entry.answer)}</strong><br>${entry.question.text}</div>`;
        })
        .join("")
    : '<div class="history-item">No answers yet. Start the game and think of a player.</div>';
  els.historyList.scrollTop = els.historyList.scrollHeight;
}

function buildReasoning(player) {
  const usefulAnswers = state.history
    .filter((entry) => entry.answer !== "unknown")
    .filter((entry) => {
      const trait = Boolean(player.traits[entry.question.id]);
      return entry.answer === "maybe" || (entry.answer === "yes" && trait) || (entry.answer === "no" && !trait);
    })
    .slice(-5);
}

function pulseQuestion() {
  els.questionCard.classList.remove("question-swap");
  void els.questionCard.offsetWidth;
  els.questionCard.classList.add("question-swap");
  if (!window.gsap) return;
  gsap.fromTo(els.questionCard, { scale: 0.985 }, { scale: 1, duration: 0.35, ease: "power2.out" });
  gsap.fromTo("#questionText", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.42, ease: "power3.out" });
}

function createRipple(event, button) {
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height);
  ripple.className = "ripple";
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  button.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

function celebrate() {
  const colors = ["#28e7ff", "#a855f7", "#ff3ec8", "#b7ff3c", "#ffc247"];
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < 110; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty("--confetti-color", colors[index % colors.length]);
    piece.style.setProperty("--fall-speed", `${1.8 + Math.random() * 1.7}s`);
    piece.style.setProperty("--x-drift", `${-90 + Math.random() * 180}px`);
    piece.style.animationDelay = `${Math.random() * 0.35}s`;
    fragment.appendChild(piece);
  }
  els.confettiLayer.appendChild(fragment);
  window.setTimeout(() => {
    els.confettiLayer.innerHTML = "";
  }, 3800);
}

function getAudioContext() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  if (!window.iplAudioContext) window.iplAudioContext = new AudioContext();
  return window.iplAudioContext;
}

function playTone(frequency, duration, gainValue = 0.035) {
  const context = getAudioContext();
  if (!context) return;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(gainValue, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + duration);
}

function playClickSound() {
  playTone(420, 0.08, 0.025);
  window.setTimeout(() => playTone(640, 0.08, 0.018), 45);
}

function playWinSound() {
  [523, 659, 784, 1046].forEach((frequency, index) => {
    window.setTimeout(() => playTone(frequency, 0.14, 0.03), index * 95);
  });
}

els.startBtn.addEventListener("click", () => {
  playClickSound();
  els.gameLayout.scrollIntoView({ behavior: "smooth", block: "start" });
  if (window.gsap) pulseQuestion();
});

els.answerGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-answer]");
  if (!button || button.disabled) return;
  createRipple(event, button);
  applyAnswer(button.dataset.answer);
});

els.restartBtn.addEventListener("click", resetGame);
els.playAgainBtn.addEventListener("click", () => {
  playClickSound();
  resetGame();
  els.heroPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

bootMotion();
