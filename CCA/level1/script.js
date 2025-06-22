const questions = [
  {
    question: "What do we use to draw?",
    options: ["Spoon", "Pencil", "Soap", "Comb"],
    correct: "Pencil"
  },
  {
    question: "Which of these is a musical instrument?",
    options: ["Broom", "Drum", "Plate", "Box"],
    correct: "Drum"
  },
  {
    question: "What do we use to color a drawing?",
    options: ["Knife", "Paint", "Needle", "Sponge"],
    correct: "Paint"
  },
  {
    question: "What do you call the art of acting on stage?",
    options: ["Singing", "Dancing", "Drama", "Swimming"],
    correct: "Drama"
  },
  {
    question: "Which one is used for singing?",
    options: ["Eyes", "Nose", "Mouth", "Leg"],
    correct: "Mouth"
  },
  {
    question: "A person who draws is called a?",
    options: ["Painter", "Singer", "Dancer", "Teacher"],
    correct: "Painter"
  },
  {
    question: "What color is made by mixing red and yellow?",
    options: ["Green", "Blue", "Orange", "Pink"],
    correct: "Orange"
  },
  {
    question: "Which of these is a local musical instrument?",
    options: ["Guitar", "Talking drum", "Keyboard", "Piano"],
    correct: "Talking drum"
  },
  {
    question: "Which of these do we use to dance?",
    options: ["Hands", "Feet", "Eyes", "Nose"],
    correct: "Feet"
  },
  {
    question: "Which of these is a traditional attire in Nigeria?",
    options: ["Agbada", "Jeans", "Blazer", "Jacket"],
    correct: "Agbada"
  },
  {
    question: "The three main colors are red, blue and?",
    options: ["Orange", "Green", "Yellow", "Purple"],
    correct: "Yellow"
  },
  {
    question: "Which one is a performance on stage?",
    options: ["Painting", "Play", "Sweeping", "Running"],
    correct: "Play"
  },
  {
    question: "What is used to beat a drum?",
    options: ["Hammer", "Stick", "Brush", "Scissors"],
    correct: "Stick"
  },
  {
    question: "Which of these is used to make art?",
    options: ["Stone", "Paper", "Chalkboard", "Water"],
    correct: "Paper"
  },
  {
    question: "What do we use to cut paper?",
    options: ["Pen", "Razor", "Scissors", "Needle"],
    correct: "Scissors"
  },
  {
    question: "Traditional dance is part of our?",
    options: ["Culture", "Game", "Work", "Religion"],
    correct: "Culture"
  },
  {
    question: "A fast song is called?",
    options: ["Loud", "Slow", "Quick", "Upbeat"],
    correct: "Upbeat"
  },
  {
    question: "Which one is a Nigerian musical instrument?",
    options: ["Flute", "Gangan", "Violin", "Saxophone"],
    correct: "Gangan"
  },
  {
    question: "What is a drawing with pencil only called?",
    options: ["Sketch", "Paint", "Design", "Print"],
    correct: "Sketch"
  },
  {
    question: "What do we wear when dancing in drama?",
    options: ["Costume", "Uniform", "Pyjamas", "Cap"],
    correct: "Costume"
  },
  {
    question: "Who teaches us music in school?",
    options: ["Artist", "Coach", "Musician", "Music teacher"],
    correct: "Music teacher"
  },
  {
    question: "Which sound is louder?",
    options: ["Whisper", "Shouting", "Cough", "Knock"],
    correct: "Shouting"
  },
  {
    question: "Which of these is a craft material?",
    options: ["Clay", "Water", "Cup", "Toothbrush"],
    correct: "Clay"
  },
  {
    question: "Which shape has no corners?",
    options: ["Square", "Triangle", "Circle", "Rectangle"],
    correct: "Circle"
  },
  {
    question: "What is tie and dye used for?",
    options: ["Writing", "Washing", "Coloring clothes", "Cooking"],
    correct: "Coloring clothes"
  },
  {
    question: "What do dancers follow when dancing?",
    options: ["Noise", "Beat", "Steps", "Shouting"],
    correct: "Beat"
  },
  {
    question: "Where do we draw pictures in class?",
    options: ["Book", "Wall", "Desk", "Board"],
    correct: "Book"
  },
  {
    question: "Which one is a cultural activity?",
    options: ["Football", "Drama", "Running", "Reading"],
    correct: "Drama"
  },
  {
    question: "What do you call the lines used in drawing?",
    options: ["Ropes", "Marks", "Lines", "Dots"],
    correct: "Lines"
  },
  {
    question: "What is drama without words called?",
    options: ["Noise", "Mime", "Music", "Play"],
    correct: "Mime"
  },
  {
    question: "What do you call colors that go well together?",
    options: ["Opposites", "Cool", "Warm", "Matching colors"],
    correct: "Matching colors"
  },
  {
    question: "What is the Yoruba traditional drum?",
    options: ["Konga", "Gangan", "Piano", "Shekere"],
    correct: "Gangan"
  },
  {
    question: "What is used to make shapes in art?",
    options: ["Paint", "Scissors", "Ruler", "Brush"],
    correct: "Ruler"
  },
  {
    question: "What is the national dress of the Igbo people?",
    options: ["Agbada", "Isi Agu", "Ankara", "Aso Oke"],
    correct: "Isi Agu"
  },
  {
    question: "A person who sings is a?",
    options: ["Drawer", "Singer", "Artist", "Cook"],
    correct: "Singer"
  },
  {
    question: "Which color is cool?",
    options: ["Red", "Yellow", "Blue", "Orange"],
    correct: "Blue"
  },
  {
    question: "What does a dancer wear on the feet?",
    options: ["Slippers", "Boots", "Dancing shoes", "Sandals"],
    correct: "Dancing shoes"
  },
  {
    question: "Which of these is NOT a musical instrument?",
    options: ["Flute", "Drum", "Phone", "Guitar"],
    correct: "Phone"
  },
  {
    question: "A drawing of a person is called a?",
    options: ["Landscape", "Portrait", "Cartoon", "Model"],
    correct: "Portrait"
  },
  {
    question: "Which of these materials can you paint on?",
    options: ["Metal", "Canvas", "Spoon", "Water"],
    correct: "Canvas"
  },
  {
    question: "What do you call the sounds in music?",
    options: ["Beats", "Voices", "Songs", "Rhythms"],
    correct: "Rhythms"
  },
  {
    question: "When people act a play, it is called?",
    options: ["Skit", "Reading", "Writing", "Speech"],
    correct: "Skit"
  },
  {
    question: "What is the name of a person who makes pots?",
    options: ["Painter", "Potter", "Mason", "Cook"],
    correct: "Potter"
  },
  {
    question: "Which one is an African cultural attire?",
    options: ["T-shirt", "Cap", "Buba", "Gown"],
    correct: "Buba"
  },
  {
    question: "How many legs do we use to dance?",
    options: ["One", "Two", "Four", "None"],
    correct: "Two"
  },
  {
    question: "Which of these is an outdoor activity?",
    options: ["Painting", "Singing", "Drama", "Marching"],
    correct: "Marching"
  },
  {
    question: "Music with no words is called?",
    options: ["Song", "Chorus", "Instrumental", "Opera"],
    correct: "Instrumental"
  },
  {
    question: "Which art tool is sharp and used for cutting?",
    options: ["Brush", "Pencil", "Scissors", "Eraser"],
    correct: "Scissors"
  },
  {
    question: "Where do we display our artwork?",
    options: ["Toilet", "Gallery", "Kitchen", "Office"],
    correct: "Gallery"
  },
  {
    question: "Dramas are performed in the?",
    options: ["Hall", "Library", "Farm", "Market"],
    correct: "Hall"
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


