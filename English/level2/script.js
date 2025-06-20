const questions = [
  { question: "Which word is the opposite of 'hot'?", options: ["Warm", "Cold", "Heat", "Fire"], correct: "Cold" },
  { question: "Which word rhymes with 'dog'?", options: ["Dig", "Log", "Dock", "Dark"], correct: "Log" },
  { question: "Choose the noun: The girl is kind.", options: ["Girl", "Kind", "Is", "The"], correct: "Girl" },
  { question: "Which is a doing word?", options: ["Jump", "Chair", "Pretty", "Red"], correct: "Jump" },
  { question: "Which letter is a vowel?", options: ["B", "C", "O", "S"], correct: "O" },
  { question: "Which of these is a sentence?", options: ["Happy the boy", "Is the", "Boy is happy", "To school"], correct: "Boy is happy" },
  { question: "Which word is the opposite of 'day'?", options: ["Dark", "Night", "Sun", "Sleep"], correct: "Night" },
  { question: "Choose the correct spelling:", options: ["Skul", "Skool", "School", "Scool"], correct: "School" },
  { question: "Which word is a color?", options: ["Big", "Run", "Blue", "Cold"], correct: "Blue" },
  { question: "Choose the rhyming word for 'pen':", options: ["Ten", "Pet", "Pan", "Put"], correct: "Ten" },
  { question: "Pick the correct verb: I ___ a book.", options: ["Read", "Blue", "Chair", "Fast"], correct: "Read" },
  { question: "Which is a question word?", options: ["What", "Ball", "Is", "He"], correct: "What" },
  { question: "Pick the opposite of 'happy':", options: ["Joy", "Sad", "Smile", "Laugh"], correct: "Sad" },
  { question: "Choose the pronoun: ___ is my brother.", options: ["He", "Boy", "Name", "Big"], correct: "He" },
  { question: "Choose the correct article: ___ apple", options: ["A", "An", "The", "On"], correct: "An" },
  { question: "Which word rhymes with 'bat'?", options: ["Mat", "Sit", "Hot", "Hat"], correct: "Mat" },
  { question: "Pick the animal name:", options: ["Book", "Lion", "Run", "Desk"], correct: "Lion" },
  { question: "Pick the correct preposition: The cat is ___ the table.", options: ["In", "On", "With", "Blue"], correct: "On" },
  { question: "Choose the opposite of 'fast':", options: ["Run", "Quick", "Slow", "Race"], correct: "Slow" },
  { question: "Pick the correct sentence:", options: ["My name is Tunde.", "Name Tunde my.", "Tunde name is.", "Tunde is name."], correct: "My name is Tunde." },
  { question: "Which word means a place to learn?", options: ["House", "Playground", "School", "Market"], correct: "School" },
  { question: "Choose the rhyming word for 'run':", options: ["Gun", "Sun", "Fun", "All of the above"], correct: "All of the above" },
  { question: "Which is a name of a person?", options: ["Table", "John", "Pen", "Run"], correct: "John" },
  { question: "Which is the correct question?", options: ["Where are you?", "Where you are?", "Are where you?", "You where are?"], correct: "Where are you?" },
  { question: "Which of these is an adjective?", options: ["Beautiful", "Sing", "Box", "Under"], correct: "Beautiful" },
  { question: "Choose the opposite of 'short':", options: ["Thin", "Tall", "Small", "Fat"], correct: "Tall" },
  { question: "Pick the correct spelling:", options: ["Woter", "Watur", "Water", "Wate"], correct: "Water" },
  { question: "Which is a part of the body?", options: ["Chair", "Hand", "Car", "Book"], correct: "Hand" },
  { question: "What do we call the sound of a cat?", options: ["Roar", "Meow", "Moo", "Bark"], correct: "Meow" },
  { question: "Choose the correct punctuation mark to end a question.", options: ["!", ".", "?", ","], correct: "?" },
  { question: "Pick a fruit:", options: ["Banana", "Plate", "Chair", "Bread"], correct: "Banana" },
  { question: "Choose a verb: The boy will ___.", options: ["Jump", "Sweet", "Tall", "Water"], correct: "Jump" },
  { question: "Which is a place?", options: ["Eat", "Under", "Market", "Red"], correct: "Market" },
  { question: "Choose the correct word: She ___ a song.", options: ["Sing", "Sings", "Singed", "Song"], correct: "Sings" },
  { question: "Which is a pair of rhyming words?", options: ["Hat - Mat", "Boy - Big", "Sun - Sky", "Run - Tree"], correct: "Hat - Mat" },
  { question: "What is the plural of 'book'?", options: ["Books", "Bookes", "Bookz", "Bookies"], correct: "Books" },
  { question: "Pick the opposite of 'go':", options: ["Walk", "Run", "Come", "Stop"], correct: "Stop" },
  { question: "Which one is an animal?", options: ["Fish", "Table", "Run", "Read"], correct: "Fish" },
  { question: "Choose the preposition: The boy sat ___ the chair.", options: ["Under", "On", "With", "Next"], correct: "On" },
  { question: "Choose a word that rhymes with 'bed':", options: ["Red", "Bad", "Bid", "Pad"], correct: "Red" },
  { question: "Pick the correct article: ___ sun is hot.", options: ["The", "A", "An", "Some"], correct: "The" },
  { question: "Pick the action word:", options: ["Eat", "Sweet", "Hard", "Yellow"], correct: "Eat" },
  { question: "Which is a question word?", options: ["When", "Then", "Men", "Hen"], correct: "When" },
  { question: "Pick the correct word: He ___ a car.", options: ["Drives", "Drive", "Driving", "Driver"], correct: "Drives" },
  { question: "What do we call a female parent?", options: ["Father", "Mother", "Sister", "Brother"], correct: "Mother" },
  { question: "Which is not a color?", options: ["Blue", "Green", "Fast", "Yellow"], correct: "Fast" },
  { question: "Which of these is a complete sentence?", options: ["Book on table.", "The boy jumps.", "Jumps boy.", "Boy the."], correct: "The boy jumps." },
  { question: "Pick the object in the sentence: She has a pen.", options: ["Pen", "She", "Has", "A"], correct: "Pen" },
  { question: "Pick the correct word: They ___ playing.", options: ["Are", "Is", "Am", "Were"], correct: "Are" }
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
















    
