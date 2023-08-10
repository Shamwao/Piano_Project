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
    // Initialize Tone.js audio context
    let audioContext;

    // Function to get the MIDI note number from the keyID
    function getMIDINoteNumber(keyID) {
        const keyNames = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
        const octave = parseInt(keyID.slice(-1)); // Extract the octave number from the keyID
        const keyName = keyID.slice(0, -1); // Extract the key name without the octave number
        const keyIndex = keyNames.indexOf(keyName);
    
        if (octave >= 0 && octave <= 8 && keyIndex !== -1) {
            return 12 * (octave + 1) + keyIndex;
        } else {
            throw new Error("Invalid keyID");
        }
    }
    

    // Function to play the audio for a specific piano key
    function playAudio(keyID) {
        try {
            const midiNote = getMIDINoteNumber(keyID);
            const frequency = Tone.Midi(midiNote).toFrequency();

            // Create a simple synth to play the audio
            const polySynth = new Tone.PolySynth(Tone.Synth, {
                envelope: {
                    attack: 0.1,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1
                },
                volume: -2 // Adjust the volume (if needed)
            }).toDestination();
            polySynth.triggerAttackRelease(frequency, "8n");
        } catch (error) {
            console.error(error.message)
        }
    }

    // Bind mousedown event to all piano keys
    $(document).on("mousedown", function(event) {
        // Check if the audio context is defined and not started
        if (!audioContext || audioContext.state === "suspended") {
            // Resume the audio context within a user gesture (e.g., click)
            audioContext = new Tone.Context();
            audioContext.resume().then(() => {
                console.log("Audio context is now active");
            }).catch((err) => {
                console.error("Failed to initialize the audio context:", err);
            });
        }

        // Play the audio for the piano key
        playAudio(event.target.id);
    });
       // Function to initialize the audio context
        function initAudioContext() {
        // Check if the audio context is defined and not started
        if (!Tone.context || Tone.context.state === "suspended") {
            // Resume the audio context within a user gesture (e.g., click)
            Tone.start().then(() => {
                console.log("Audio context is now active");
            }).catch((err) => {
                console.error("Failed to initialize the audio context:", err);
            });
        }

        // Remove the click event listener once the audio context is started
        document.documentElement.removeEventListener("click", initAudioContext);
    }
});

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
        if ($(this).attr('id') =='Eb4' && $(this).children().length){
            console.log('Right answer')
            $('#top-text').text('Correct!*No dogs were harmed in the making of this tutorial*')
            $('#bottom-text').html('The name of this black key is <strong>D Sharp</strong> or D#. In music, sharp (#) means a little higher.')
            $('#dog').css('visibility', 'hidden')
            $('#surpriseddog').removeAttr('hidden')
            $('#safety-pin').removeAttr('hidden')
            $('#btn-next').removeAttr('hidden')
            $('.black-keys').off('click')
        } else if($(this).attr('id') == 'Bb4' && $(this).children().length){
            console.log('Right answer again')
            $('#top-text').text('Correct again!')
            $('#bottom-text').html('The name of this black key is <strong>B Flat</strong> or B♭. Similar to sharp, flat (♭) means a little lower.')
            $('#flat-tire').removeAttr('hidden')
            $('#car').css('visibility', 'hidden')
            $('#btn-next').removeAttr('hidden')
            $('.black-keys').off('click')
        }else {
            console.log('Wrong answer')
            $('#top-text').text('Nope. Try a different black key')
            $('#bottom-text').text('')
            $(this).off('click')
        }
    })
})

