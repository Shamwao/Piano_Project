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

$(document).ready(function() {
    let hiddenElementsCount = $('#answerText[hidden]').length
    let removedHiddenCount = 0;

        $(".black-keys").click(function(){
        if($(this).children().length){   
        $(this).children().removeAttr('hidden')
        removedHiddenCount++
        $(this).off('click')
        }
        if (removedHiddenCount === hiddenElementsCount) {
        console.log('All hidden elements have been removed.')
        $('#btn-next').removeAttr('hidden')
        }
    });
});