const questions = [
    {
        question: "What is the name of the actor who plays Aragorn in the movies?",
        choices: ["Viggo Mortensen", "Orlando Bloom", "Sean Bean", "Ian McKellen"],
        correctAnswer: "Viggo Mortensen",
    },
    {
        question: 'Which character says the famous line, "One does not simply walk into Mordor"?',
        choices: ["Gandalf", "Aragorn", "Boromir", "Legolas"],
        correctAnswer: "Gandalf",
    },
    {
        question: "What is the name of the elven city where Frodo and the Fellowship are first gathered?",
        choices: ["Rivendell", "Lothlorien", "Mirkwood", "Gondor"],
        correctAnswer: "Rivendell",
    },
    {
        question: "What type of creature is Gollum, and how was he transformed into this form?",
        choices: ["Human, cursed by Saruman", "Elf, cursed by Sauron", "Hobbit, corrupted by the One Ring", "Dwarf, cursed by the Valar"],
        correctAnswer: "Hobbit, corrupted by the One Ring",
    },
    {
        question: 'Which character is known as the "steward of Gondor" during the events of The Lord of the Rings trilogy?',
        choices: ["Denethor", "Faramir", "Boromir", "Aragorn"],
        correctAnswer: "Denethor",
    },
    {
        question: "Who destroys the One Ring in the fires of Mount Doom?",
        choices: ["Frodo Baggins", "Samwise Gamgee", "Gollum", "Gandalf"],
        correctAnswer: "Gollum",
    },
    {
        question: "What is the name of the kingdom where Aragorn is crowned king?",
        choices: ["Gondor", "Rohan", "Mordor", "Isengard"],
        correctAnswer: "Gondor",
    },
    {
        question: 'Which two characters share a close bond throughout the journey and are particularly loyal to one another, often referred to as "Sam and ____"?',
        choices: ["Frodo", "Merry", "Pippin", "Gollum"],
        correctAnswer: "Frodo",
    },
    {
        question: "What is the name of the horse ridden by Aragorn throughout the series?",
        choices: ["Shadowfax", "Brego", "Bill", "Hasufel"],
        correctAnswer: "Brego",
    },
    {
        question: "In The Two Towers, which actor plays the role of the creature Gollum/Smeagol?",
        choices: ["Andy Serkis", "Ian McKellen", "Sean Astin", "Viggo Mortensen"],
        correctAnswer: "Andy Serkis",
    },
];

let currentQuestionIndex = 0;
let score = 0;

// Get elements from the DOM
const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

// Function to display a question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesContainer.innerHTML = "";

  // Generate choice buttons dynamically
  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choice");
    button.onclick = () => checkAnswer(choice);
    choicesContainer.appendChild(button);
  });
}

// Feedback for the user
const feedbackElement = document.createElement("p");
feedbackElement.id = "feedback";
document.querySelector(".quiz-container").appendChild(feedbackElement);

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  if (selectedAnswer === correctAnswer) {
    score++; // Increment the score
    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
  } else {
    feedbackElement.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
    feedbackElement.style.color = "red";
  }

  // Update the score display immediately
  scoreElement.textContent = `Score: ${score}`;

  // Disable all buttons after an answer is clicked
  choiceButtons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === currentQuestion.correctAnswer) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
}

// Function to go to the next question
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Function to handle the end of the quiz
function endQuiz() {
  questionElement.textContent = "Quiz Completed!";
  choicesContainer.innerHTML = "";
  nextButton.style.display = "none";
  questionElement.insertAdjacentHTML(
    "afterend",
    `<p class='final-score'>Your final score is ${score} out of ${questions.length}!</p>`
  );
}

// Initialize the quiz
displayQuestion();