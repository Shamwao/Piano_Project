//quiz/keys 

    const testKeys = ["A", "B", "C", "D", "E", "F", "G"];
    const answerKeys = document.getElementsByClassName('white-keys');
    let score = 0;
    let questionsAnswered = 0;
    let quizComplete = false;

    function poseQuestion() {
      let random = Math.floor(Math.random() * testKeys.length);
        console.log("randomly selected key:", testKeys[random]);
        const randomAnswer = answerKeys[random];
        randomAnswer.style.backgroundColor = 'red';
        realAnswer = randomAnswer.id;
        return realAnswer
    }

    document.querySelectorAll('.useranswer').forEach((el) => {
        el.addEventListener("click", function () {
        if (!quizComplete) {
            checkAnswer(this.id);
        }
        });
    });

    function checkAnswer(id) {
        const userAnswer = id;
        console.log("Real Answer:", realAnswer);
        console.log("User said:", userAnswer);
        if (realAnswer == userAnswer) {
            console.log("Nailed it");
            questionsAnswered++;
            score += 10;
            document.getElementById('score').innerText = "Score: " + score;
            clean();
            poseQuestion();
        } else {
            console.log("Not this time");
            questionsAnswered++;
            document.getElementById('score').innerText = "Score: " + score;
            clean();
            poseQuestion();
        }

        if (questionsAnswered == 10) {
            quizComplete = true;
            const finalScore = score;
            const passed = finalScore === 100;
            // Display the final score and pass/fail status in the UI
            document.getElementById('finalScore').value = finalScore;
            document.getElementById('passed').value = passed;
            clean();
            document.getElementById('complete').removeAttribute('hidden');
        
        document.querySelectorAll('.useranswer').forEach((el) => {
            el.removeEventListener("click", checkAnswer);
        });
        }
    }

    function clean() {
        for (let i = 0; i < answerKeys.length; i++) {
            answerKeys[i].style.backgroundColor = 'white';
        } 
    }

function hide(element){
    element.remove()
}

//quiz/scales