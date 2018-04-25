let score = 0;
let scoreBox = document.getElementById("score");
let questionBox = document.getElementById("question");
let answerForm = document.getElementById("quizForm");

function setAdditionGame() {
    answerForm.setAttribute("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    answerForm.setAttribute("data-gametype", "subtraction");
    subtractionQuiz();    
}

function setMultiplicationGame() {
    answerForm.setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();  
}

function checkAnswer() {
    let gametype = answerForm.getAttribute("data-gametype")
    if (answerForm["answer"].value ==answerForm["rightAnswer"].value) {
        alert("Hey! you got it right!");
        score++;
    }else{
        alert("Oh no! A wrong answer :(");
    }
answerForm["answer"].value = "";
scoreBox.textContent = score;
if (gametype == "addition"){
    additionQuiz()
    }else if (gametype == "subtraction"){
    subtractionQuiz()
}else if (gametype =="multiplication"){
    multiplicationQuiz()
}
return false;
}

function additionQuiz() {
    let num1 = Math.floor(Math.random() *50);
    let num2 = Math.floor(Math.random() *50);
    
 questionBox.textContent = "What is: " + num1 + " + " + num2 + " ?";
 answerForm["rightAnswer"].value = (num1 + num2);
}
function subtractionQuiz() {
    let num1 = Math.floor(Math.random() *30);
    let num2 = Math.floor(Math.random() *20);
    
 questionBox.textContent = "What is: " + num1 + " - " + num2 + " ?";
 answerForm["rightAnswer"].value = (num1 - num2);
}
function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() *10);
    let num2 = Math.floor(Math.random() *6);
    
 questionBox.textContent = "What is: " + num1 + " * " + num2 + " ?";
 answerForm["rightAnswer"].value = (num1 * num2);
}





additionQuiz();

