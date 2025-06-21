const questions = [
  { question: "What is 24 ÷ 6?", options: ["3", "4", "6", "5"], correct: "4" },
  { question: "Multiply: 7 × 5", options: ["30", "35", "40", "25"], correct: "35" },
  { question: "What is 100 − 45?", options: ["55", "65", "75", "45"], correct: "55" },
  { question: "Write ⅓ as a decimal.", options: ["0.25", "0.33", "0.75", "1.3"], correct: "0.33" },
  { question: "How many millilitres in 1 litre?", options: ["10", "100", "1000", "500"], correct: "1000" },
  { question: "Which is a prime number?", options: ["9", "12", "7", "15"], correct: "7" },
  { question: "Find the missing number: 8, 16, __, 32", options: ["20", "24", "28", "24"], correct: "24" },
  { question: "What is the sum of 87 and 45?", options: ["132", "122", "110", "125"], correct: "132" },
  { question: "Roman numeral for 50 is?", options: ["X", "L", "C", "V"], correct: "L" },
  { question: "Find the value of: 6²", options: ["36", "12", "18", "30"], correct: "36" },

  { question: "What is 0.5 + 0.25?", options: ["0.50", "0.70", "0.75", "1.0"], correct: "0.75" },
  { question: "What is ⅓ of 60?", options: ["15", "30", "20", "25"], correct: "20" },
  { question: "Estimate 49 + 51", options: ["90", "100", "110", "120"], correct: "100" },
  { question: "What is the perimeter of a square with side 6cm?", options: ["12cm", "18cm", "24cm", "36cm"], correct: "24cm" },
  { question: "Which is the largest: ¾, ⅔, ½?", options: ["¾", "⅔", "½", "All equal"], correct: "¾" },
  { question: "Area of rectangle: 6cm × 4cm", options: ["20cm²", "24cm²", "16cm²", "26cm²"], correct: "24cm²" },
  { question: "Simplify: 12 ÷ (3 + 1)", options: ["4", "3", "2", "1"], correct: "3" },
  { question: "Which of these is not an even number?", options: ["2", "6", "9", "10"], correct: "9" },
  { question: "5 tens and 6 ones equals?", options: ["65", "56", "66", "55"], correct: "56" },
  { question: "Convert 1500g to kg", options: ["1.5kg", "15kg", "150kg", "0.15kg"], correct: "1.5kg" },

  { question: "Write ¾ as decimal", options: ["0.25", "0.5", "0.75", "1.25"], correct: "0.75" },
  { question: "Write 90 in Roman numerals", options: ["L", "XC", "IX", "XL"], correct: "XC" },
  { question: "How many seconds in 5 minutes?", options: ["300", "60", "150", "200"], correct: "300" },
  { question: "Which is correct? 4 × (2 + 3)", options: ["20", "16", "12", "10"], correct: "20" },
  { question: "What is 125 − 25?", options: ["100", "110", "90", "120"], correct: "100" },
  { question: "How many faces does a cube have?", options: ["4", "6", "8", "12"], correct: "6" },
  { question: "Which is divisible by 3?", options: ["21", "22", "20", "17"], correct: "21" },
  { question: "What is 3⁵ (3 to power 5)?", options: ["243", "125", "15", "81"], correct: "243" },
  { question: "Mean of 4, 6, 10?", options: ["8", "7", "6.5", "10"], correct: "6.67" },
  { question: "How many quarters make 1?", options: ["2", "3", "4", "5"], correct: "4" },

  { question: "Which unit is used to measure weight?", options: ["Litres", "Kilogram", "Centimetre", "Metre"], correct: "Kilogram" },
  { question: "Which number has 6 in hundreds place: 654?", options: ["4", "5", "6", "None"], correct: "6" },
  { question: "Write 1⁄10 as decimal", options: ["0.01", "0.1", "0.10", "0.001"], correct: "0.1" },
  { question: "Find LCM of 3 and 4", options: ["6", "9", "12", "24"], correct: "12" },
  { question: "What is 10% of 200?", options: ["10", "20", "30", "25"], correct: "20" },
  { question: "Which is a square number?", options: ["3", "4", "6", "7"], correct: "4" },
  { question: "12 is divisible by?", options: ["5", "4", "7", "9"], correct: "4" },
  { question: "How many 10s in 230?", options: ["20", "23", "30", "50"], correct: "23" },
  { question: "Which of these is a factor of 18?", options: ["2", "5", "7", "11"], correct: "2" },
  { question: "How many days in a leap year?", options: ["365", "364", "366", "360"], correct: "366" },

  { question: "Which is greater: 0.9 or 0.89?", options: ["0.89", "Equal", "0.9", "None"], correct: "0.9" },
  { question: "What is the mode of 3, 3, 2, 4, 3?", options: ["2", "3", "4", "No mode"], correct: "3" },
  { question: "Perimeter of a square of side 5cm", options: ["10cm", "15cm", "20cm", "25cm"], correct: "20cm" },
  { question: "If a class has 8 rows and 5 columns, how many seats?", options: ["40", "45", "50", "35"], correct: "40" },
  { question: "What is ¼ of 80?", options: ["15", "20", "25", "30"], correct: "20" },
  { question: "Volume of cube with side 3cm", options: ["9cm³", "18cm³", "27cm³", "36cm³"], correct: "27cm³" },
  { question: "Which number is both even and a multiple of 3?", options: ["2", "4", "6", "9"], correct: "6" },
  { question: "Which angle is less than 90°?", options: ["Acute", "Right", "Obtuse", "Straight"], correct: "Acute" },
  { question: "10³ equals?", options: ["100", "1000", "10000", "30"], correct: "1000" },
  { question: "6 ÷ ½ equals?", options: ["3", "12", "1", "6"], correct: "12" },

  { question: "Write ⅖ as decimal", options: ["0.2", "0.25", "0.4", "0.5"], correct: "0.4" },
  { question: "A triangle has how many angles?", options: ["2", "3", "4", "5"], correct: "3" },
  { question: "What is the product of 11 and 3?", options: ["33", "13", "44", "31"], correct: "33" },
  { question: "Half of 1 litre is?", options: ["100ml", "500ml", "1.5L", "250ml"], correct: "500ml" },
  { question: "Write the expanded form: 305", options: ["300+5", "300+50", "305", "30+5"], correct: "300+5" },
  { question: "Sum of angles in triangle is?", options: ["90°", "180°", "270°", "360°"], correct: "180°" }

  
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
    <p>${score >= 55 ? "🎉 Well done!" : "Try again to score 45 and above!"}</p>
  `;

  if (score >= 55) {
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



    

