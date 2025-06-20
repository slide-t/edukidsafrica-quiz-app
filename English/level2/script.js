const questions = [
  {
    question: "Which is the correct plural of 'child'?",
    options: ["Childs", "Children", "Childes", "Childrens"],
    correct: "Children"
  },
  {
    question: "Identify the verb in the sentence: 'She runs every morning.'",
    options: ["She", "Runs", "Every", "Morning"],
    correct: "Runs"
  },
  {
    question: "What is the opposite of 'brave'?",
    options: ["Fearless", "Shy", "Cowardly", "Strong"],
    correct: "Cowardly"
  },
  {
    question: "Which word is a noun?",
    options: ["Beautiful", "Quickly", "Dog", "Jump"],
    correct: "Dog"
  },
  {
    question: "Choose the correct punctuation: 'How are you'",
    options: ["How are you.", "How are you!", "How are you?", "How are you,"],
    correct: "How are you?"
  },
  {
    question: "What is the correct past tense of 'go'?",
    options: ["Goes", "Gone", "Going", "Went"],
    correct: "Went"
  },
  {
    question: "Which is a question word?",
    options: ["Play", "When", "Book", "Happy"],
    correct: "When"
  },
  {
    question: "Which of these is a pronoun?",
    options: ["She", "Car", "House", "Red"],
    correct: "She"
  },
  {
    question: "Pick the sentence with a capital letter and full stop.",
    options: [
      "i like mango",
      "I like mango",
      "i like mango.",
      "I like mango."
    ],
    correct: "I like mango."
  },
  {
    question: "What is a compound word?",
    options: [
      "Two words joined to make one",
      "A long sentence",
      "A difficult word",
      "A broken word"
    ],
    correct: "Two words joined to make one"
  },
  {
    question: "Choose the correct spelling:",
    options: ["Recieve", "Receive", "Receeve", "Receve"],
    correct: "Receive"
  },
  {
    question: "Which word is an adjective?",
    options: ["Soft", "Run", "Gently", "Dog"],
    correct: "Soft"
  },
  {
    question: "Which is a command sentence?",
    options: ["What is your name?", "Sit down.", "The boy is tall.", "She is eating."],
    correct: "Sit down."
  },
  {
    question: "What is the opposite of 'early'?",
    options: ["Late", "Fast", "Long", "Soon"],
    correct: "Late"
  },
  {
    question: "What does the word 'bark' mean in 'The dog barked loudly'?",
    options: ["Tree covering", "Cry of a dog", "Wood", "Scratch"],
    correct: "Cry of a dog"
  },
  {
    question: "What is a synonym for 'happy'?",
    options: ["Sad", "Angry", "Joyful", "Tired"],
    correct: "Joyful"
  },
  {
    question: "Which is a declarative sentence?",
    options: ["Close the door.", "Is that your book?", "I am hungry.", "Where are you?"],
    correct: "I am hungry."
  },
  {
    question: "Pick a sentence with correct grammar.",
    options: ["He going school", "He go to school", "He is going to school", "He gone to school"],
    correct: "He is going to school"
  },
  {
    question: "Which part of speech is 'quickly'?",
    options: ["Noun", "Adjective", "Adverb", "Verb"],
    correct: "Adverb"
  },
  {
    question: "Which is a preposition?",
    options: ["Under", "Walk", "Fast", "Green"],
    correct: "Under"
  },
  {
    question: "What is the correct article: '___ apple a day keeps the doctor away.'",
    options: ["An", "A", "The", "Some"],
    correct: "An"
  },
  {
    question: "Choose a correct plural noun:",
    options: ["Foots", "Feets", "Feet", "Foot"],
    correct: "Feet"
  },
  {
    question: "What is a sentence?",
    options: [
      "A group of letters",
      "A single word",
      "A group of words with meaning",
      "A long phrase"
    ],
    correct: "A group of words with meaning"
  },
  {
    question: "Which is a suitable question tag: 'You are coming, ___?'",
    options: ["is it", "aren’t you", "will it", "do you"],
    correct: "aren’t you"
  },
  {
    question: "Which is an example of a proper noun?",
    options: ["Dog", "Girl", "Nigeria", "Book"],
    correct: "Nigeria"
  },
  {
    question: "Pick the correctly punctuated sentence.",
    options: [
      "wow that is amazing",
      "Wow! That is amazing.",
      "wow That is amazing!",
      "Wow that is amazing"
    ],
    correct: "Wow! That is amazing."
  },
  {
    question: "Which is a verb?",
    options: ["Run", "Fast", "Beautiful", "Angry"],
    correct: "Run"
  },
  {
    question: "Identify the adjective: 'The small boy is happy.'",
    options: ["Boy", "Is", "Small", "Happy"],
    correct: "Small"
  },
  {
    question: "Which sentence shows future tense?",
    options: ["She danced", "She is dancing", "She dances", "She will dance"],
    correct: "She will dance"
  },
  {
    question: "What does the contraction 'don’t' mean?",
    options: ["Do not", "Does not", "Did not", "Don it"],
    correct: "Do not"
  },
  {
    question: "What is the antonym of 'strong'?",
    options: ["Weak", "Tall", "Soft", "Fast"],
    correct: "Weak"
  },
  {
    question: "Which of the following is not a punctuation mark?",
    options: [".", ",", "!", "@"],
    correct: "@"
  },
  {
    question: "Which is an exclamation?",
    options: ["Oh no!", "I can run", "What are you doing?", "I ate rice"],
    correct: "Oh no!"
  },
  {
    question: "Which word completes this: 'The ____ is barking.'",
    options: ["Boy", "Dog", "Pen", "Bag"],
    correct: "Dog"
  },
  {
    question: "Which shows present continuous tense?",
    options: ["He walk", "He walks", "He is walking", "He walked"],
    correct: "He is walking"
  },
  {
    question: "Which is a homophone for 'sun'?",
    options: ["Son", "Soon", "Sin", "Seen"],
    correct: "Son"
  },
  {
    question: "Choose a pair of rhyming words.",
    options: ["Chair – Table", "Fun – Run", "Cat – Dog", "Big – Small"],
    correct: "Fun – Run"
  },
  {
    question: "Identify the object: 'She threw the ball.'",
    options: ["She", "Threw", "Ball", "The"],
    correct: "Ball"
  },
  {
    question: "What is the meaning of 'polite'?",
    options: ["Rude", "Friendly", "Respectful", "Angry"],
    correct: "Respectful"
  },
  {
    question: "Complete: 'I am _____ to school now.'",
    options: ["going", "gone", "goes", "went"],
    correct: "going"
  },
  {
    question: "Pick a sentence in past tense:",
    options: ["He eats food.", "He is eating food.", "He ate food.", "He eat food."],
    correct: "He ate food."
  },
  {
    question: "What is the collective noun for 'cows'?",
    options: ["A group", "A herd", "A team", "A school"],
    correct: "A herd"
  },
  {
    question: "What is a synonym for 'fast'?",
    options: ["Quick", "Slow", "Small", "Big"],
    correct: "Quick"
  },
  {
    question: "Which sentence is correct?",
    options: ["The cat sleep.", "The cat sleeps.", "The cat sleeping.", "The cat sleeped."],
    correct: "The cat sleeps."
  },
  {
    question: "Which sentence is in passive voice?",
    options: ["He wrote a letter.", "The letter was written by him.", "He is writing a letter.", "He writes letters."],
    correct: "The letter was written by him."
  },
  {
    question: "Which of these shows possessive pronoun?",
    options: ["Mine", "Me", "I", "We"],
    correct: "Mine"
  },
  {
    question: "Pick a demonstrative pronoun:",
    options: ["This", "He", "We", "I"],
    correct: "This"
  },
  {
    question: "Which shows comparison?",
    options: ["Big", "Bigger", "Biggest", "Very big"],
    correct: "Bigger"
  },
  {
    question: "Choose the correct word order: ___",
    options: ["Book read I", "I read book", "Read I book", "I read a book"],
    correct: "I read a book"
  },
  {
    question: "Which is a possessive noun?",
    options: ["Boy", "Boys", "Boy's", "Boys'"],
    correct: "Boy's"
  },
  {
    question: "Which one is a conjunction?",
    options: ["Because", "Big", "Fast", "She"],
    correct: "Because"
  },
  {
    question: "Choose a correct prefix word:",
    options: ["Unhappy", "Disjoy", "Nonrun", "Miswork"],
    correct: "Unhappy"
  },
  {
    question: "Which one shows question form?",
    options: ["He is coming", "Is he coming?", "He comes", "He come"],
    correct: "Is he coming?"
  },
  {
    question: "Which is an antonym for 'difficult'?",
    options: ["Easy", "Hard", "Slow", "Fast"],
    correct: "Easy"
  },
  {
    question: "Choose a pair of synonyms:",
    options: ["Hot – Cold", "Big – Large", "Small – Big", "Tall – Short"],
    correct: "Big – Large"
  },
  {
    question: "Which is a suitable word to complete: 'The man is very ___'",
    options: ["Kind", "Kindly", "Kindness", "Kinded"],
    correct: "Kind"
  },
  {
    question: "What part of speech is 'book'?",
    options: ["Noun", "Verb", "Adjective", "Adverb"],
    correct: "Noun"
  },
  {
    question: "Choose a complete sentence:",
    options: ["Running fast.", "He fast.", "He is fast.", "Is fast he."],
    correct: "He is fast."
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

// Only run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});



    
