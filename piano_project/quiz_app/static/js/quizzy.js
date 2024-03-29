//quiz/keys 

const testKeys = ["A","B","C","D","E","F","G"]
const answerKeys = document.getElementsByClassName('white-keys')
// const answerKeys = querySelectorAll('.white-keys', '.black-keys')
let score = 0
let finalScore= 0
let passed = false
let questionsAnswered = 0
let quizComplete = false

function poseQuestion(){
    let random = Math.floor(Math.random()*testKeys.length)
    console.log("randomly selected key:", testKeys[random])
    for (var i = 0; i <answerKeys.length; i ++)
        if (answerKeys[i].id == testKeys[random])
            var answer=answerKeys[i]
            answer.style.backgroundColor = 'red';
            realAnswer = answer.id
            return realAnswer
}

document.querySelectorAll('.useranswer').forEach((el) =>{
    el.addEventListener("click", function(){
        checkAnswer(this.id)
    })
})

function checkAnswer(id){
    userAnswer = id
    msg = ''
    console.log("Real Answer:" , realAnswer)
    console.log("User said:", userAnswer)
    if (realAnswer == userAnswer){
        console.log("Nailed it")
        questionsAnswered += 1
        score += 10
        document.getElementById('score').innerText = "Score: "+ score
        poseQuestion()
    }
        else {
        console.log("Not this time")
        questionsAnswered += 1
        document.getElementById('score').innerText = "Score: "+ score
        poseQuestion()
    }
    if (score == 100){
        msg = ". You passed!"
    }
    else {
        msg = ". Keep training."
    }
    if (questionsAnswered == 10){
        quizComplete = true
        finalScore = score
        alert("Your final score is " + finalScore+ msg)
        document.getElementById('finalScore').value = finalScore
        console.log(score)
        if (finalScore == 100){
            passed = true
        }
        else {
            passed = false
        }
        document.getElementById('passed').value = passed
        console.log(passed)
        clean()
        document.getElementById('complete').removeAttribute('hidden')
    }
}

function hide(element){
    element.remove()
}

function clean() {
    for (var i = 0; i < answerKeys.length; i++)
        answerKeys[i].style.backgroundColor = 'white'
}





//quiz/scales