let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "What is the name of the actor who plays Aragorn in the movies?",
        choices: ["Viggo Mortensen", "Orlando Bloom", "Sean Bean", "Ian McKellen"],
        correctAnswer: "Viggo Mortensen",
        image: "assets/images/aragorn.jpg",
    },

    {
        question: 'Which character says the famous line, "One does not simply walk into Mordor"?',
        choices: ["Gandalf", "Aragorn", "Boromir", "Legolas"],
        correctAnswer: "Gandalf",
        image: "assets/images/gandalf.jpg",
    },

    {
        question: "What is the name of the elven city where Frodo and the Fellowship are first gathered?",
        choices: ["Rivendell", "Lothlorien", "Mirkwood", "Gondor"],
        correctAnswer: "Rivendell",
        image: "assets/images/rivendell.jpg",
    },

    {
        question: "What type of creature is Gollum, and how was he transformed into this form?",
        choices: ["Human, cursed by Saruman", "Elf, cursed by Sauron", "Hobbit, corrupted by the One Ring", "Dwarf, cursed by the Valar"],
        correctAnswer: "Hobbit, corrupted by the One Ring",
        image: "assets/images/gollum.jpg",
    },

    {
        question: 'Which character is known as the "steward of Gondor" during the events of The Lord of the Rings trilogy?',
        choices: ["Denethor", "Faramir", "Boromir", "Aragorn"],
        correctAnswer: "Denethor",
        image: "assets/images/denethor.jpg",
    },

    {
        question: "Who destroys the One Ring in the fires of Mount Doom?",
        choices: ["Frodo Baggins", "Samwise Gamgee", "Gollum", "Gandalf"],
        correctAnswer: "Gollum",
        image: "assets/images/gollum.jpg",
    },

    {
        question: "What is the name of the kingdom where Aragorn is crowned king?",
        choices: ["Gondor", "Rohan", "Mordor", "Isengard"],
        correctAnswer: "Gondor",
        image: "assets/images/gondor.jpg",
    },

    {
        question: 'Which two characters share a close bond throughout the journey and are particularly loyal to one another, often referred to as "Sam and ____"?',
        choices: ["Frodo", "Merry", "Pippin", "Gollum"],
        correctAnswer: "Frodo",
        image: "assets/images/frodo.jpg",
    },

    {
        question: "What is the name of the horse ridden by Aragorn throughout the series?",
        choices: ["Shadowfax", "Brego", "Bill", "Hasufel"],
        correctAnswer: "Brego",
        image: "assets/images/brego.jpg",
    },

    {
        question: "In The Two Towers, which actor plays the role of the creature Gollum/Smeagol?",
        choices: ["Andy Serkis", "Ian McKellen", "Sean Astin", "Viggo Mortensen"],
        correctAnswer: "Andy Serkis",
        image: "assets/images/serkis.jpg",
    },
];