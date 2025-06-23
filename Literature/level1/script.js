const questions = [
  {
    question: "What is literature?",
    options: ["A type of food", "A school bag", "Written works like stories and poems", "A kind of sport"],
    correct: "Written works like stories and poems"
  },
  {
    question: "Which of these is a type of literature?",
    options: ["Poem", "Broom", "Shoes", "Phone"],
    correct: "Poem"
  },
  {
    question: "Who is a poet?",
    options: ["Someone who sings", "Someone who writes poems", "Someone who dances", "Someone who draws"],
    correct: "Someone who writes poems"
  },
  {
    question: "A story that is made up and not real is called?",
    options: ["Non-fiction", "Fiction", "News", "Cooking"],
    correct: "Fiction"
  },
  {
    question: "Which of these is a work of fiction?",
    options: ["A fairy tale", "A newspaper", "A map", "A textbook"],
    correct: "A fairy tale"
  },
  {
    question: "What is a character in a story?",
    options: ["The cover of a book", "A person or animal in the story", "The page number", "The title"],
    correct: "A person or animal in the story"
  },
  {
    question: "What do we call the lesson learned from a story?",
    options: ["Food", "Moral", "Fight", "Picture"],
    correct: "Moral"
  },
  {
    question: "Which of the following is a Nigerian folktale character?",
    options: ["Spider (Ànàgà)", "Tiger", "Lion", "Zebra"],
    correct: "Spider (Ànàgà)"
  },
  {
    question: "Who tells folktales?",
    options: ["Engineers", "Storytellers or elders", "Drivers", "Doctors"],
    correct: "Storytellers or elders"
  },
  {
    question: "A book that tells a story is called a?",
    options: ["Notebook", "Storybook", "Dictionary", "Atlas"],
    correct: "Storybook"
  },
  {
    question: "Which of these is used to act a drama?",
    options: ["Desk", "Blackboard", "Script", "Pencil"],
    correct: "Script"
  },
  {
    question: "What is the beginning part of a story called?",
    options: ["Middle", "Climax", "Introduction", "End"],
    correct: "Introduction"
  },
  {
    question: "The part of a story where the problem is solved is called?",
    options: ["Conflict", "Introduction", "Conclusion", "Title"],
    correct: "Conclusion"
  },
  {
    question: "A poem can have?",
    options: ["Chapters", "Rhymes", "Drawings", "Pages only"],
    correct: "Rhymes"
  },
  {
    question: "Which of these lines rhymes with 'ball'?",
    options: ["Run", "Tall", "Box", "Dig"],
    correct: "Tall"
  },
  {
    question: "The main person in a story is called the?",
    options: ["Villain", "Hero", "Painter", "Author"],
    correct: "Hero"
  },
  {
    question: "Stories that teach lessons are called?",
    options: ["Jokes", "Fables", "Songs", "News"],
    correct: "Fables"
  },
  {
    question: "What do we call the bad character in a story?",
    options: ["Hero", "Villain", "Teacher", "Child"],
    correct: "Villain"
  },
  {
    question: "What is the name for a short funny poem?",
    options: ["Epic", "Song", "Limerick", "Drama"],
    correct: "Limerick"
  },
  {
    question: "Which of these is a drama performance?",
    options: ["Singing in church", "School debate", "Stage play", "Cooking show"],
    correct: "Stage play"
  },
  {
    question: "The person who writes a story is called the?",
    options: ["Reader", "Author", "Publisher", "Librarian"],
    correct: "Author"
  },
  {
    question: "In a play, people act using?",
    options: ["Toys", "Chalk", "Dialogue", "Paint"],
    correct: "Dialogue"
  },
  {
    question: "What is a folktale?",
    options: ["A true news report", "A traditional story passed down", "A dictionary word", "An English song"],
    correct: "A traditional story passed down"
  },
  {
    question: "One feature of poems is?",
    options: ["Fighting", "Long stories", "Rhythm", "Singing"],
    correct: "Rhythm"
  },
  {
    question: "Drama is meant to be?",
    options: ["Read quietly", "Acted out", "Drawn", "Painted"],
    correct: "Acted out"
  },
  {
    question: "A story with animals that talk is likely a?",
    options: ["Fable", "News", "Poem", "Letter"],
    correct: "Fable"
  },
  {
    question: "Where do we watch dramas?",
    options: ["Field", "Stage", "Farm", "Library"],
    correct: "Stage"
  },
  {
    question: "Which of the following can be a theme in literature?",
    options: ["Friendship", "Electricity", "Mathematics", "Noise"],
    correct: "Friendship"
  },
  {
    question: "What do we call the time and place in a story?",
    options: ["Conflict", "Plot", "Setting", "Theme"],
    correct: "Setting"
  },
  {
    question: "The events in a story are called the?",
    options: ["Cover", "Plot", "Page", "List"],
    correct: "Plot"
  },
  {
    question: "A story with a happy ending is usually called?",
    options: ["Tragedy", "Comedy", "Fable", "News"],
    correct: "Comedy"
  },
  {
    question: "What do we call a book that has many poems?",
    options: ["Storybook", "Poetry book", "Cookbook", "Comic"],
    correct: "Poetry book"
  },
  {
    question: "A character that helps the hero is a?",
    options: ["Villain", "Friend", "Support", "Helper"],
    correct: "Support"
  },
  {
    question: "The message of a story is called?",
    options: ["Theme", "Scene", "Stage", "Plot"],
    correct: "Theme"
  },
  {
    question: "Who is the person who acts in a play?",
    options: ["Teacher", "Actor", "Dancer", "Singer"],
    correct: "Actor"
  },
  {
    question: "A short story used to teach children is a?",
    options: ["Lullaby", "Fable", "Lecture", "Speech"],
    correct: "Fable"
  },
  {
    question: "An example of a rhyme word for 'sun' is?",
    options: ["Run", "Sit", "Hot", "Food"],
    correct: "Run"
  },
  {
    question: "The person who tells the story is called the?",
    options: ["Villain", "Narrator", "Director", "Guide"],
    correct: "Narrator"
  },
  {
    question: "The last part of a story is the?",
    options: ["Title", "Climax", "Conclusion", "Conflict"],
    correct: "Conclusion"
  },
  {
    question: "Books for young readers are often called?",
    options: ["Storybooks", "Textbooks", "Journals", "Reports"],
    correct: "Storybooks"
  },
  {
    question: "Characters who are not human are called?",
    options: ["Real", "Fictional", "Animals", "Guests"],
    correct: "Fictional"
  },
  {
    question: "Stories are found mostly in?",
    options: ["Dictionaries", "Storybooks", "Maps", "Charts"],
    correct: "Storybooks"
  },
  {
    question: "One way to perform drama is?",
    options: ["Drawing", "Acting", "Reading only", "Listening"],
    correct: "Acting"
  },
  {
    question: "What is a story with magic called?",
    options: ["Biography", "Fairy tale", "News report", "Drama"],
    correct: "Fairy tale"
  },
  {
    question: "The person who draws in a comic book is called?",
    options: ["Writer", "Painter", "Illustrator", "Dancer"],
    correct: "Illustrator"
  },
  {
    question: "What is the main idea of a poem called?",
    options: ["Rhyme", "Theme", "Setting", "Scene"],
    correct: "Theme"
  },
  {
    question: "Which of these is not a literary form?",
    options: ["Drama", "Poem", "Fable", "Cooking"],
    correct: "Cooking"
  },
  {
    question: "Which of these is usually sung with melody?",
    options: ["Poem", "Song", "Riddle", "News"],
    correct: "Song"
  },
  {
    question: "What do we call the person the story is about?",
    options: ["Narrator", "Hero", "Writer", "Dancer"],
    correct: "Hero"
  },
  {
    question: "Literature helps children to?",
    options: ["Sleep more", "Improve thinking and reading", "Eat better", "Paint faster"],
    correct: "Improve thinking and reading"
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
  window.location.href = "https://slide-t.github.io/edukidsafrica-quiz-app/Literature/level2/index.html";
}

// Only run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});



    


