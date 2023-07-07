//highlighter
$(document).ready(function(){
    $('.white-keys').mouseenter(function(){
        $(this).css('background-color', 'red')
    })
    $('.white-keys').mouseleave(function(){
        $(this).css('background-color', 'white')
    })
})
$(document).ready(function(){
    $('.black-keys').mouseenter(function(){
        $(this).css('background-color', 'red')
    })
    $('.black-keys').mouseleave(function(){
        $(this).css('background-color', 'black')
    })
})

//audio playback

$(document).ready(function(){
    $(document).mousedown(function(event){
        let audio = new Audio("/static/tones/piano-mp3_"+event.target.id+".mp3")
        audio.play()
        $(document).mouseup(function(){
        })
    })
})

count = 0

function revealD(){
    document.getElementById('D4').innerText = 'D'
}

function revealE(){
    document.getElementById('E4').innerText = 'E'
}

function revealF(){
    document.getElementById('F4').innerText = 'F'
}

function revealG(){
    document.getElementById('G4').innerText = 'G'
}

function revealA(){
    document.getElementById('A4').innerText = 'A'
    count ++
    quizBtn()
}

function revealB(){
    document.getElementById('B4').innerText = 'B'
    count ++
    quizBtn()
}

function revealC(){
    document.getElementById('C4').innerText = 'C'
    count ++
    quizBtn()
}

function revealhiC(){
    document.getElementById('C5').innerText = 'C'
    count ++
    quizBtn()
}

function quizBtn(){
    if (count == 4)
        document.getElementById('btn-next').innerText = 'Take Quiz'
}



