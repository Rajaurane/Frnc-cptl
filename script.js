const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  }
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 10;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });

  startTimer();
}

function checkAnswer(selectedOption) {
  clearInterval(timer);
  const currentQuestion = questions[currentQuestionIndex];
  const resultElement = document.getElementById("result");

  if (selectedOption === currentQuestion.answer) {
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = `Wrong! The correct answer is ${currentQuestion.answer}.`;
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    document.getElementById("result").textContent = "";
    timeLeft = 10;
    document.getElementById("timer").textContent = timeLeft;
  } else {
    alert("Quiz Over!");
  }
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer("");
    }
  }, 1000);
}

// Initialize the first question
displayQuestion();