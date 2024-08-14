//Image Dropdown
let imageDropdown = document.getElementById('imageDropdown');
let image_name = imageDropdown.value;
imageDropdown.addEventListener('change', (event) => {
    image_name = event.target.value;
    
    if (isPlaying) {
        imageSynth.stop();
        setImage(image_name);
        imageSynth.start();
    } else {
        setImage(image_name);
    }   
});
//Play Button
let playButton = document.getElementById('playButton');
let playPauseImage = document.getElementById('play-pause-image');
playButton.addEventListener('click', () => { 
    if (isPlaying == false) {
        playPauseImage.src = "./assets/icons/pause_icon.svg"
        // playButton.innerHTML = 'Pause';
        isPlaying = true;
        // loop();
        imageSynth.start();
    } else {
        playPauseImage.src = "./assets/icons/play_icon.svg"
        isPlaying = false;
        //noLoop();
        imageSynth.stop();
    }
});
//Slider
let slider = document.getElementById('playheadSpeedSlider');
let sliderValue = slider.value;
slider.addEventListener('input', (event) => {
    sliderValue = event.target.value;
    playhead.setSpeed(sliderValue);
});
//Playhead Type (Boxes)
let playheadType = document.querySelectorAll('.playhead-type');
function deselectAll() {
    playheadType.forEach(type => {
        type.classList.remove('playhead-type-selected');
    });
}
playheadType.forEach(type => {
    type.addEventListener('click', () => {
        deselectAll(); // First, deselect all boxes
        type.classList.add('playhead-type-selected');
        playhead_type = type.id;
        //this should be refactored 
        imageSynth.chooseOscillatorData();
        imageSynth.makeAmpFreqArrays();
        //himage.sortStars(playhead);  
        starSynth.sortStars(playhead);
    });
});
//Reverse Button
let reverse = false;
let reverseButton = document.getElementById('reverse');
reverseButton.addEventListener('click', () => {

    playhead.reverse();
    starSynth.sortStars(playhead);

    if (reverse == false) {
        reverse = true;
        reverseButton.classList.add('reverse-selected');
        
    } else {
        reverse = false;
        reverseButton.classList.remove('reverse-selected');
    }
});
//Mapping
let mappingDropdown = document.getElementById('mappingDropdown');
let mappingDropdownValue = mappingDropdown.value;
mappingDropdown.addEventListener('change', (event) => {    
    pitch_mapping = event.target.value;
    imageSynth.makeAmpFreqArrays();
});
//Harmony
let harmonyDropdown = document.getElementById('harmonyDropdown');
let harmonyDropdownValue = harmonyDropdown.value;
harmonyDropdown.addEventListener('change', (event) => {    
    harmonyDropdownValue = event.target.value;
    imageSynth.setHarmony(harmonyDropdownValue);
    starSynth.setHarmony(harmonyDropdownValue);
});
//Instrument
let instrumentDropdown = document.getElementById('instrumentDropdown');
let instrumentDropdownValue = instrumentDropdown.value;
instrumentDropdown.addEventListener('change', (event) => {    
    instrumentDropdownValue = event.target.value;
});
//Stars
let starsDropdown = document.getElementById('starsDropdown');
let soundName = starsDropdown.value;
starsDropdown.addEventListener('change', (event) => {    
    soundName = event.target.value;
    loadSoundBuffers(soundName);
});

// let testDropdown = document.querySelectorAll('#testDropdown');
// testDropdown.forEach(dropdown => {
//     dropdown.addEventListener('change', (event) => {
//         console.log(event.target.value);
//     });
// });