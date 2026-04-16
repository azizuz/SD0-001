let score = 0;
let answered = 0;

const questions = [
  {q:"Most important for customer service?",o:["A","B","C","D"],a:"D"},
  {q:"Biggest communication issue?",o:["A","B","C","D"],a:"A"},
  {q:"Closed question?",o:["A","B","C","D"],a:"C"}
  // 🔥 paste FULL dataset here (from previous step)
];

const container = document.getElementById("quiz-container");

function loadQuiz() {
  container.innerHTML = "";
  score = 0;
  answered = 0;

  questions.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "card";

    let optionsHTML = q.o.map(opt => `
      <div class="option">
        <input type="radio" name="q${index}" value="${opt}" 
          onchange="checkAnswer(${index}, '${opt}', '${q.a}')">
        ${opt}
      </div>
    `).join("");

    card.innerHTML = `
      <h3>Q${index + 1}: ${q.q}</h3>
      ${optionsHTML}
      <div id="result-${index}"></div>
    `;

    container.appendChild(card);
  });
}

function checkAnswer(index, selected, correct) {
  const result = document.getElementById(`result-${index}`);

  if (result.innerHTML !== "") return;

  answered++;

  if (selected === correct) {
    score++;
    result.innerHTML = `<span class="correct">✅ Correct</span>`;
  } else {
    result.innerHTML = `<span class="wrong">❌ Wrong (Answer: ${correct})</span>`;
  }

  updateScore();
}

function updateScore() {
  document.getElementById("score").innerText =
    `Score: ${score} / ${answered}`;
}

function restartQuiz() {
  loadQuiz();
  document.getElementById("score").innerText = "";
}

loadQuiz();