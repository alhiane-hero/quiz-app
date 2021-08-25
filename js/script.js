const quizData = [
    {
        'question': "which player does barca need now?",
        'a': 'Haaland',
        'b': 'Mbappe',
        'c': 'Saka',
        'd': 'Hankach',
        'correct': 'a'
    },
    {
        'question': "Who won 2009 Uefa Cl?",
        'a': 'United',
        'b': 'Chelsea',
        'c': 'Barcalona',
        'd': 'Inter',
        'correct': 'c'
    },
    {
        'question': "Who Is The most used programming language in 2019?",
        'a': 'Python',
        'b': 'Javascript',
        'c': 'C++',
        'd': 'C',
        'correct': 'b'
    },
    {
        'question': "The capital of Morocco is?",
        'a': 'Marakech',
        'b': 'Casa Blnka',
        'c': 'Tanger',
        'd': 'Rabat',
        'correct': 'd'
    },
    {
        'question': "Who has the most subscribers in youtube?",
        'a': 'Pewdiepie',
        'b': 'Donia Batma',
        'c': 'Karim Benzema',
        'd': 'Pedri',
        'correct': 'c'
    },
]
const submitBtn = document.getElementById('submit-btn');
const question = document.getElementById('question');
const a_text = document.querySelector('.a_text');
const b_text = document.querySelector('.b_text');
const c_text = document.querySelector('.c_text');
const d_text = document.querySelector('.d_text');
const inputAnswer = document.querySelectorAll('.inputAnswer');
const quiz = document.getElementById('quiz');

let counter = 0;
let score = 0;

function loadquiz() {
    let currentQuiz = quizData[counter];
    question.innerHTML = currentQuiz.question;
    a_text.innerHTML = currentQuiz.a;
    b_text.innerHTML = currentQuiz.b;
    c_text.innerHTML = currentQuiz.c;
    d_text.innerHTML = currentQuiz.d;
};
loadquiz();

function getAnswer() {
    let answer = undefined;
    inputAnswer.forEach(input => {
        if (input.checked) answer = input.id;
    }); 
    return answer;
}

function unselectedInput() {
    inputAnswer.forEach(input => {
        input.checked = false;
    }); 
}

submitBtn.addEventListener('click', _ => {
    const answer = getAnswer();
    if (answer) {
        if (answer === quizData[counter].correct) {
            score++;
        }
        counter++;
        if(counter < quizData.length) {
            loadquiz();
            unselectedInput();
        } else {
            quiz.innerHTML = `<h2>Your score is: ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Reload Quiz</button>`
        }
    }
});