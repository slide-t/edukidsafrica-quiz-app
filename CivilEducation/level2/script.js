const questions = [
  {
    question: "Which is the correct plural of 'child'?",
    options: ["Childs", "Children", "Childes", "Childrens"],
    correct: "Children"
  },
  {
    question: "Identify the verb in the sentence: 'She runs every morning.'",
    options: ["She", "Runs", "Every", "Morning"],
    correct: "Runs"
  },
  {
    question: "What is the opposite of 'brave'?",
    options: ["Fearless", "Shy", "Cowardly", "Strong"],
    correct: "Cowardly"
  },
  
  {
    question: "What is the opposite of 'early'?",
    options: ["Late", "Fast", "Long", "Soon"],
    correct: "Late"
  },
  {
    question: "What does the word 'bark' mean in 'The dog barked loudly'?",
    options: ["Tree covering", "Cry of a dog", "Wood", "Scratch"],
    correct: "Cry of a dog"
  },
  {
    question: "What is a synonym for 'happy'?",
    options: ["Sad", "Angry", "Joyful", "Tired"],
    correct: "Joyful"
  },
  {
    question: "Which is a declarative sentence?",
    options: ["Close the door.", "Is that your book?", "I am hungry.", "Where are you?"],
    correct: "I am hungry."
  },
  {
    question: "Pick a sentence with correct grammar.",
    options: ["He going school", "He go to school", "He is going to school", "He gone to school"],
    correct: "He is going to school"
  },
  {
    question: "Which part of speech is 'quickly'?",
    options: ["Noun", "Adjective", "Adverb", "Verb"],
    correct: "Adverb"
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
  window.location.href = "edukidsafrica-quiz-app/CivilEducation/level3/index.html";
}

// Only run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});



    





