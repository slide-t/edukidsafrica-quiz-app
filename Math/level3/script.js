const questions = [
  {
    question: "What is 3⁄4 of 24?",
    options: ["6", "12", "18", "20"],
    correct: "18"
  },
  {
    question: "Which number is a factor of both 24 and 36?",
    options: ["3", "5", "7", "13"],
    correct: "3"
  },
  {
    question: "Convert 0.75 to a fraction.",
    options: ["3⁄4", "1⁄2", "1⁄4", "7⁄10"],
    correct: "3⁄4"
  },
  {
    question: "What is the perimeter of a square with side 8 cm?",
    options: ["16 cm", "32 cm", "64 cm", "24 cm"],
    correct: "32 cm"
  },
  {
    question: "How many millilitres are in 3 litres?",
    options: ["3 ml", "30 ml", "300 ml", "3000 ml"],
    correct: "3000 ml"
  },
  {
    question: "Simplify: 18 ÷ 3 × 2",
    options: ["3", "6", "12", "9"],
    correct: "12"
  },
  {
    question: "What is the area of a rectangle 6 cm long and 4 cm wide?",
    options: ["10 cm²", "24 cm²", "20 cm²", "12 cm²"],
    correct: "24 cm²"
  },
  {
    question: "Write in words: 7,203",
    options: [
      "Seven hundred and three",
      "Seven thousand, two hundred and three",
      "Seventy-two and three",
      "Seven hundred and twenty-three"
    ],
    correct: "Seven thousand, two hundred and three"
  },
  {
    question: "Find the missing number: 300 – ___ = 125",
    options: ["125", "175", "185", "275"],
    correct: "175"
  },
  {
    question: "What is 25% of 80?",
    options: ["10", "20", "25", "30"],
    correct: "20"
  },

  {
    question: "Find the sum: 2⁄3 + 1⁄3",
    options: ["1", "2", "1⁄2", "1⁄3"],
    correct: "1"
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    correct: "6"
  },
  {
    question: "Convert 3.5 to a fraction.",
    options: ["7⁄2", "3⁄5", "1⁄2", "2⁄7"],
    correct: "7⁄2"
  },
  {
    question: "A box contains 6 red, 4 blue and 2 green balls. What is the probability of picking a green?",
    options: ["1⁄3", "1⁄6", "1⁄2", "2⁄12"],
    correct: "1⁄6"
  },
  {
    question: "Multiply: 0.2 × 0.5",
    options: ["0.01", "0.1", "0.5", "1.0"],
    correct: "0.1"
  },
  {
    question: "If 1 hour = 60 minutes, how many minutes are in 2 hours 30 minutes?",
    options: ["150", "120", "90", "180"],
    correct: "150"
  },
  {
    question: "Write in numerals: Six thousand and forty",
    options: ["640", "6040", "4060", "6004"],
    correct: "6040"
  },
  {
    question: "What is the mode of 4, 7, 4, 3, 4, 6?",
    options: ["3", "4", "6", "7"],
    correct: "4"
  },
  {
    question: "Solve: 3³",
    options: ["6", "9", "27", "81"],
    correct: "27"
  },
  {
    question: "What is the value of the digit 6 in 6,482?",
    options: ["6000", "600", "60", "6"],
    correct: "6000"
  },

  {
    question: "Find the LCM of 4 and 5",
    options: ["9", "10", "15", "20"],
    correct: "20"
  },
  {
    question: "A triangle with all sides equal is called?",
    options: ["Isosceles", "Scalene", "Equilateral", "Right-angled"],
    correct: "Equilateral"
  },
  {
    question: "What is 2⁄5 of 100?",
    options: ["20", "25", "30", "40"],
    correct: "40"
  },
  {
    question: "Which is a multiple of 7?",
    options: ["13", "14", "15", "16"],
    correct: "14"
  },
  {
    question: "What is 0.8 as a percentage?",
    options: ["80%", "8%", "0.8%", "800%"],
    correct: "80%"
  },
  {
    question: "Round 647 to the nearest hundred.",
    options: ["600", "700", "640", "650"],
    correct: "600"
  },
  {
    question: "What is the product of 9 and 12?",
    options: ["108", "118", "102", "98"],
    correct: "108"
  },
  {
    question: "Simplify: 2 + 3 × 4",
    options: ["20", "14", "24", "18"],
    correct: "14"
  },
  {
    question: "How many hours are in 2 days?",
    options: ["12", "24", "36", "48"],
    correct: "48"
  },
  {
    question: "Which angle is a right angle?",
    options: ["90°", "45°", "120°", "60°"],
    correct: "90°"
  },

  {
    question: "Write in expanded form: 4,325",
    options: [
      "4000 + 300 + 20 + 5",
      "400 + 30 + 25",
      "4300 + 25",
      "432 + 5"
    ],
    correct: "4000 + 300 + 20 + 5"
  },
  {
    question: "What is 1⁄2 + 3⁄4?",
    options: ["1", "1¼", "1⁄4", "2"],
    correct: "1¼"
  },
  {
    question: "How many days are in 3 weeks?",
    options: ["14", "15", "21", "30"],
    correct: "21"
  },
  {
    question: "What is 2.4 + 3.1?",
    options: ["5.5", "6.4", "7.2", "4.5"],
    correct: "5.5"
  },
  {
    question: "A bag costs ₦1,250 and a shoe ₦3,000. What is the total?",
    options: ["₦4,250", "₦4,000", "₦3,750", "₦2,750"],
    correct: "₦4,250"
  },
  {
    question: "What is the place value of 3 in 3,471?",
    options: ["300", "3", "3000", "30"],
    correct: "3000"
  },
  {
    question: "Divide 63 by 7",
    options: ["7", "8", "9", "6"],
    correct: "9"
  },
  {
    question: "Which number is a prime number?",
    options: ["9", "10", "11", "12"],
    correct: "11"
  },
  {
    question: "Multiply 0.4 by 10",
    options: ["4", "40", "0.04", "0.4"],
    correct: "4"
  },
  {
    question: "What is the volume of a cube with side 3 cm?",
    options: ["9 cm³", "27 cm³", "18 cm³", "12 cm³"],
    correct: "27 cm³"
  },
  {
    question: "What is the sum of the angles in a triangle?",
    options: ["180°", "360°", "90°", "270°"],
    correct: "180°"
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["5", "6", "8", "7"],
    correct: "6"
  },
  {
    question: "What is the perimeter of a square with side 9 cm?",
    options: ["36 cm", "18 cm", "27 cm", "30 cm"],
    correct: "36 cm"
  },
  {
    question: "What is the place value of 7 in 7,532?",
    options: ["Thousands", "Hundreds", "Tens", "Units"],
    correct: "Thousands"
  },
  {
    question: "Convert ¾ to a percentage.",
    options: ["75%", "25%", "50%", "90%"],
    correct: "75%"
  },
  {
    question: "Find the average of 10, 20, 30, and 40.",
    options: ["25", "20", "30", "35"],
    correct: "25"
  },
  {
    question: "What is the missing number: 64, ___, 16, 8",
    options: ["32", "48", "24", "56"],
    correct: "32"
  },
  {
    question: "Which fraction is equivalent to 0.5?",
    options: ["½", "⅓", "¾", "⅛"],
    correct: "½"
  },
  {
    question: "How many grams are in 2.5kg?",
    options: ["2500g", "250g", "200g", "1500g"],
    correct: "2500g"
  },
  {
    question: "What is the smallest prime number?",
    options: ["2", "1", "3", "5"],
    correct: "2"
  },
  {
    question: "Which of these is a multiple of 12?",
    options: ["24", "18", "15", "10"],
    correct: "24"
  },
  {
    question: "Find the square of 11.",
    options: ["121", "100", "144", "132"],
    correct: "121"
  },
  {
    question: "What is 2³ (2 raised to power 3)?",
    options: ["8", "6", "9", "4"],
    correct: "8"
  },
  {
    question: "What is the area of a rectangle 5cm by 4cm?",
    options: ["20cm²", "18cm²", "9cm²", "25cm²"],
    correct: "20cm²"
  },
  {
    question: "Convert 0.75 to a fraction.",
    options: ["¾", "½", "⅛", "⅓"],
    correct: "¾"
  },
  {
    question: "Find the value of 10% of 150.",
    options: ["15", "10", "20", "25"],
    correct: "15"
  },
  {
    question: "What is the mode in 3, 5, 5, 7, 8?",
    options: ["5", "3", "7", "8"],
    correct: "5"
  },
  {
    question: "How many milliliters are in 3.5 litres?",
    options: ["3500ml", "300ml", "35ml", "3000ml"],
    correct: "3500ml"
  },
  {
    question: "What is 5% of 200?",
    options: ["10", "5", "20", "15"],
    correct: "10"
  },
  {
    question: "How many edges does a cube have?",
    options: ["12", "6", "8", "4"],
    correct: "12"
  },
  {
    question: "Which number is a square number?",
    options: ["49", "45", "63", "52"],
    correct: "49"
  },
  {
    question: "What is 1 hour 45 minutes in minutes?",
    options: ["105 mins", "100 mins", "90 mins", "110 mins"],
    correct: "105 mins"
  },
  {
    question: "Express ⅝ as a decimal.",
    options: ["0.625", "0.58", "0.75", "0.85"],
    correct: "0.625"
  },
  {
    question: "Which figure has only one curved surface?",
    options: ["Sphere", "Cube", "Cuboid", "Square"],
    correct: "Sphere"
  },
  {
    question: "If a = 5 and b = 2, what is a² + b²?",
    options: ["29", "25", "30", "35"],
    correct: "29"
  },
  {
    question: "What is the median of 3, 5, 7, 9, 11?",
    options: ["7", "5", "9", "6"],
    correct: "7"
  },
  {
    question: "What is the volume of a cube with side 3cm?",
    options: ["27cm³", "9cm³", "18cm³", "36cm³"],
    correct: "27cm³"
  },
  {
    question: "What is 3.25 as a fraction?",
    options: ["13/4", "7/2", "11/4", "6/3"],
    correct: "13/4"
  },
  {
    question: "Round 4.67 to the nearest whole number.",
    options: ["5", "4", "6", "4.5"],
    correct: "5"
  },
  {
    question: "A triangle with equal sides is called?",
    options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
    correct: "Equilateral"
  },
  {
    question: "Find the difference: ⅚ − ⅓",
    options: ["½", "¼", "⅔", "⅙"],
    correct: "½"
  },
  {
    question: "Which of these is a factor of 36?",
    options: ["6", "7", "9", "11"],
    correct: "6"
  },
  {
    question: "What is the next number in: 2, 4, 8, 16, __",
    options: ["32", "20", "18", "28"],
    correct: "32"
  },
  {
    question: "Divide 360° equally among 4 angles.",
    options: ["90° each", "180° each", "60° each", "120° each"],
    correct: "90° each"
  },
  {
    question: "What is the HCF of 12 and 18?",
    options: ["6", "3", "9", "2"],
    correct: "6"
  },
  {
    question: "Simplify: ⅘ × ½",
    options: ["⅖", "⅗", "¼", "⅛"],
    correct: "⅖"
  },
  {
    question: "Find ⅓ of 60.",
    options: ["20", "30", "15", "10"],
    correct: "20"
  },
  {
    question: "Convert 1.2 to a fraction.",
    options: ["6/5", "3/2", "12/10", "4/5"],
    correct: "6/5"
  },
  {
    question: "What is the opposite of addition?",
    options: ["Subtraction", "Division", "Multiplication", "Fraction"],
    correct: "Subtraction"
  },
  {
    question: "What is the sum of all angles in a quadrilateral?",
    options: ["360°", "180°", "270°", "90°"],
    correct: "360°"
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
  window.location.href = "math-advanvedlevel.html";
}

// Only run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});



    



