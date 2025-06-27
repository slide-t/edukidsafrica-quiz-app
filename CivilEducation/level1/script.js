const questions = [
  {
    "question": "What is Civic Education?",
    "options": ["Learning about good behavior and citizenship", "Singing in class", "Farming", "Drawing pictures"],
    "answer": "Learning about good behavior and citizenship"
  },
  {
    "question": "A good citizen must be:",
    "options": ["Obedient", "Rude", "Lazy", "Dishonest"],
    "answer": "Obedient"
  },
  {
    "question": "Which of these shows good behavior?",
    "options": ["Saying 'Thank you'", "Fighting", "Stealing", "Shouting"],
    "answer": "Saying 'Thank you'"
  },
  {
    "question": "One duty of a good pupil is to:",
    "options": ["Obey school rules", "Fight teachers", "Sleep in class", "Destroy books"],
    "answer": "Obey school rules"
  },
  {
    "question": "Civic education helps us to become:",
    "options": ["Good citizens", "Fishermen", "Singers", "Farmers"],
    "answer": "Good citizens"
  },
  {
    "question": "Which of these is a right of a child?",
    "options": ["Right to education", "Right to steal", "Right to slap", "Right to shout"],
    "answer": "Right to education"
  },
  {
    "question": "A child should respect:",
    "options": ["Parents and elders", "Cats", "Only friends", "Nobody"],
    "answer": "Parents and elders"
  },
  {
    "question": "Which of these is a good habit?",
    "options": ["Saying sorry", "Lying", "Fighting", "Cheating"],
    "answer": "Saying sorry"
  },
  {
    "question": "A citizen is someone who:",
    "options": ["Lives in a country", "Eats a lot", "Travels by boat", "Sings every day"],
    "answer": "Lives in a country"
  },
  {
    "question": "A good citizen obeys:",
    "options": ["Rules and laws", "Only himself", "Nobody", "Just friends"],
    "answer": "Rules and laws"
  },
  {
    "question": "Who should children respect at home?",
    "options": ["Parents", "Strangers", "Younger brothers", "No one"],
    "answer": "Parents"
  },
  {
    "question": "What should you do if you make a mistake?",
    "options": ["Say sorry", "Fight", "Hide", "Run away"],
    "answer": "Say sorry"
  },
  {
    "question": "One way to show respect is by:",
    "options": ["Greeting elders", "Talking back", "Shouting", "Running away"],
    "answer": "Greeting elders"
  },
  {
    "question": "Stealing is a sign of:",
    "options": ["Bad behavior", "Honesty", "Kindness", "Respect"],
    "answer": "Bad behavior"
  },
  {
    "question": "A good leader must be:",
    "options": ["Truthful", "Proud", "Wicked", "Greedy"],
    "answer": "Truthful"
  },
  {
    "question": "We show honesty by:",
    "options": ["Telling the truth", "Lying", "Cheating", "Stealing"],
    "answer": "Telling the truth"
  },
  {
    "question": "Children must help their parents at home by:",
    "options": ["Doing house chores", "Breaking things", "Sleeping all day", "Shouting"],
    "answer": "Doing house chores"
  },
  {
    "question": "Which of these is not good behavior?",
    "options": ["Respecting elders", "Bullying others", "Saying please", "Helping people"],
    "answer": "Bullying others"
  },
  {
    "question": "What is the right thing to do in school?",
    "options": ["Obey your teacher", "Fight your friends", "Sleep in class", "Ignore rules"],
    "answer": "Obey your teacher"
  },
  {
    "question": "A good citizen should report:",
    "options": ["Bad behavior", "Good food", "Football scores", "Class tests"],
    "answer": "Bad behavior"
  },
  {
    "question": "A responsible pupil should:",
    "options": ["Do homework", "Refuse tasks", "Make noise", "Miss class"],
    "answer": "Do homework"
  },
  {
    "question": "A child should say ____ when helped.",
    "options": ["Thank you", "Never", "What?", "Go away"],
    "answer": "Thank you"
  },
  {
    "question": "Which of these is a duty of a child?",
    "options": ["Helping at home", "Fighting adults", "Avoiding school", "Sleeping late"],
    "answer": "Helping at home"
  },
  {
    "question": "Who is a leader?",
    "options": ["Someone who guides others", "Someone who fights", "A singer", "A child"],
    "answer": "Someone who guides others"
  },
  {
    "question": "Civic education teaches us about:",
    "options": ["Our duties and rights", "Dancing only", "Cartoons", "Food and drinks"],
    "answer": "Our duties and rights"
  },
  {
    "question": "A bad habit is:",
    "options": ["Fighting", "Greeting", "Reading", "Helping"],
    "answer": "Fighting"
  },
  {
    "question": "One way to be honest is to:",
    "options": ["Return lost items", "Hide items", "Take things", "Lie about them"],
    "answer": "Return lost items"
  },
  {
    "question": "If you find money on the floor, you should:",
    "options": ["Return it", "Keep it", "Buy sweets", "Hide it"],
    "answer": "Return it"
  },
  {
    "question": "Children should not play with:",
    "options": ["Fire", "Toys", "Friends", "Books"],
    "answer": "Fire"
  },
  {
    "question": "We must not waste:",
    "options": ["Water", "Paper", "Food", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "Which of these is part of personal hygiene?",
    "options": ["Brushing teeth", "Sleeping", "Wearing dirty clothes", "Not bathing"],
    "answer": "Brushing teeth"
  },
  {
    "question": "A child that greets elders is showing:",
    "options": ["Good behavior", "Pride", "Disrespect", "Anger"],
    "answer": "Good behavior"
  },
  {
    "question": "We must obey our country's:",
    "options": ["Laws", "Music", "Movies", "Dances"],
    "answer": "Laws"
  },
  {
    "question": "Our country Nigeria has a:",
    "options": ["Flag", "Gun", "Boat", "Songbook"],
    "answer": "Flag"
  },
  {
    "question": "We show love for our school by:",
    "options": ["Keeping it clean", "Breaking chairs", "Throwing dirt", "Fighting"],
    "answer": "Keeping it clean"
  },
  {
    "question": "A child must learn to:",
    "options": ["Say sorry", "Steal", "Lie", "Push others"],
    "answer": "Say sorry"
  },
  {
    "question": "Children must protect:",
    "options": ["School property", "Their secrets only", "Their toys only", "Nobody"],
    "answer": "School property"
  },
  {
    "question": "We must always be:",
    "options": ["Polite", "Angry", "Greedy", "Selfish"],
    "answer": "Polite"
  },
  {
    "question": "When you do something wrong, you should:",
    "options": ["Apologize", "Laugh", "Ignore it", "Blame others"],
    "answer": "Apologize"
  },
  {
    "question": "Respect means:",
    "options": ["Honoring others", "Talking back", "Ignoring people", "Fighting"],
    "answer": "Honoring others"
  },
  {
    "question": "Being a good citizen means:",
    "options": ["Doing the right things", "Cheating", "Running away", "Being rude"],
    "answer": "Doing the right things"
  },
  {
    "question": "We must stand still when singing:",
    "options": ["The National Anthem", "A love song", "A movie song", "A radio song"],
    "answer": "The National Anthem"
  },
  {
    "question": "We must never ______ school rules.",
    "options": ["Break", "Follow", "Like", "Know"],
    "answer": "Break"
  },
  {
    "question": "Children should attend:",
    "options": ["School regularly", "Parties only", "The market", "The beach"],
    "answer": "School regularly"
  },
  {
    "question": "Civic means:",
    "options": ["Related to people and duties", "Only food", "Only clothes", "Only dances"],
    "answer": "Related to people and duties"
  },
  {
    "question": "Helping an old woman cross the road shows:",
    "options": ["Kindness", "Fear", "Disrespect", "Greed"],
    "answer": "Kindness"
  },
  {
    "question": "Who is responsible for cleaning your room?",
    "options": ["You", "Teacher", "Friend", "Dog"],
    "answer": "You"
  },
  {
    "question": "What should you do when someone helps you?",
    "options": ["Say thank you", "Ignore", "Laugh", "Run"],
    "answer": "Say thank you"
  },
  {
    "question": "The opposite of honesty is:",
    "options": ["Lying", "Sharing", "Smiling", "Giving"],
    "answer": "Lying"
  },
  {
    "question": "One right of a child is to:",
    "options": ["Go to school", "Fight", "Shout", "Lie"],
    "answer": "Go to school"
  },
  {
    "question": "Your duty in class is to:",
    "options": ["Learn and obey", "Make noise", "Fight", "Sleep"],
    "answer": "Learn and obey"
  }
];
