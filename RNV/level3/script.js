const questions = [
  {
    "question": "Which of the following is a civic responsibility of citizens?",
    "options": ["Paying taxes", "Avoiding school", "Spreading rumours", "Dodging elections"],
    "answer": "Paying taxes"
  },
  {
    "question": "What does the green color in Nigeria’s flag represent?",
    "options": ["Agriculture", "War", "Water", "Peace"],
    "answer": "Agriculture"
  },
  {
    "question": "Why do we sing the national anthem?",
    "options": ["To show patriotism", "To waste time", "To start arguments", "To delay assembly"],
    "answer": "To show patriotism"
  },
  {
    "question": "Which of these is a national symbol?",
    "options": ["The Coat of Arms", "Television", "A Mobile Phone", "Wallet"],
    "answer": "The Coat of Arms"
  },
  {
    "question": "What does honesty help to build in a nation?",
    "options": ["Trust", "Greed", "Crime", "Jealousy"],
    "answer": "Trust"
  },
  {
    "question": "What is the duty of the Nigeria Police Force?",
    "options": ["To maintain law and order", "To build schools", "To clean roads", "To sing at events"],
    "answer": "To maintain law and order"
  },
  {
    "question": "Which of the following best shows respect for the national flag?",
    "options": ["Not letting it touch the ground", "Tearing it", "Throwing it away", "Ignoring it"],
    "answer": "Not letting it touch the ground"
  },
  {
    "question": "Why is it important to vote in elections?",
    "options": ["To choose leaders", "To play games", "To watch drama", "To avoid school"],
    "answer": "To choose leaders"
  },
  {
    "question": "The black shield in the coat of arms stands for what?",
    "options": ["Fertile soil", "Anger", "Pride", "Sky"],
    "answer": "Fertile soil"
  },
  {
    "question": "One way to show discipline in school is:",
    "options": ["Obeying rules", "Fighting", "Disobeying teachers", "Bullying others"],
    "answer": "Obeying rules"
  },
  {
    "question": "Which value is promoted when pupils help each other?",
    "options": ["Cooperation", "Disrespect", "Greed", "Selfishness"],
    "answer": "Cooperation"
  },
  {
    "question": "A good citizen is one who:",
    "options": ["Obeys the law", "Fights police", "Lies in court", "Destroys public property"],
    "answer": "Obeys the law"
  },
  {
    "question": "Which arm of government makes the law?",
    "options": ["Legislative", "Executive", "Judiciary", "Police"],
    "answer": "Legislative"
  },
  {
    "question": "What is the color of peace in the Nigerian Army uniform?",
    "options": ["White", "Red", "Yellow", "Brown"],
    "answer": "White"
  },
  {
    "question": "A child who respects elders shows:",
    "options": ["Good home training", "Pride", "Rebellion", "Disobedience"],
    "answer": "Good home training"
  },
  {
    "question": "Which of the following is an effect of corruption?",
    "options": ["Underdevelopment", "Peace", "Unity", "Love"],
    "answer": "Underdevelopment"
  },
  {
    "question": "Where is the eagle found on Nigeria’s coat of arms?",
    "options": ["At the top", "Under the horses", "Beside the flag", "On the ground"],
    "answer": "At the top"
  },
  {
    "question": "A society without rules will likely experience:",
    "options": ["Chaos", "Peace", "Growth", "Happiness"],
    "answer": "Chaos"
  },
  {
    "question": "Which of the following promotes good leadership?",
    "options": ["Transparency", "Dishonesty", "Greed", "Corruption"],
    "answer": "Transparency"
  },
  {
    "question": "Which is a good habit in a democratic society?",
    "options": ["Freedom of speech", "Fighting leaders", "Dictatorship", "Silencing others"],
    "answer": "Freedom of speech"
  },



  
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
  window.location.href = "math-level2.html";
}

// Only run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});



    




