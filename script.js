const questions = [
    {
        question: "What's your favorite color?",
        answers: ["Red", "Blue", "Green", "Yellow"],
        scores: [1, 2, 3, 4]
    },
    {
        question: "What's your favorite food?",
        answers: ["Sushi", "Pizza", "Burger", "Salad"],
        scores: [1, 2, 3, 4]
    },
    // Add 8 more questions in a similar format
];

const characters = [
    {
        name: "Yuji Itadori",
        description: "You are kind, brave, and have a strong sense of justice.",
        img: "url_to_yuji_image",
        minScore: 10,
        maxScore: 20
    },
    {
        name: "Megumi Fushiguro",
        description: "You are calm, collected, and highly strategic.",
        img: "url_to_megumi_image",
        minScore: 21,
        maxScore: 30
    },
    // Add more characters in a similar format
];

let currentQuestionIndex = 0;
let totalScore = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const answersContainer = document.getElementById('answers-container');
    
    questionContainer.innerHTML = `<h2>${questions[currentQuestionIndex].question}</h2>`;
    answersContainer.innerHTML = '';
    
    questions[currentQuestionIndex].answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(answerIndex) {
    totalScore += questions[currentQuestionIndex].scores[answerIndex];
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('next-button').style.display = 'none';
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    const quizContainer = document.getElementById('quiz-container');
    const character = characters.find(char => totalScore >= char.minScore && totalScore <= char.maxScore);
    
    document.getElementById('character-image').src = character.img;
    document.getElementById('character-name').textContent = character.name;
    document.getElementById('character-description').textContent = character.description;
    
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    document.getElementById('quiz-container').style.display = 'flex';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});
