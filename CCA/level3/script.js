const questions = [ { question: "Which material is best for sculpting a bust?", options: ["Clay", "Glass", "Wool", "Paper"], correct: "Clay" }, { question: "A performance without spoken words is called?", options: ["Chorus", "Mime", "Drama", "Ballet"], correct: "Mime" }, { question: "Which tool is commonly used in textile design?", options: ["Brush", "Needle", "Stamp", "Marker"], correct: "Stamp" }, { question: "The Yoruba talking drum is known as?", options: ["Shekere", "Bata", "Gangan", "Ogene"], correct: "Gangan" }, { question: "A three-dimensional art form is called?", options: ["Drawing", "Painting", "Sculpture", "Sketch"], correct: "Sculpture" }, { question: "What does costume in drama represent?", options: ["Color", "Fashion", "Character", "Age"], correct: "Character" }, { question: "Which of the following is a traditional Nigerian dance?", options: ["Azonto", "Samba", "Bata", "Waltz"], correct: "Bata" }, { question: "What do artists use to draw perspective?", options: ["Line", "Curve", "Point", "Dot"], correct: "Line" }, { question: "Which of these is a wind instrument?", options: ["Flute", "Drum", "Guitar", "Violin"], correct: "Flute" }, { question: "What type of color is created by mixing red and yellow?", options: ["Primary", "Tertiary", "Secondary", "Cool"], correct: "Secondary"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             }, // ... Continue adding up to 80 unique, curriculum-based questions
  
    {
  question: "Which material is commonly used for batik design?",
  options: ["Glue", "Wax", "Paint", "Clay"],
  correct: "Wax"
},
{
  question: "What is the Nigerian traditional cloth made by Yoruba weavers called?",
  options: ["Ankara", "Aso Oke", "Kente", "Dashiki"],
  correct: "Aso Oke"
},
{
  question: "Which art element refers to the lightness or darkness of a color?",
  options: ["Form", "Texture", "Value", "Line"],
  correct: "Value"
},
{
  question: "Which of these is an example of an indigenous musical instrument?",
  options: ["Piano", "Guitar", "Talking Drum", "Violin"],
  correct: "Talking Drum"
},
{
  question: "What is the process of printing using carved wood called?",
  options: ["Etching", "Woodblock printing", "Casting", "Moulding"],
  correct: "Woodblock printing"
},
{
  question: "Which of these is a popular form of traditional dance in Nigeria?",
  options: ["Salsa", "Ballet", "Atilogwu", "Jazz"],
  correct: "Atilogwu"
},
{
  question: "Which festival is famous among the Hausa people?",
  options: ["Eyo", "Durbar", "Igbo Yam Festival", "Osun Festival"],
  correct: "Durbar"
},
{
  question: "What are the three primary colors in art?",
  options: ["Red, Green, Blue", "Red, Yellow, Blue", "Yellow, Blue, Orange", "Blue, Green, Orange"],
  correct: "Red, Yellow, Blue"
},
{
  question: "What is used to create texture in a painting?",
  options: ["Water", "Glue", "Brush techniques", "Oil"],
  correct: "Brush techniques"
},
{
  question: "Which color symbolizes peace in many cultures?",
  options: ["White", "Black", "Red", "Blue"],
  correct: "White"
},
{
  question: "What is the art of arranging colors, shapes, and forms to express ideas?",
  options: ["Craft", "Design", "Drawing", "Painting"],
  correct: "Design"
},
{
  question: "Which of these is not a form of two-dimensional art?",
  options: ["Drawing", "Painting", "Sculpture", "Printing"],
  correct: "Sculpture"
},
{
  question: "Which festival is celebrated by the Igbo people to honor the harvest?",
  options: ["Durbar", "Eyo", "New Yam Festival", "Sango Festival"],
  correct: "New Yam Festival"
},
{
  question: "What is the term for decorating surfaces using lines and shapes?",
  options: ["Pattern", "Sketching", "Casting", "Etching"],
  correct: "Pattern"
},
{
  question: "Which art career involves taking pictures professionally?",
  options: ["Painting", "Photography", "Sculpting", "Weaving"],
  correct: "Photography"
},
{
  question: "Which dance communicates war readiness among Nigerian tribes?",
  options: ["Atilogwu", "Bata", "Koroso", "Ekombi"],
  correct: "Koroso"
},
{
  question: "What kind of color do you get when you mix red and yellow?",
  options: ["Green", "Orange", "Purple", "Brown"],
  correct: "Orange"
},
{
  question: "The 'Eyo' festival is native to which Nigerian city?",
  options: ["Ibadan", "Abuja", "Lagos", "Enugu"],
  correct: "Lagos"
},
{
  question: "What is the first step in molding a clay object?",
  options: ["Painting", "Washing", "Kneading", "Drawing"],
  correct: "Kneading"
},
{
  question: "What is the main purpose of cultural dance in Nigeria?",
  options: ["Exercise", "Celebration and identity", "Competition", "Meditation"],
  correct: "Celebration and identity"
},








  
    ];








/*
const questions = [
  { question: "Which word is the opposite of 'hot'?", options: ["Warm", "Cold", "Heat", "Fire"], correct: "Cold" },
  { question: "Which word rhymes with 'dog'?", options: ["Dig", "Log", "Dock", "Dark"], correct: "Log" },
  { question: "Choose the noun: The girl is kind.", options: ["Girl", "Kind", "Is", "The"], correct: "Girl" },
  { "Pen", "She", "Has", "A"], correct: "Pen" },
  { question: "Pick the correct word: They ___ playing.", options: ["Are", "Is", "Am", "Were"], correct: "Are" }
];*/


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


