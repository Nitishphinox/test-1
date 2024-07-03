
const quizData = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: 0
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
      correctAnswer: 2
    },
    {
      question: "What is the smallest country in the world?",
      answers: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
      correctAnswer: 0
    }
    // add more questions here
  ];
  
  // current question index
  let currentQuestionIndex = 0;
  
  // load question function
  function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;
    const answerList = document.getElementById("answer-list");
    answerList.innerHTML = "";
    question.answers.forEach((answer, index) => {
      const answerListItem = document.createElement("li");
      answerListItem.className = "list-group-item";
      answerListItem.textContent = answer;
      answerListItem.dataset.answerIndex = index;
      answerList.appendChild(answerListItem);
    });
    if (currentQuestionIndex === quizData.length - 1) {
      document.getElementById("next-btn").style.display = "none";
      document.getElementById("submit-btn").style.display = "block";
    }
  }
  
  // next button click event
  document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
  });
  
  // submit button click event
  document.getElementById("submit-btn").addEventListener("click", () => {
    // todo: implement submit logic here
    alert("Quiz submitted!");
  });
  
  // load first question
  loadQuestion();