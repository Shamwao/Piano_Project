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

//D click triggers next event
$(document).ready(function() {
    var dog = $('#dog');
    var confusedImageSrc ="/static/img/confused.png";

    $('#D4').on('click', function() {
        $('#top-text').html("Great! Now...imagine he were to *hypothetically* sit on something <strong>sharp</strong>...<br> He'd jump up high in the air, right? Which black key do you think he'd land on?");
        $('#safety-pin').css('visibility', 'visible')
        $('#bottom-text').html('Click your answer to find out!')
        dog.attr('src', confusedImageSrc);
    });
});

//bkey trigger
//click on Eb to trigger next event
$(document).ready(function(){
    $('.black-keys').click(function(){
        if ($(this).attr('id') =='Eb4'){
            console.log('Right answer')
            $('#top-text').text('Correct!*No dogs were harmed in the making of this tutorial*')
            $('#bottom-text').html('The name of this black key is <strong>D Sharp</strong> or D#. In music, sharp (#) means to go a little higher.')
            $('#dog').css('visibility', 'hidden')
            $('#surpriseddog').removeAttr('hidden')
            $('#safety-pin').removeAttr('hidden')
            $('#btn-next').removeAttr('hidden')
        } else {
            console.log('Wrong answer')
            $('#top-text').text('Nope. Try a different black key')
            $('#bottom-text').text('')
            $(this).off('click')
        }
    })
})

