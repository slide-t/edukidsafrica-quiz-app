const questions = [
  {
    question: "Which of these tools is used in sculpture?",
    options: ["Brush", "Scalpel", "Chisel", "Pen"],
    correct: "Chisel"
  },
  {
    question: "What is a drawing made with charcoal called?",
    options: ["Sketch", "Sculpture", "Painting", "Collage"],
    correct: "Sketch"
  },
  {
    question: "The Nigerian national dance is part of?",
    options: ["Drama", "Music", "Culture", "Fashion"],
    correct: "Culture"
  },
  {
    question: "What material is commonly used for making masks?",
    options: ["Metal", "Paper", "Wood", "Stone"],
    correct: "Wood"
  },
  {
    question: "The lines used to show emotion in art are?",
    options: ["Straight", "Broken", "Expressive", "Silent"],
    correct: "Expressive"
  },
  {
    question: "What is the process of joining fabric pieces called?",
    options: ["Knitting", "Sewing", "Weaving", "Dyeing"],
    correct: "Sewing"
  },
  {
    question: "The mixture of art and storytelling is called?",
    options: ["Design", "Drama", "Music", "Poem"],
    correct: "Drama"
  },
  {
    question: "Which instrument is used in a marching band?",
    options: ["Xylophone", "Saxophone", "Guitar", "Harp"],
    correct: "Saxophone"
  },
  {
    question: "In art, cool colors include?",
    options: ["Red, Yellow", "Green, Blue", "Pink, Orange", "Brown, Red"],
    correct: "Green, Blue"
  },
  {
    question: "A song with repeated chorus is called?",
    options: ["Opera", "Verse", "Chant", "Refrain"],
    correct: "Refrain"
  },
  {
    question: "Which of these is a local fabric in Nigeria?",
    options: ["Velvet", "Denim", "Adire", "Silk"],
    correct: "Adire"
  },
  {
    question: "Which of these is a type of performance art?",
    options: ["Modeling", "Drama", "Sewing", "Swimming"],
    correct: "Drama"
  },
  {
    question: "A group of people singing together is called a?",
    options: ["Band", "Choir", "Solo", "Duet"],
    correct: "Choir"
  },
  {
    question: "Mixing black with any color creates a?",
    options: ["Tint", "Shade", "Highlight", "Glow"],
    correct: "Shade"
  },
  {
    question: "Which Nigerian tribe uses 'Aso Oke' fabric?",
    options: ["Hausa", "Igbo", "Yoruba", "Tiv"],
    correct: "Yoruba"
  },
  {
    question: "The person who directs a play is called a?",
    options: ["Dancer", "Director", "Choreographer", "Painter"],
    correct: "Director"
  },
  {
    question: "A picture made by gluing materials to a surface is?",
    options: ["Painting", "Sketch", "Collage", "Sculpture"],
    correct: "Collage"
  },
  {
    question: "The movement of the body to sound is called?",
    options: ["Drama", "Music", "Singing", "Dance"],
    correct: "Dance"
  },
  {
    question: "What is stage makeup used for?",
    options: ["Beauty", "Protection", "Characterization", "Medicine"],
    correct: "Characterization"
  },
  {
    question: "What do you call repeated sound patterns in music?",
    options: ["Rhythm", "Volume", "Tone", "Noise"],
    correct: "Rhythm"
  },
  {
    question: "Which of these is an element of art?",
    options: ["Line", "Verse", "Poem", "Instrument"],
    correct: "Line"
  },
  {
    question: "What is the art of designing fabrics?",
    options: ["Tailoring", "Textile design", "Stitching", "Knitting"],
    correct: "Textile design"
  },
  {
    question: "What do actors use to remember their roles?",
    options: ["Notes", "Script", "Drawing", "Plan"],
    correct: "Script"
  },
  {
    question: "The visual art of shaping materials is called?",
    options: ["Sketching", "Sculpture", "Drama", "Portrait"],
    correct: "Sculpture"
  },
  {
    question: "What instrument has black and white keys?",
    options: ["Guitar", "Piano", "Flute", "Violin"],
    correct: "Piano"
  },
  {
    question: "Who plays the lead in a drama?",
    options: ["Main actor", "Chorus", "Director", "Singer"],
    correct: "Main actor"
  },
  {
    question: "Which of the following is NOT a fabric?",
    options: ["Adire", "Aso Oke", "Guitar", "Lace"],
    correct: "Guitar"
  },
  {
    question: "What do you use for tie and dye?",
    options: ["Paper", "Cloth", "Wood", "Stone"],
    correct: "Cloth"
  },
  {
    question: "What helps in designing costume?",
    options: ["Measuring tape", "Stethoscope", "Pencil", "Eraser"],
    correct: "Measuring tape"
  },
  {
    question: "Which part of drama helps in telling the story?",
    options: ["Costume", "Plot", "Prop", "Stage"],
    correct: "Plot"
  },
  {
    question: "Music with soft tone is called?",
    options: ["Harsh", "Gentle", "Loud", "Bold"],
    correct: "Gentle"
  },
  {
    question: "Which of these is a drama accessory?",
    options: ["Board", "Prop", "Eraser", "Brush"],
    correct: "Prop"
  },
  {
    question: "The Yoruba talking drum is called?",
    options: ["Konga", "Gangan", "Bata", "Shekere"],
    correct: "Gangan"
  },
  {
    question: "Which art involves voice and expression?",
    options: ["Painting", "Drama", "Weaving", "Beading"],
    correct: "Drama"
  },
  {
    question: "Songs sung without instruments are called?",
    options: ["Instrumental", "Acapella", "Duet", "Solo"],
    correct: "Acapella"
  },
  {
    question: "Drama with no spoken words is called?",
    options: ["Mime", "Sketch", "Scene", "Playlet"],
    correct: "Mime"
  },
  {
    question: "An artist who paints is called a?",
    options: ["Painter", "Sculptor", "Weaver", "Actor"],
    correct: "Painter"
  },
  {
    question: "Which is not a primary color?",
    options: ["Red", "Blue", "Yellow", "Green"],
    correct: "Green"
  },
  {
    question: "What do children wear in cultural display?",
    options: ["Uniform", "Costume", "Suit", "Tie"],
    correct: "Costume"
  },
  {
    question: "What do we call a group of dancers?",
    options: ["Team", "Group", "Band", "Troupe"],
    correct: "Troupe"
  },
  {
    question: "What is used to mold in sculpture?",
    options: ["Water", "Clay", "Sand", "Glass"],
    correct: "Clay"
  },
  {
    question: "Which of these art types uses thread and needle?",
    options: ["Drama", "Embroidery", "Music", "Dance"],
    correct: "Embroidery"
  },
  {
    question: "Which of these is a local instrument?",
    options: ["Harp", "Violin", "Shekere", "Trumpet"],
    correct: "Shekere"
  },
  {
    question: "In performance, gestures mean?",
    options: ["Smiling", "Facial expressions", "Body movement", "Clothes"],
    correct: "Body movement"
  },
  {
    question: "Tie and dye is a form of?",
    options: ["Drama", "Fabric art", "Dance", "Sculpture"],
    correct: "Fabric art"
  },
  {
    question: "Which fabric is often worn by brides in Nigeria?",
    options: ["Jeans", "Ankara", "Adire", "Lace"],
    correct: "Lace"
  },
  {
    question: "Music is made of sound and?",
    options: ["Cloth", "Color", "Silence", "Shape"],
    correct: "Silence"
  },
  {
    question: "Which of these is NOT in CCA?",
    options: ["Painting", "Science", "Dance", "Drama"],
    correct: "Science"
  },
  {
    question: "Where do dancers perform on stage?",
    options: ["Garage", "Stage", "Field", "Studio"],
    correct: "Stage"
  },
  {
    question: "Which of these is a color scheme?",
    options: ["Hot and cold", "Warm and cool", "Dark and light", "Fast and slow"],
    correct: "Warm and cool"
  },
  {
    question: "Which instrument has strings?",
    options: ["Drum", "Guitar", "Flute", "Saxophone"],
    correct: "Guitar"
  },
  {
    question: "Drama teaches us to?",
    options: ["Act", "Read", "Draw", "Dance"],
    correct: "Act"
  },
  {
    question: "Who arranges musical instruments for the stage?",
    options: ["Composer", "Stage manager", "Drummer", "Singer"],
    correct: "Stage manager"
  },
  {
    question: "Music helps us to?",
    options: ["Sleep only", "Express feelings", "Write better", "Read faster"],
    correct: "Express feelings"
  },
  {
    question: "Which of these is a Nigerian mask festival?",
    options: ["Eyo", "Christmas", "Easter", "Eid"],
    correct: "Eyo"
  },
  {
    question: "An actor learns their lines from a?",
    options: ["Book", "Script", "Notebook", "Poster"],
    correct: "Script"
  },
  {
    question: "The design of a stage is called?",
    options: ["Stage set", "Design cloth", "Drama cover", "Backdrop"],
    correct: "Stage set"
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
    <p>${score >= 55 ? "🎉 Well done!" : "Try again to score 45 and above!"}</p>
  `;

  if (score >= 55) {
    document.getElementById("next-level").style.display = "inline-block";
  }
}

function goToNextLevel() {
  window.location.href = "https://slide-t.github.io/edukidsafrica-quiz-app/CCA/level3/index.html";
}

// Only run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});



