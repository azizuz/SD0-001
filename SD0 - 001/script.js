let score = 0;
let answered = 0;

const questions = [
  {
    q: "Your manager has told you that the Service Desk team must provide excellent customer service at all times. What is the most important thing?",
    o: [
      "A. Always show plenty of sympathy to the users",
      "B. Always follow the procedures you understand best",
      "C. Always reprimand colleagues who fail to deliver service excellence",
      "D. Always listen to what users tell you"
    ],
    a: "D"
  },
  {
    q: "Some things can get in the way of good communication which of these options has the biggest impact on a Service Desk?",
    o: [
      "A. Noise and general chatter",
      "B. Inappropriate SLAs in place",
      "C. An unreliable IT infrastructure",
      "D. The users status in the organisation"
    ],
    a: "A"
  },
  {
    q: "Which option is the best example of a closed question?",
    o: [
      "A. What are the symptoms of your Incident?",
      "B. Tell me what you were doing immediately prior to the Incident?",
      "C. What version of the software do you have?",
      "D. How can I be of help?"
    ],
    a: "C"
  },
  {
    q: "What is the best type of questioning to disengage a caller professionally?",
    o: [
      "A. Reflective questions",
      "B. Rapid questions",
      "C. Open questions",
      "D. Closed questions"
    ],
    a: "D"
  },
  {
    q: "Which of these options is NOT part of the correct procedure for putting a user on hold?",
    o: [
      "A. Asking the user for permission to remotely access their system",
      "B. Communicating a valid reason",
      "C. Giving a timeframe",
      "D. Regularly updating the user"
    ],
    a: "A"
  }
  // 👉 Add more questions here (same format)
];

const container = document.getElementById("quiz-container");

function loadQuiz() {
  container.innerHTML = "";
  score = 0;
  answered = 0;

  questions.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "card";

    let optionsHTML = q.o.map(opt => {
      const label = opt.charAt(0);

      return `
        <div class="option">
          <input type="radio" name="q${index}" value="${label}" 
            onchange="checkAnswer(${index}, '${label}', '${q.a}')">
          ${opt}
        </div>
      `;
    }).join("");

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