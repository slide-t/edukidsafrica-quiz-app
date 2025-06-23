const questions = [
  {
    question: "Which part of the body helps us to see?",
    options: ["Eye", "Ear", "Nose", "Hand"],
    correct: "Eye"
  },
  {
    question: "We use our nose to?",
    options: ["Smell", "Hear", "See", "Touch"],
    correct: "Smell"
  },
  {
    question: "The sun is a source of?",
    options: ["Light", "Water", "Food", "Air"],
    correct: "Light"
  },
  {
    question: "Which of these is a living thing?",
    options: ["Goat", "Chair", "Book", "Spoon"],
    correct: "Goat"
  },
  {
    question: "We use our hands to?",
    options: ["Hold things", "Smell", "Walk", "See"],
    correct: "Hold things"
  },
  {
    question: "Which part of the body helps us to taste?",
    options: ["Tongue", "Ear", "Eye", "Nose"],
    correct: "Tongue"
  },
  {
    question: "Air is important for?",
    options: ["Breathing", "Walking", "Sleeping", "Running"],
    correct: "Breathing"
  },
  {
    question: "What do plants need to grow?",
    options: ["Water, air, and sunlight", "Sugar", "Salt", "Stone"],
    correct: "Water, air, and sunlight"
  },
  {
    question: "Which of these is man-made?",
    options: ["Cup", "Tree", "Fish", "Goat"],
    correct: "Cup"
  },
  {
    question: "Which sense organ helps us to hear?",
    options: ["Ear", "Eye", "Mouth", "Nose"],
    correct: "Ear"
  },
  {
    question: "The soil is found?",
    options: ["On the ground", "In the sky", "In water", "In fire"],
    correct: "On the ground"
  },
  {
    question: "Which of these moves by flying?",
    options: ["Bird", "Goat", "Fish", "Lizard"],
    correct: "Bird"
  },
  {
    question: "What do we use to brush our teeth?",
    options: ["Toothbrush", "Spoon", "Knife", "Pen"],
    correct: "Toothbrush"
  },
  {
    question: "We get wood from?",
    options: ["Tree", "Fish", "Water", "Stone"],
    correct: "Tree"
  },
  {
    question: "A place where we grow crops is called?",
    options: ["Farm", "Shop", "House", "Garage"],
    correct: "Farm"
  },
  {
    question: "The moon is seen at?",
    options: ["Night", "Morning", "Afternoon", "Dawn"],
    correct: "Night"
  },
  {
    question: "Which of these is a source of water?",
    options: ["Rain", "Sun", "Air", "Light"],
    correct: "Rain"
  },
  {
    question: "Materials that can bend easily are called?",
    options: ["Flexible", "Hard", "Strong", "Sharp"],
    correct: "Flexible"
  },
  {
    question: "We use a broom to?",
    options: ["Sweep", "Cook", "Cut", "Write"],
    correct: "Sweep"
  },
  {
    question: "The sun rises in the?",
    options: ["East", "West", "North", "South"],
    correct: "East"
  },
  {
    question: "We should always wash our hands before?",
    options: ["Eating", "Sleeping", "Running", "Reading"],
    correct: "Eating"
  },
  {
    question: "What type of material is rubber?",
    options: ["Stretchy", "Hot", "Metal", "Liquid"],
    correct: "Stretchy"
  },
  {
    question: "Which of these is good for our body?",
    options: ["Fruits", "Stones", "Dust", "Sand"],
    correct: "Fruits"
  },
  {
    question: "Which tool is used to cut paper?",
    options: ["Scissors", "Cup", "Plate", "Broom"],
    correct: "Scissors"
  },
  {
    question: "We must not play with?",
    options: ["Sharp objects", "Toys", "Ball", "Paper"],
    correct: "Sharp objects"
  },
  {
    question: "What do we use to carry our books?",
    options: ["School bag", "Pot", "Spoon", "Toothbrush"],
    correct: "School bag"
  },
  {
    question: "The stars are seen at?",
    options: ["Night", "Morning", "Noon", "Afternoon"],
    correct: "Night"
  },
  {
    question: "We use energy to?",
    options: ["Do work", "Sleep", "Rest", "Sit"],
    correct: "Do work"
  },
  {
    question: "Which one is a good habit?",
    options: ["Washing hands", "Throwing dirt", "Playing with fire", "Not bathing"],
    correct: "Washing hands"
  },
  {
    question: "We get meat from?",
    options: ["Animals", "Plants", "Stones", "Water"],
    correct: "Animals"
  },
  {
    question: "Which of these is used for cooking?",
    options: ["Fire", "Fan", "Shoe", "Book"],
    correct: "Fire"
  },
  {
    question: "What do we use for protection from rain?",
    options: ["Umbrella", "Cup", "Chalk", "Board"],
    correct: "Umbrella"
  },
  {
    question: "How many sense organs do we have?",
    options: ["Five", "Three", "Two", "Seven"],
    correct: "Five"
  },
  {
    question: "What do plants give off for us to breathe?",
    options: ["Oxygen", "Water", "Smoke", "Gas"],
    correct: "Oxygen"
  },
  {
    question: "Which of these is soft and light?",
    options: ["Cotton", "Stone", "Wood", "Iron"],
    correct: "Cotton"
  },
  {
    question: "What is the shape of the sun?",
    options: ["Round", "Square", "Triangle", "Oval"],
    correct: "Round"
  },
  {
    question: "We wear clothes to?",
    options: ["Cover our body", "Sleep", "Write", "Drive"],
    correct: "Cover our body"
  },
  {
    question: "Which is NOT a natural source of light?",
    options: ["Bulb", "Sun", "Star", "Fire"],
    correct: "Bulb"
  },
  {
    question: "The food we eat gives us?",
    options: ["Energy", "Clothes", "Soap", "Money"],
    correct: "Energy"
  },
  {
    question: "Which of these can be recycled?",
    options: ["Plastic", "Air", "Sunlight", "Dust"],
    correct: "Plastic"
  },
  {
    question: "We must not run across the?",
    options: ["Road", "Classroom", "Playground", "Farm"],
    correct: "Road"
  },
  {
    question: "Which one is a natural resource?",
    options: ["Water", "Plate", "Chair", "Book"],
    correct: "Water"
  },
  {
    question: "We use a ruler to?",
    options: ["Draw lines", "Eat", "Cook", "Read"],
    correct: "Draw lines"
  },
  {
    question: "Iron is used to make?",
    options: ["Nails", "Cloth", "Soap", "Rubber"],
    correct: "Nails"
  },
  {
    question: "Rainwater is collected in a?",
    options: ["Bucket", "Shoe", "Plate", "Chair"],
    correct: "Bucket"
  },
  {
    question: "Heat comes from?",
    options: ["Fire", "Ice", "Fan", "Rain"],
    correct: "Fire"
  },
  {
    question: "We should clean our body every?",
    options: ["Day", "Week", "Month", "Year"],
    correct: "Day"
  },
  {
    question: "Which of these floats on water?",
    options: ["Plastic bottle", "Stone", "Iron", "Gold"],
    correct: "Plastic bottle"
  },
  {
    question: "A person who repairs electrical appliances is?",
    options: ["Electrician", "Doctor", "Farmer", "Teacher"],
    correct: "Electrician"
  },
  {
    question: "Paper is made from?",
    options: ["Trees", "Water", "Sand", "Rock"],
    correct: "Trees"
  }
];


let current = 0;
let score = 0;
let mistakes = 0;
let timer;

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
  let timeLeft = 10;
  document.getElementById("time").innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      showCorrect();
      setTimeout(nextQuestion, 1000);
    }
  }, 1000);
}

function renderQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const buttons = document.querySelectorAll(".options button");
  const shuffled = shuffleArray([...q.options]);

  buttons.forEach((btn, i) => {
    btn.innerText = shuffled[i];
    btn.className = "";
    btn.disabled = false;
  });

  startTimer();
}

function checkAnswer(button) {
  clearInterval(timer);
  const selected = button.innerText;
  const correct = questions[current].correct;

  const buttons = document.querySelectorAll(".options button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.classList.add("correct");
    } else if (btn.innerText === selected) {
      btn.classList.add("wrong");
    }
  });

  if (selected === correct) {
    score++;
    document.getElementById("score").innerText = score;
  } else {
    mistakes++;
    document.getElementById("mistakes").innerText = mistakes;
  }

  setTimeout(nextQuestion, 1000);
}

function showCorrect() {
  const correct = questions[current].correct;
  document.querySelectorAll(".options button").forEach(btn => {
    if (btn.innerText === correct) {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const box = document.getElementById("question-box");
  box.innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <p>${score >= 45 ? "🎉 Well done!" : "Try again to score 45 and above!"}</p>
  `;

  if (score >= 45) {
    document.getElementById("next-level").style.display = "inline-block";
  }
}

function goToNextLevel() {
  window.location.href = "https://slide-t.github.io/edukidsafrica-quiz-app/BST/level2/index.html";
}

// Only run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});
    
