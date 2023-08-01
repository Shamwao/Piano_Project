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
            console.error(error.message);
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
            })
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
