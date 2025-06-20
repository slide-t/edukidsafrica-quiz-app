const questions = [
  {
    question: "What is the antonym of 'generous'?",
    options: ["Kind", "Greedy", "Helpful", "Gentle"],
    correct: "Greedy"
  },
  {
    question: "Choose the correct tense: 'She had finished the work.'",
    options: ["Past", "Present perfect", "Past perfect", "Future"],
    correct: "Past perfect"
  },
  {
    question: "Which is a proper noun?",
    options: ["Chair", "London", "Street", "River"],
    correct: "London"
  },
  {
    question: "Pick the correct homophone for 'pair'",
    options: ["Pare", "Peer", "Pear", "Pier"],
    correct: "Pear"
  },
  {
    question: "What is a simile?",
    options: [
      "A comparison using 'like' or 'as'",
      "A repetition of sounds",
      "An exaggeration",
      "A short story"
    ],
    correct: "A comparison using 'like' or 'as'"
  },
  {
    question: "Which is an example of a preposition?",
    options: ["Quickly", "Under", "Joyful", "Sing"],
    correct: "Under"
  },
  {
    question: "Choose the correct passive sentence:",
    options: [
      "He eats the food.",
      "The food is eaten.",
      "He is eating food.",
      "Food eats him."
    ],
    correct: "The food is eaten."
  },
  {
    question: "What is the plural of 'analysis'?",
    options: ["Analysises", "Analysi", "Analysis", "Analyses"],
    correct: "Analyses"
  },
  {
    question: "Which sentence uses a question tag?",
    options: ["You’re going, aren’t you?", "Where are you?", "Go now!", "He danced well."],
    correct: "You’re going, aren’t you?"
  },
  {
    question: "What is a conjunction?",
    options: ["A joining word", "A naming word", "A describing word", "A sound word"],
    correct: "A joining word"
  },
  {
    question: "Choose the correct punctuation for a direct speech:",
    options: [
      "'Come here,' said the teacher.",
      "Come here said the teacher.",
      "'Come here said the teacher.'",
      "Come here, said the teacher"
    ],
    correct: "'Come here,' said the teacher."
  },
  {
    question: "Which is an interjection?",
    options: ["Wow!", "And", "She", "Run"],
    correct: "Wow!"
  },
  {
    question: "What is the collective noun for 'fish'?",
    options: ["Herd", "Group", "School", "Fleet"],
    correct: "School"
  },
  {
    question: "Identify the verb in: 'The children are playing football.'",
    options: ["Children", "Playing", "Football", "Are"],
    correct: "Playing"
  },
  {
    question: "Which shows the future continuous tense?",
    options: ["He will be eating", "He eats", "He ate", "He is eating"],
    correct: "He will be eating"
  },
  {
    question: "Choose the correct comparison: 'She is ___ than her sister.'",
    options: ["tall", "taller", "tallest", "more tall"],
    correct: "taller"
  },
  {
    question: "What is the adverb in this sentence? 'He runs quickly.'",
    options: ["He", "Runs", "Quickly", "Run"],
    correct: "Quickly"
  },
  {
    question: "What is the prefix in 'disagree'?",
    options: ["Dis", "Agree", "Re", "Pre"],
    correct: "Dis"
  },
  {
    question: "Which sentence is in conditional tense?",
    options: [
      "I will go if you come.",
      "I go to school.",
      "She plays daily.",
      "We were eating."
    ],
    correct: "I will go if you come."
  },
  {
    question: "What is the meaning of 'synonym'?",
    options: ["Opposite", "Same meaning", "Sound word", "Big word"],
    correct: "Same meaning"
  },
  {
    question: "What is the antonym of 'frequent'?",
    options: ["Rare", "Often", "Daily", "Always"],
    correct: "Rare"
  },
  {
    question: "Choose the word with a silent letter.",
    options: ["Knife", "Cup", "Lamp", "Run"],
    correct: "Knife"
  },
  {
    question: "What is the suffix in 'kindness'?",
    options: ["ness", "kind", "ly", "ed"],
    correct: "ness"
  },
  {
    question: "Choose the correct sentence:",
    options: ["She don’t like it.", "She doesn’t like it.", "She isn’t likes it.", "She don’t likes it."],
    correct: "She doesn’t like it."
  },
  {
    question: "Which word is an antonym of 'lazy'?",
    options: ["Hardworking", "Slow", "Tired", "Quiet"],
    correct: "Hardworking"
  },
  {
    question: "Choose the correct sentence for a formal letter opening:",
    options: [
      "Hi friend!",
      "Dear Sir/Madam,",
      "What's up?",
      "Yo Teacher!"
    ],
    correct: "Dear Sir/Madam,"
  },
  {
    question: "Which is an imperative sentence?",
    options: ["Sit down.", "Is he there?", "She likes fish.", "What is this?"],
    correct: "Sit down."
  },
  {
    question: "Pick the correct plural of 'leaf'",
    options: ["Leafs", "Leaves", "Leavs", "Leafes"],
    correct: "Leaves"
  },
  {
    question: "Which is an auxiliary verb?",
    options: ["Have", "Write", "Run", "Eat"],
    correct: "Have"
  },
  {
    question: "Pick a pair of homophones.",
    options: ["There – Their", "Big – Small", "Boy – Girl", "Dog – Pup"],
    correct: "There – Their"
  },
  {
    question: "Which is a suitable salutation for a friendly letter?",
    options: ["Yours faithfully", "Dear Bestie,", "Dear Sir,", "To whom it may concern"],
    correct: "Dear Bestie,"
  },
  {
    question: "What is the opposite of 'ancient'?",
    options: ["Old", "Modern", "Past", "Early"],
    correct: "Modern"
  },
  {
    question: "Which sentence shows a metaphor?",
    options: [
      "He is as fast as lightning.",
      "He is a lion in the fight.",
      "He looks like a fighter.",
      "He fights bravely."
    ],
    correct: "He is a lion in the fight."
  },
  {
    question: "Which of these is an abstract noun?",
    options: ["Love", "Chair", "Book", "Table"],
    correct: "Love"
  },
  {
    question: "Pick a correctly punctuated list:",
    options: ["I bought rice beans yam.", "I bought: rice, beans, and yam.", "I bought rice, beans, and yam.", "I bought rice beans, and yam"],
    correct: "I bought rice, beans, and yam."
  },
  {
    question: "Which shows a compound sentence?",
    options: ["I ran.", "He walked and she ran.", "He jumps.", "The boy smiles."],
    correct: "He walked and she ran."
  },
  {
    question: "What is the purpose of a full stop?",
    options: ["To separate ideas", "To show question", "To end a sentence", "To begin sentence"],
    correct: "To end a sentence"
  },
  {
    question: "Identify the type of pronoun: 'Those are mine.'",
    options: ["Reflexive", "Demonstrative", "Possessive", "Personal"],
    correct: "Possessive"
  },
  {
    question: "Which is the correct reported speech?",
    options: [
      "'I am tired,' she said.",
      "She said that she was tired.",
      "She said, I am tired.",
      "She say she tired."
    ],
    correct: "She said that she was tired."
  },
  {
    question: "Which is an example of a modal verb?",
    options: ["Can", "Play", "Sing", "Go"],
    correct: "Can"
  },
  {
    question: "Choose a suitable idiom: 'He kicked the bucket' means...",
    options: ["He played football", "He died", "He kicked something", "He got angry"],
    correct: "He died"
  },
  {
    question: "Which word is NOT a conjunction?",
    options: ["And", "But", "Because", "Beautiful"],
    correct: "Beautiful"
  },
  {
    question: "Which sentence is grammatically correct?",
    options: ["I has gone", "He have a dog", "She is kind", "They is late"],
    correct: "She is kind"
  },
  {
    question: "Choose a word with a prefix:",
    options: ["Unfair", "Fair", "Fairer", "Fairness"],
    correct: "Unfair"
  },
  {
    question: "What is the comparative form of 'good'?",
    options: ["Gooder", "Better", "More good", "Best"],
    correct: "Better"
  },
  {
    question: "Which word is a conjunction?",
    options: ["Or", "She", "Cat", "Play"],
    correct: "Or"
  },
  {
    question: "What is the correct order in letter writing?",
    options: ["Address, Date, Body, Closing", "Body, Closing, Address", "Signature, Body, Heading", "Address, Body, Date"],
    correct: "Address, Date, Body, Closing"
  },
  {
    question: "Choose the word with correct spelling:",
    options: ["Febuary", "February", "Febrary", "Febraury"],
    correct: "February"
  },
  {
    question: "Which sentence is in past perfect tense?",
    options: ["I have eaten.", "I had eaten.", "I eat rice.", "I will eat soon."],
    correct: "I had eaten."
  },
  {
    question: "Which is an example of a gerund?",
    options: ["Swimming", "Swim", "Swam", "Swims"],
    correct: "Swimming"
  },
  {
    question: "What does 'punctuation' mean?",
    options: ["Use of symbols to separate sentences", "Writing letters", "Reading words", "Capitalization only"],
    correct: "Use of symbols to separate sentences"
  },
  {
    question: "Identify the complex sentence:",
    options: [
      "He reads books.",
      "I went out because it was sunny.",
      "I play and she sings.",
      "They ran fast."
    ],
    correct: "I went out because it was sunny."
  },
  {
    question: "Which of these is a metaphor?",
    options: ["The moon is like a lamp.", "The moon is a lamp.", "The moon is shining.", "The moon shines brightly."],
    correct: "The moon is a lamp."
  },
  {
    question: "What is a 'conclusion' in comprehension?",
    options: ["The start", "The middle", "The end or summary", "The date"],
    correct: "The end or summary"
  },
  {
    question: "Pick the correct question tag: 'He can swim, ___?'",
    options: ["can he?", "does he?", "can't he?", "won’t he?"],
    correct: "can't he?"
  },
  {
    question: "Which of these shows reported question?",
    options: ["He asked, 'Are you happy?'", "He asked if I was happy", "Are you happy?", "He ask are you happy?"],
    correct: "He asked if I was happy"
  },

  {
    question: "What is the function of an adverb?",
    options: ["Describes a noun", "Describes a verb", "Names a place", "Replaces a noun"],
    correct: "Describes a verb"
  },
  {
    question: "What punctuation ends a question?",
    options: ["!", ".", "?", ","],
    correct: "?"
  },
  {
    question: "Which of these is a phonetic symbol for /ʃ/?",
    options: ["/k/", "/b/", "/ʃ/", "/z/"],
    correct: "/ʃ/"
  },
  {
    question: "What is the past tense of 'teach'?",
    options: ["Teached", "Taught", "Teach", "Taughted"],
    correct: "Taught"
  },
  {
    question: "Identify the correct sentence:",
    options: [
      "She have finished.",
      "She has finish.",
      "She has finished.",
      "She finishing."
    ],
    correct: "She has finished."
  },
  {
    question: "Which word is an example of onomatopoeia?",
    options: ["Bang", "Fast", "Red", "Big"],
    correct: "Bang"
  },
  {
    question: "Choose the plural of 'goose'.",
    options: ["Gooses", "Goose", "Geese", "Geeses"],
    correct: "Geese"
  },
  {
    question: "Which sentence is in the present perfect tense?",
    options: ["He walks.", "He walked.", "He has walked.", "He will walk."],
    correct: "He has walked."
  },
  {
    question: "Which word means the same as 'enormous'?",
    options: ["Tiny", "Huge", "Fast", "Shiny"],
    correct: "Huge"
  },
  {
    question: "Which is a demonstrative pronoun?",
    options: ["He", "It", "These", "We"],
    correct: "These"
  },
  {
    question: "Which word contains a silent letter?",
    options: ["Knight", "Bright", "Might", "Fight"],
    correct: "Knight"
  },
  {
    question: "What does the prefix 're-' mean?",
    options: ["Not", "Again", "Before", "Small"],
    correct: "Again"
  },
  {
    question: "Pick the correct sentence:",
    options: [
      "Where did he went?",
      "Where has he gone?",
      "Where do he went?",
      "Where he go?"
    ],
    correct: "Where has he gone?"
  },
  {
    question: "Identify the adjective: 'The tall boy ran fast.'",
    options: ["Boy", "Ran", "Tall", "Fast"],
    correct: "Tall"
  },
  {
    question: "Which is a verb?",
    options: ["Run", "Blue", "Under", "Happy"],
    correct: "Run"
  },
  {
    question: "Choose the suitable conjunction: 'I was late ___ the rain.'",
    options: ["but", "so", "because", "and"],
    correct: "because"
  },
  {
    question: "What is the comparative of 'happy'?",
    options: ["Happiest", "More happy", "Happier", "Happyer"],
    correct: "Happier"
  },
  {
    question: "Choose the correctly punctuated title:",
    options: ["my best friend", "My Best Friend", "my Best friend", "My best Friend"],
    correct: "My Best Friend"
  },
  {
    question: "What part of speech is 'quickly'?",
    options: ["Adjective", "Adverb", "Preposition", "Conjunction"],
    correct: "Adverb"
  },
  {
    question: "Which of these is a correct exclamation?",
    options: ["Oh!", "Cat", "Went", "He"],
    correct: "Oh!"
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
  window.location.href = "math-level2.html";
}

// --- Tell parent (blogger) the loaded height ---
function informHeight() {
  const height = document.body.scrollHeight;
  window.parent.postMessage({ quizHeight: height }, '*');
}

window.addEventListener('load', () => {
  setTimeout(informHeight, 500); // ensure layout is ready
});

// Also call after each question render if layout changes

    

