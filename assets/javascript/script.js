const questions = [
    {
        question: "What is the name of the actor who plays Aragorn in the movies?",
        choices: ["Viggo Mortensen", "Orlando Bloom", "Sean Bean", "Ian McKellen"],
        correctAnswer: "Viggo Mortensen",
    },
    {
        question: 'Which character says the famous line, "One does not simply walk into Mordor"?',
        choices: ["Gandalf", "Aragorn", "Boromir", "Legolas"],
        correctAnswer: "Boromir",
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
nextButton.onclick = nextQuestion;
const scoreElement = document.getElementById("score");
const feedbackElement = document.createElement("p");

// Array to store choice buttons
let choiceButtons = [];

// Feedback for the user
function setupFeedback() {
  feedbackElement.id = "feedback";
  feedbackElement.style.fontWeight = "bold";
  feedbackElement.style.marginTop = "10px";
  document.querySelector(".quiz-container").appendChild(feedbackElement);
}

// Function to display a question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesContainer.innerHTML = "";

  // Generate choice buttons dynamically
  choiceButtons = [];
  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choice");
    button.onclick = () => checkAnswer(choice);
    choicesContainer.appendChild(button);
    choiceButtons.push(button);
  });
}

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  if (selectedAnswer === correctAnswer) {
    score++;
    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
  } else {
    feedbackElement.textContent = `Incorrect! The correct answer was: ${correctAnswer}`;
    feedbackElement.style.color = "red";
  }

  // Disable only the answer buttons after selection
  choiceButtons.forEach((button) => {
    button.disabled = true;
  });

  // Update the score display immediately
  scoreElement.textContent = `Score: ${score}`;

  choiceButtons.forEach((button) => {
    if (button.textContent === currentQuestion.correctAnswer) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });

  // Make sure "Next Question" button remains enabled
  nextButton.disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    feedbackElement.textContent = "";
    // Initialize the quiz
    displayQuestion();
    nextButton.disabled = true;
  } else {
    endQuiz();
  }
}

// Function to handle the end of the quiz, display the final score, and provide an option to restart the quiz
function endQuiz() {
  choicesContainer.innerHTML = "";
  feedbackElement.style.display = "none"; // Hide feedback on quiz end
  
  // Update the question element to indicate the quiz is completed
  questionElement.textContent = "Quiz Completed!";
  
  // Append the final score to the question element
  const finalScore = document.createElement("p");
  finalScore.classList.add("final-score");
  finalScore.textContent = `Final Score: ${score} out of ${questions.length}`;
  questionElement.appendChild(finalScore);

  // Hide score element and next button
  scoreElement.style.display = "none";
  nextButton.style.display = "none";

  // Create and add the try again button
  createTryAgainButton();
}

function createTryAgainButton() {
  const tryAgainButton = document.createElement("button");
  tryAgainButton.textContent = "Try Again";
  tryAgainButton.classList.add("try-again-btn");
  tryAgainButton.onclick = resetQuiz;
  document.querySelector(".quiz-container").appendChild(tryAgainButton);
}

function resetQuiz() {
  // Reset quiz variables
  currentQuestionIndex = 0;
  score = 0;

  // Show score element and next button again
  scoreElement.style.display = "block";
  nextButton.style.display = "block";
  nextButton.style.margin = "0 auto";
  feedbackElement.style.display = "block"; // Show feedback element again

  // Reset UI elements
  scoreElement.textContent = `Score: ${score}`;
  feedbackElement.textContent = "";
  questionElement.textContent = "";
  choicesContainer.innerHTML = "";

  nextButton.classList.add("centered-button");
  const tryAgainButton = document.querySelector(".try-again-btn");
  if (tryAgainButton) {
    tryAgainButton.remove();
  }

  // remove the final score
  const finalScore = document.querySelector(".final-score");
  if (finalScore) {
    finalScore.remove();
  }

  // Restart the quiz
  displayQuestion();
}

setupFeedback();

// Initialize the quiz
displayQuestion();