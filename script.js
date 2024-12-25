//error in options Spelling
const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "Hyperlink and Text Markup Language",
        ],
        correct: 0,
    },
    {
        question:
            "which CSS property is used to control the spacing between elements?",
        options: ["Margin", "Padding", "Spacing", "Border-spacing"],
        correct: 1,

    },
    {
        question:
            "what is the javaScript function used to select an HTML element by its Id?",
        options: [
            "documents.query",
            "getElementsById",
            "selectElement",
            "findElementById",
        ],
        correct: 1,

    },
    {
        question:
            "In React.js, which hook is used to perform side effects in a function component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options: ["<ul>", "<li>", "<ol>", "<dl>"],
        correct: 2,
    },
];

//javaScript Initializaton

const quiz = document.querySelector('#quiz');
const scores = document.querySelector('.score');
const answerElm = document.querySelectorAll(".answer");
const [questionElm, options_1, options_2, options_3, options_4,] =
document.querySelectorAll("#question, .options_1, .options_2, .options_3, .options_4");

const submitBtn = document.querySelector("#submit");//error in queryselectorall;


let currentQuiz = 0;
let score = 0;



// load quiz function
const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz]; // Destructure question and options
    console.log(question); // Log the question for debugging

    // Display the question
    questionElm.innerText = `${currentQuiz + 1}: ${question}`; // Combine question number and text

    // Display the options
    options.forEach((curOption, index) => {
        const optionElement = document.getElementById(`option_${index + 1}`); // Dynamically select option elements
        if (optionElement) {
            optionElement.innerText = curOption; // Set the option text
        }
    });
};

loadQuiz();

// const loadQuiz = () => {
//     const { question, options } = quizData[currentQuiz];
//     console.log(question);

//     questionElm.innerText=`${currentQuiz + 1}: ${question}`;
//     //scores.innerText=`score: ${score}/${quizData.length}`;
//     questionElm.innerText = question;
//     options.forEach((curOption , index) =>  (option_1.innerText=curOption));
//     options.forEach((curOption, index) => (window['option_${index +1 }'].innerText = curOption)
//     );

// };

// loadQuiz();


//get selected answer function on button click

const getSelectedOption = () => {
    // let ans_index;
    // answerElm, forEach((curOption, index) => {
    //     if (curOption.checked) {
    //         ans_index = index;

    //     }
    // });
    // return ans_index;
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};

//deselectedAnswers
const deselectedAnswers = () => {
    return answerElm.forEach((curElem) => curElem.checked = false);
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);
    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score = score + 1;

    }

    currentQuiz++;


    if (currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    } else {
        //error in < div
        quiz.innerHTML = `
        <div class = "result">
        <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2> 
        <h2> Congratulation on completing the Quiz!🎉</h2>
        <button class="reload-button" onclick="location.reload()">Play Again </button>
        </div >
            `;
    }

});
