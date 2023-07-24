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

//bkey trigger
//click on Eb to trigger next event
$(document).ready(function(){
    $('.black-keys').click(function(){
        if ($(this).attr('id') =='Eb4'){
            console.log('Right answer')
            $('#top-text').text('Correct!*No dogs were harmed in the making of this tutorial*')
            $('#bottom-text').text('The name of this black key is D Sharp or D#. In music, sharp means to go a little higher.')
            $('#dog').remove()
            $('#surpriseddog').removeAttr('hidden')
            $('#btn-next').removeAttr('hidden')
        } else {
            console.log('Wrong answer')
            $('#top-text').text('Nope. Try a different black key')
            $('#bottom-text').text('')
        }
    })
})





// $(document).ready(function(){
//     if($('#Eb4').data('clicked', true)){
//         console.log('Right answer')
//         // $('#top-text').text('Correct!')
//         // $('#bottom-text').text('*No dogs were harmed in the making of this tutorial*')
//         // $('#dog').remove()
//         // $('#surpriseddog').removeAttr('hidden')
//         // $('#btn-next').removeAttr('hidden')
//     } else if ($('.white-keys').data('clicked',true)){
//         console.log('Wrong Answer')
//         // $('#top-text').text('Nope. Try a different black key')
//     }
// })