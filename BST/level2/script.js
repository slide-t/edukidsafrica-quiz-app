const questions = [
  {
    question: "What system in the body helps us breathe?",
    options: ["Respiratory system", "Digestive system", "Skeletal system", "Circulatory system"],
    correct: "Respiratory system"
  },
  {
    question: "The heart is part of which system?",
    options: ["Circulatory system", "Respiratory system", "Nervous system", "Digestive system"],
    correct: "Circulatory system"
  },
  {
    question: "Which part of the plant holds it firmly in the ground?",
    options: ["Root", "Leaf", "Stem", "Fruit"],
    correct: "Root"
  },
  {
    question: "What do plants absorb from the soil?",
    options: ["Water and minerals", "Air", "Oil", "Light"],
    correct: "Water and minerals"
  },
  {
    question: "What is the function of the brain?",
    options: ["Controls the body", "Pumps blood", "Helps us breathe", "Digests food"],
    correct: "Controls the body"
  },
  {
    question: "Which of these is a simple machine?",
    options: ["Pulley", "Switch", "Stove", "Wire"],
    correct: "Pulley"
  },
  {
    question: "We use a lever to?",
    options: ["Lift heavy objects", "Write", "Cook", "Paint"],
    correct: "Lift heavy objects"
  },
  {
    question: "Which gas do we inhale to stay alive?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    correct: "Oxygen"
  },
  {
    question: "All living things must?",
    options: ["Grow", "Be quiet", "Sleep all day", "Wear clothes"],
    correct: "Grow"
  },
  {
    question: "The skin helps to?",
    options: ["Protect the body", "Sing", "Chew", "See"],
    correct: "Protect the body"
  },
  {
    question: "Photosynthesis happens in the?",
    options: ["Leaves", "Roots", "Stem", "Fruit"],
    correct: "Leaves"
  },
  {
    question: "Which of these is a natural source of light?",
    options: ["Sun", "Torch", "Bulb", "Lamp"],
    correct: "Sun"
  },
  {
    question: "Heat is a form of?",
    options: ["Energy", "Air", "Water", "Gas"],
    correct: "Energy"
  },
  {
    question: "We must dispose waste properly to avoid?",
    options: ["Pollution", "Rain", "Clean water", "Sunshine"],
    correct: "Pollution"
  },
  {
    question: "How many sense organs do humans have?",
    options: ["Five", "Two", "Ten", "Seven"],
    correct: "Five"
  },
  {
    question: "An example of renewable energy is?",
    options: ["Solar", "Coal", "Petrol", "Diesel"],
    correct: "Solar"
  },
  {
    question: "Which organ pumps blood in the body?",
    options: ["Heart", "Lungs", "Kidneys", "Stomach"],
    correct: "Heart"
  },
  {
    question: "The teeth are used for?",
    options: ["Chewing food", "Hearing", "Smelling", "Walking"],
    correct: "Chewing food"
  },
  {
    question: "Water boils at what temperature?",
    options: ["100°C", "0°C", "10°C", "50°C"],
    correct: "100°C"
  },
  {
    question: "The kidneys help to remove?",
    options: ["Waste from blood", "Air", "Food", "Light"],
    correct: "Waste from blood"
  },
  {
    question: "What is the natural satellite of Earth?",
    options: ["Moon", "Star", "Sun", "Cloud"],
    correct: "Moon"
  },
  {
    question: "Which machine helps to move objects upward?",
    options: ["Pulley", "Fan", "Phone", "Chair"],
    correct: "Pulley"
  },
  {
    question: "A type of motion in a swing is?",
    options: ["To and fro", "Zigzag", "Spinning", "Running"],
    correct: "To and fro"
  },
  {
    question: "Which of these is biodegradable waste?",
    options: ["Banana peels", "Plastic", "Glass", "Metal"],
    correct: "Banana peels"
  },
  {
    question: "To avoid electric shock, never touch?",
    options: ["Naked wires", "Wood", "Plastic", "Clothes"],
    correct: "Naked wires"
  },
  {
    question: "The large bone in the leg is called?",
    options: ["Femur", "Skull", "Ribs", "Spine"],
    correct: "Femur"
  },
  {
    question: "We can prevent malaria by avoiding?",
    options: ["Mosquito bites", "Water", "Dust", "Books"],
    correct: "Mosquito bites"
  },
  {
    question: "Evaporation turns water into?",
    options: ["Vapour", "Oil", "Ice", "Gas"],
    correct: "Vapour"
  },
  {
    question: "The process of water falling from the sky is?",
    options: ["Rainfall", "Boiling", "Melting", "Freezing"],
    correct: "Rainfall"
  },
  {
    question: "Plants breathe in?",
    options: ["Carbon dioxide", "Oxygen", "Smoke", "Steam"],
    correct: "Carbon dioxide"
  },
  {
    question: "Which part of the body digests food?",
    options: ["Stomach", "Lungs", "Heart", "Skin"],
    correct: "Stomach"
  },
  {
    question: "The fan works using?",
    options: ["Electricity", "Petrol", "Oil", "Gas"],
    correct: "Electricity"
  },
  {
    question: "Clean water is safe for?",
    options: ["Drinking", "Painting", "Cleaning shoes", "Writing"],
    correct: "Drinking"
  },
  {
    question: "An example of a gas is?",
    options: ["Oxygen", "Iron", "Water", "Wood"],
    correct: "Oxygen"
  },
  {
    question: "A class of food that gives energy is?",
    options: ["Carbohydrate", "Vitamin", "Protein", "Fat"],
    correct: "Carbohydrate"
  },
  {
    question: "What do we use a thermometer for?",
    options: ["Measuring temperature", "Cutting paper", "Drinking water", "Measuring time"],
    correct: "Measuring temperature"
  },
  {
    question: "Which waste should go into a compost bin?",
    options: ["Vegetable peels", "Glass", "Plastic", "Metal"],
    correct: "Vegetable peels"
  },
  {
    question: "We use a solar panel to capture?",
    options: ["Sunlight", "Water", "Wind", "Gas"],
    correct: "Sunlight"
  },
  {
    question: "ICT means?",
    options: ["Information and Communication Technology", "Internet Cable Tool", "Inside Code Transfer", "Integrated Class Tablet"],
    correct: "Information and Communication Technology"
  },
  {
    question: "The computer input device is?",
    options: ["Keyboard", "Monitor", "Speaker", "Screen"],
    correct: "Keyboard"
  },
  {
    question: "A wheelbarrow is an example of?",
    options: ["Simple machine", "Electric machine", "Flying machine", "Typing machine"],
    correct: "Simple machine"
  },
  {
    question: "How many lungs do we have?",
    options: ["Two", "Four", "One", "Three"],
    correct: "Two"
  },
  {
    question: "Light travels in a?",
    options: ["Straight line", "Circle", "Zigzag", "Spiral"],
    correct: "Straight line"
  },
  {
    question: "Food can be preserved by?",
    options: ["Refrigeration", "Exposing to sun", "Leaving open", "Putting in water"],
    correct: "Refrigeration"
  },
  {
    question: "The moon gets its light from?",
    options: ["The sun", "Itself", "Earth", "Stars"],
    correct: "The sun"
  },
  {
    question: "We use a computer to?",
    options: ["Store and process data", "Cook food", "Draw water", "Build houses"],
    correct: "Store and process data"
  },
  {
    question: "Safety signs help us to?",
    options: ["Avoid danger", "Eat well", "Sleep better", "Dance well"],
    correct: "Avoid danger"
  },
  {
    question: "Glass is usually used for?",
    options: ["Windows", "Shoes", "Clothes", "Food"],
    correct: "Windows"
  },
  {
    question: "What happens when objects are heated?",
    options: ["They expand", "They disappear", "They shrink", "They float"],
    correct: "They expand"
  },
  {
    question: "The Earth is shaped like a?",
    options: ["Ball", "Box", "Triangle", "Plate"],
    correct: "Ball"
  },
  {
    question: "Which part of a plant makes food?",
    options: ["Leaf", "Root", "Stem", "Flower"],
    correct: "Leaf"
  },
  {
    question: "The spinal cord is protected by the?",
    options: ["Backbone", "Skull", "Ribs", "Heart"],
    correct: "Backbone"
  },
  {
    question: "We use the lungs for?",
    options: ["Breathing", "Running", "Eating", "Hearing"],
    correct: "Breathing"
  },
  {
    question: "A carpenter uses which tool?",
    options: ["Hammer", "Chalk", "Syringe", "Mouse"],
    correct: "Hammer"
  },
  {
    question: "Which of these is a form of energy?",
    options: ["Sound", "Salt", "Stone", "Paper"],
    correct: "Sound"
  },
  {
    question: "A material that does not allow electricity is?",
    options: ["Plastic", "Copper", "Aluminum", "Iron"],
    correct: "Plastic"
  },
  {
    question: "The computer device that displays output is?",
    options: ["Monitor", "Mouse", "Keyboard", "Speaker"],
    correct: "Monitor"
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
  window.location.href = "https://slide-t.github.io/edukidsafrica-quiz-app/English/level2/index.html";
}

// Only run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});

