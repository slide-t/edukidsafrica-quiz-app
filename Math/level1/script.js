const questions = [
  { question: "What is 2 + 3?", options: ["4", "5", "6", "3"], correct: "5" },
  { question: "Which number comes after 19?", options: ["21", "18", "20", "22"], correct: "20" },
  { question: "What is 6 − 2?", options: ["2", "4", "5", "6"], correct: "4" },
  { question: "How many sides does a triangle have?", options: ["3", "4", "5", "6"], correct: "3" },
  { question: "Which is greater: 9 or 6?", options: ["6", "Equal", "9", "Can't tell"], correct: "9" },
  { question: "What is half of 10?", options: ["2", "4", "5", "6"], correct: "5" },
  { question: "Which of these is an even number?", options: ["3", "5", "8", "9"], correct: "8" },
  { question: "How many legs do 2 chickens have?", options: ["2", "4", "6", "8"], correct: "4" },
  { question: "10 − 7 equals?", options: ["3", "2", "1", "4"], correct: "3" },
  { question: "Which is smallest: 12, 15, 9, 14?", options: ["9", "12", "15", "14"], correct: "9" },

  { question: "Count in 2s: 2, 4, __?", options: ["5", "6", "8", "10"], correct: "6" },
  { question: "What is the shape of a ball?", options: ["Circle", "Triangle", "Cube", "Square"], correct: "Circle" },
  { question: "7 + 0 equals?", options: ["7", "0", "1", "6"], correct: "7" },
  { question: "Which number is missing? 3, 6, __, 12", options: ["8", "9", "10", "9"], correct: "9" },
  { question: "Which is odd: 2, 4, 6, 7?", options: ["2", "4", "6", "7"], correct: "7" },
  { question: "What is 3 + 4?", options: ["6", "8", "7", "9"], correct: "7" },
  { question: "How many hours make 1 day?", options: ["12", "24", "48", "60"], correct: "24" },
  { question: "What time is half past 4?", options: ["4:00", "4:30", "5:00", "3:30"], correct: "4:30" },
  { question: "What is 9 − 5?", options: ["2", "3", "4", "5"], correct: "4" },
  { question: "Which number is between 4 and 6?", options: ["3", "5", "6", "7"], correct: "5" },

  { question: "How many days in a week?", options: ["5", "6", "7", "8"], correct: "7" },
  { question: "A rectangle has how many corners?", options: ["2", "3", "4", "5"], correct: "4" },
  { question: "What is double of 6?", options: ["10", "11", "12", "13"], correct: "12" },
  { question: "Count in 5s: 5, 10, __?", options: ["12", "15", "14", "20"], correct: "15" },
  { question: "Which coin is smallest in Nigeria?", options: ["₦1", "₦5", "₦10", "₦20"], correct: "₦1" },
  { question: "5 × 2 = ?", options: ["10", "12", "8", "7"], correct: "10" },
  { question: "Which number comes before 100?", options: ["98", "99", "101", "97"], correct: "99" },
  { question: "How many zeros are in 100?", options: ["1", "2", "3", "0"], correct: "2" },
  { question: "What is 10 ÷ 2?", options: ["4", "5", "6", "7"], correct: "5" },
  { question: "What is 3 × 3?", options: ["6", "8", "9", "7"], correct: "9" },

  { question: "How many sides does a square have?", options: ["3", "4", "5", "6"], correct: "4" },
  { question: "How many months make a year?", options: ["10", "11", "12", "13"], correct: "12" },
  { question: "Which is a 2D shape?", options: ["Cube", "Circle", "Ball", "Box"], correct: "Circle" },
  { question: "Which is smallest: 3, 5, 2, 7?", options: ["3", "5", "2", "7"], correct: "2" },
  { question: "What is 8 − 6?", options: ["1", "2", "3", "4"], correct: "2" },
  { question: "What is 4 + 4?", options: ["6", "8", "10", "7"], correct: "8" },
  { question: "Which is greater: 14 or 13?", options: ["13", "14", "Equal", "None"], correct: "14" },
  { question: "How many legs do 4 goats have?", options: ["8", "12", "16", "20"], correct: "16" },
  { question: "Which is not a shape?", options: ["Square", "Triangle", "Apple", "Circle"], correct: "Apple" },
  { question: "What is 1 more than 29?", options: ["28", "30", "31", "32"], correct: "30" },

  { question: "Which number is an odd number?", options: ["2", "4", "7", "8"], correct: "7" },
  { question: "What is 6 + 6?", options: ["10", "12", "13", "14"], correct: "12" },
  { question: "How many minutes in an hour?", options: ["30", "60", "90", "100"], correct: "60" },
  { question: "What is the value of 5 tens?", options: ["5", "15", "50", "55"], correct: "50" },
  { question: "How many months in a term?", options: ["2", "3", "4", "5"], correct: "3" },
  { question: "What shape is a wheel?", options: ["Square", "Circle", "Triangle", "Cube"], correct: "Circle" },
  { question: "What is 2 more than 6?", options: ["7", "8", "9", "10"], correct: "8" },
  { question: "How many days in February (non-leap year)?", options: ["30", "28", "29", "31"], correct: "28" },
  { question: "Which is heavier: 1kg or 500g?", options: ["1kg", "500g", "Equal", "None"], correct: "1kg" },
  { question: "What is the sum of 10 and 5?", options: ["12", "15", "14", "16"], correct: "15" }
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



    

