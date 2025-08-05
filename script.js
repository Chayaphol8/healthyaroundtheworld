const questions = [
  {
    question: "You’re at a party. You...",
    options: [
      { text: "Talk to everyone", score: "extrovert" },
      { text: "Stay in a corner", score: "introvert" }
    ]
  }
  // Add more questions...
];

let currentQuestion = 0;
let score = { extrovert: 0, introvert: 0 };

function showQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  questionEl.textContent = questions[currentQuestion].question;
  optionsEl.innerHTML = questions[currentQuestion].options
    .map(option => `<button onclick="selectOption('${option.score}')">${option.text}</button>`)
    .join("");
}

function selectOption(selectedScore) {
  score[selectedScore]++;
  currentQuestion++;
  if (currentQuestion < questions.length) showQuestion();
  else showResult();
}

function showResult() {
  const result = score.extrovert > score.introvert ? "Extrovert" : "Introvert";
  document.getElementById("result").innerHTML = `<h2>You're an ${result}!</h2>`;
}

showQuestion();
