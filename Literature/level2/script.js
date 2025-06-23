const questions = [
  {
    question: "Which of these is a genre of literature?",
    options: ["Drama", "Biology", "Drawing", "Arithmetic"],
    correct: "Drama"
  },
  {
    question: "What do we call the conversation between characters in a play?",
    options: ["Monologue", "Dialogue", "Discussion", "Speech"],
    correct: "Dialogue"
  },
  {
    question: "A poem that tells a story is called a?",
    options: ["Narrative poem", "Comedy", "Limerick", "Play"],
    correct: "Narrative poem"
  },
  {
    question: "The setting of a story refers to?",
    options: ["Where and when the story happens", "The number of pages", "The ending", "The cover"],
    correct: "Where and when the story happens"
  },
  {
    question: "What is a playwright?",
    options: ["Someone who reads plays", "Someone who writes plays", "Someone who draws", "Someone who acts"],
    correct: "Someone who writes plays"
  },
  {
    question: "The 'theme' of a story refers to?",
    options: ["The main message", "The size of the book", "The characters", "The plot"],
    correct: "The main message"
  },
  {
    question: "What is a stanza in poetry?",
    options: ["A line", "A paragraph of lines", "A chapter", "A poem title"],
    correct: "A paragraph of lines"
  },
  {
    question: "What is a folktale?",
    options: ["A scientific article", "A traditional story passed down", "A school textbook", "A diary"],
    correct: "A traditional story passed down"
  },
  {
    question: "Which one is an example of prose?",
    options: ["A short story", "A poem", "A rhyme", "A riddle"],
    correct: "A short story"
  },
  {
    question: "A story that ends sadly is a?",
    options: ["Comedy", "Tragedy", "Fairy tale", "Myth"],
    correct: "Tragedy"
  },
  {
    question: "Why are morals important in stories?",
    options: ["They teach lessons", "They make stories long", "They confuse readers", "They are funny"],
    correct: "They teach lessons"
  },
  {
    question: "Which of these best describes a fable?",
    options: ["Story with talking animals and a lesson", "Poem with rhymes", "Drama on stage", "News report"],
    correct: "Story with talking animals and a lesson"
  },
  {
    question: "A person who writes poems is a?",
    options: ["Author", "Poet", "Playwright", "Narrator"],
    correct: "Poet"
  },
  {
    question: "The sequence of events in a story is called?",
    options: ["Theme", "Plot", "Title", "Conclusion"],
    correct: "Plot"
  },
  {
    question: "What do we call a funny play?",
    options: ["Comedy", "Drama", "Myth", "Fable"],
    correct: "Comedy"
  },
  {
    question: "The part of a story with most excitement is called?",
    options: ["Theme", "Setting", "Climax", "Ending"],
    correct: "Climax"
  },
  {
    question: "Which of these words rhymes with 'book'?",
    options: ["Hook", "Bike", "Back", "Rain"],
    correct: "Hook"
  },
  {
    question: "A poem with five lines and a specific rhythm is called?",
    options: ["Epic", "Limerick", "Drama", "Sonnet"],
    correct: "Limerick"
  },
  {
    question: "Characters who oppose the main character are?",
    options: ["Authors", "Antagonists", "Poets", "Supporters"],
    correct: "Antagonists"
  },
  {
    question: "The written text of a play is called?",
    options: ["Manuscript", "Script", "Novel", "Comic"],
    correct: "Script"
  },
  {
    question: "An author writes a _____ while a poet writes a _____.",
    options: ["Script, play", "Poem, novel", "Book, poem", "Story, poem"],
    correct: "Story, poem"
  },
  {
    question: "When a story is told by one character, it is in _____ person.",
    options: ["First", "Second", "Third", "Fourth"],
    correct: "First"
  },
  {
    question: "A story that is passed on orally is called?",
    options: ["Magazine", "News", "Folktale", "Manual"],
    correct: "Folktale"
  },
  {
    question: "What do we call the lesson in a fable?",
    options: ["Moral", "Plot", "Character", "Scene"],
    correct: "Moral"
  },
  {
    question: "When a poem has lines that end with similar sounds, it's called?",
    options: ["Free verse", "Rhyme", "Rhythm", "Script"],
    correct: "Rhyme"
  },
  {
    question: "Who is the hero in a story?",
    options: ["Villain", "Protagonist", "Narrator", "Stage manager"],
    correct: "Protagonist"
  },
  {
    question: "The part of a story where problems happen is the?",
    options: ["Conflict", "Theme", "Setting", "Cover"],
    correct: "Conflict"
  },
  {
    question: "A poem without rhyme is called?",
    options: ["Rhyme-free", "Blank verse", "Silent poem", "Plain poem"],
    correct: "Blank verse"
  },
  {
    question: "Which of these is not a literary device?",
    options: ["Simile", "Metaphor", "Fraction", "Alliteration"],
    correct: "Fraction"
  },
  {
    question: "A simile uses _____ to compare things.",
    options: ["Like or as", "And", "Because", "Since"],
    correct: "Like or as"
  },
  {
    question: "Which one is a poetic device?",
    options: ["Addition", "Rhyme", "Multiplication", "Division"],
    correct: "Rhyme"
  },
  {
    question: "When a character talks alone on stage, it is called?",
    options: ["Monologue", "Dialogue", "Narration", "Soliloquy"],
    correct: "Monologue"
  },
  {
    question: "Which of these is an example of drama?",
    options: ["A class play", "A science book", "A newspaper", "A dictionary"],
    correct: "A class play"
  },
  {
    question: "Who is a narrator?",
    options: ["A teacher", "One who tells the story", "A dancer", "A singer"],
    correct: "One who tells the story"
  },
  {
    question: "Poems are often written in?",
    options: ["Paragraphs", "Stanzas", "Books", "Sheets"],
    correct: "Stanzas"
  },
  {
    question: "Which of these is not a character?",
    options: ["Dog", "Boy", "Car", "Teacher"],
    correct: "Car"
  },
  {
    question: "Why do authors write literature?",
    options: ["To confuse", "To entertain or teach", "To make noise", "To sleep"],
    correct: "To entertain or teach"
  },
  {
    question: "A 'moral' in literature means?",
    options: ["A paragraph", "A lesson", "A conflict", "A title"],
    correct: "A lesson"
  },
  {
    question: "The opposite of a hero in a story is?",
    options: ["Teacher", "Antagonist", "Author", "Poet"],
    correct: "Antagonist"
  },
  {
    question: "A book of poems is called a?",
    options: ["Poetry collection", "Script", "Textbook", "Sheet"],
    correct: "Poetry collection"
  },
  {
    question: "Which of the following is a type of play?",
    options: ["News", "Tragedy", "Textbook", "Biography"],
    correct: "Tragedy"
  },
  {
    question: "What is personification?",
    options: ["Giving human traits to objects", "Talking about persons", "Name calling", "Singing"],
    correct: "Giving human traits to objects"
  },
  {
    question: "A riddle is meant to be?",
    options: ["Written", "Solved", "Cooked", "Ignored"],
    correct: "Solved"
  },
  {
    question: "A song that tells a story is a?",
    options: ["Ballad", "Riddle", "Tragedy", "Fiction"],
    correct: "Ballad"
  },
  {
    question: "What is a stanza made of?",
    options: ["Paragraphs", "Lines", "Pages", "Books"],
    correct: "Lines"
  },
  {
    question: "A story based on real life is called?",
    options: ["Fiction", "Non-fiction", "Folktale", "Myth"],
    correct: "Non-fiction"
  },
  {
    question: "Stories that explain nature or the world are called?",
    options: ["News", "Myths", "Poems", "Jokes"],
    correct: "Myths"
  },
  {
    question: "Which of these shows all story events in order?",
    options: ["Plot", "Theme", "Setting", "Conflict"],
    correct: "Plot"
  },
  {
    question: "A long story with many characters is called a?",
    options: ["Poem", "Novel", "Play", "Chart"],
    correct: "Novel"
  },
  {
    question: "Drama is best enjoyed when?",
    options: ["Acted", "Drawn", "Written", "Erased"],
    correct: "Acted"
  },
  {
    question: "Which of these lines is a simile?",
    options: ["He is as fast as a cheetah", "He eats rice", "She has a book", "We go to school"],
    correct: "He is as fast as a cheetah"
  },
  {
    question: "In poetry, rhythm refers to?",
    options: ["Beat and flow of lines", "Book title", "Story's title", "Conflict"],
    correct: "Beat and flow of lines"
  },
  {
    question: "Why is dialogue important in drama?",
    options: ["For counting", "For acting and understanding", "For music", "For drawings"],
    correct: "For acting and understanding"
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
  window.location.href = "https://slide-t.github.io/edukidsafrica-quiz-app/Literature/level3/index.html";
}

// Only run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});



    


