const questions = {
    easy: [
        {
            question: "What is the capital city of Nepal?",
            options: ["Pokhara", "Lalitpur", "Kathmandu", "Bhaktapur"],
            correct: 2,
        },
        {
            question:
                "Which mountain is the highest in the world, located in Nepal?",
            options: ["K2", "Everest", "Kangchenjunga", "Makalu"],
            correct: 1,
        },
        {
            question: "What is the official language of Nepal?",
            options: ["Hindi", "Nepali", "Maithili", "English"],
            correct: 1,
        },
        {
            question: "What is the national animal of Nepal?",
            options: ["Tiger", "Cow", "Lion", "Rhino"],
            correct: 1,
        },
        {
            question: "What is the currency of Nepal?",
            options: ["Nepalese Rupee", "Dollar", "Euro", "Rupee"],
            correct: 0,
        },
    ],
    medium: [
        {
            question:
                'Who is known as the "Light of Asia" and was born in Lumbini, Nepal?',
            options: ["Buddha", "Krishna", "Shiva", "Ganesh"],
            correct: 0,
        },
        {
            question: "What is the national flower of Nepal?",
            options: ["Lotus", "Rhododendron", "Rose", "Sunflower"],
            correct: 1,
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1,
        },
        {
            question: "In which year did Nepal officially become a republic?",
            options: ["2005", "2008", "2010", "2015"],
            correct: 1,
        },
        {
            question: "Which river is the longest in Nepal?",
            options: ["Koshi", "Gandaki", "Karnali", "Bagmati"],
            correct: 2,
        },
    ],
    hard: [
        {
            question: "What is the height of Mount Everest?",
            options: [
                "8,848 meters",
                "8,586 meters",
                "8,612 meters",
                "8,848.86 meters",
            ],
            correct: 3,
        },
        {
            question:
                "Which of the following is the first Nepali to climb Mount Everest?",
            options: [
                "Ang Dorje",
                "Tenzing Norgay",
                "Pasang Lhamu Sherpa",
                "Nawang Gombu",
            ],
            correct: 1,
        },
        {
            question:
                "The Treaty of Sugauli in 1815 resulted in Nepal losing a large portion of its territory to which colonial power?",
            options: ["British", "Chinese", "Indian", "Tibetan"],
            correct: 0,
        },
        {
            question: "Who is the first woman president of Nepal?",
            options: [
                "Bidhya Devi Bhandari",
                "Onsari Gharti Magar",
                "Sushila Karki",
                "Durga Devi",
            ],
            correct: 0,
        },
        {
            question:
                "What is the traditional New Year festival of the Newar community in Nepal called?",
            options: ["Tihar", "Dashain", "Losar", "Nepal Sambat"],
            correct: 3,
        },
    ],
};

let quesIndex = 0;
let currentDifficulty = "";
let score = 0;
let totalQues = 0;

function beginQuiz(difficulty) {
    currentDifficulty = difficulty;
    quesIndex = 0;
    score = 0;
    totalQues = questions[difficulty].length;

    document.getElementById("select-difficulty").style.display = "none";
    document.getElementById("interface").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    let quesData = questions[currentDifficulty][quesIndex];
    document.getElementById("ques-num").innerText = `Question ${
        quesIndex + 1
    } of ${totalQues}`;
    document.getElementById("ques").innerText = quesData.question;

    let ansOptions = document.getElementById("options");
    ansOptions.innerHTML = ""; // Clear previous options
    quesData.options.forEach((option, index) => {
        ansOptions.innerHTML += `<label>
            <input type="radio" name="option" value="${index}">
            ${option}
        </label>`;
    });
    document.getElementById("result").innerText = "";
}

function submitAns() {
    let selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    let answerIndex = parseInt(selectedOption.value);
    let correctAnswer = questions[currentDifficulty][quesIndex].correct;

    if (answerIndex === correctAnswer) {
        document.getElementById("result").innerText = "Correct!";
        document.getElementById("result").style.color = "green";
        score++;
    } else {
        document.getElementById(
            "result"
        ).innerText = `Incorrect! Correct answer: ${questions[currentDifficulty][quesIndex].options[correctAnswer]}`;
        document.getElementById("result").style.color = "red";
    }

    quesIndex++;
    if (quesIndex < totalQues) {
        setTimeout(loadQuestion, 1500);
    } else {
        setTimeout(endQuiz, 1500);
    }
}

function endQuiz() {
    document.getElementById("interface").style.display = "none";
    document.getElementById("quiz-end").style.display = "block";
    document.getElementById(
        "final-score"
    ).innerText = `You scored ${score} out of ${totalQues}`;
}

function restartQuiz() {
    document.getElementById("quiz-end").style.display = "none";
    document.getElementById("select-difficulty").style.display = "block";
}
