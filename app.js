let answerbox = document.querySelector('#answerbox');
let check = document.querySelector('#check');
let question = document.querySelector("#question");
let start = document.querySelector('#start')
let questionSet = ["sin(π/6)", "cos(π/6)", "tan(π/6)", "sin(π/4)", "cos(π/4)", "tan(π/4)", "sin(π/3)", "cos(π/3)", "tan(π/3)", "sin(π/2)", "cos(π/2)", "tan(π/2)"]
let answerSet = [""]

gameFlag = false;

let answer = 0;
let score = 0;
function updateQuestion(){
    randomNum = Math.floor(Math.random() * questionSet.length);
    question.innerText = questionSet[randomNum]
    console.log(randomNum)
}
function startGame(){
    start.innerText = "Reset";
    start.style.backgroundColor = 'red';
    updateQuestion()
}
start.addEventListener('click',function(e){
    gameFlag = !gameFlag;
    if(gameFlag == true){
        startGame()
    } else {
        start.innerText = 'Start Game'
        start.style.backgroundColor = 'green'
        score = 0;
        answer = 0;
        answerbox.value = null;
        question.innerText = "Get Ready";
    }
})

check.addEventListener('click',function(e){
    answer = answerbox.value;
    answerbox.value = null;
    console.log(answer)
    updateQuestion()
})

