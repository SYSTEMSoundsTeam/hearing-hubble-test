let audioContext;
let buffers = [];
let soundPaths = [];

function preload() {
    console.time('preload Execution Time');
    // load all of the images
    for (let i = 0; i < image_names.length; i++) {
        let himage = new Himage(image_names[i]);
        himages[image_names[i]] = himage;
    }
    initAudio();

    //test using Web Audio API
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    loadSoundBuffers(soundName);

    //stars = new Stars('ngc1850-blue');
    //stars.loadStarsData();
    console.timeEnd('preload Execution Time');
}



function setup() {
    
    masterVolume(0.75);

    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas-container');

    setImage(image_name);
    
    playhead.setSpeed(sliderValue);
    //noLoop();

}

function setImage(image_name) {
    himage = himages[image_name];
    himage.resizeImage(canvasWidth,canvasHeight);

    playhead = new Playhead(himage);
    imageSynth = new ImageSynth(himage);
    starSynth = new StarSynth(himage);
}

function draw() {
    frameRate(framerate);
    t += 1/framerate;
    //background(255, 0, 0);


    // Draw the image with the new dimensions
    image(himage.image, himage.widthShift, himage.heightShift, himage.width, himage.height);

    if (isPlaying) {
        playhead.incrementPosition();
        // playhead.draw();

        imageSynth.updateOscillators();

        //console.log(n_position);
        if (starsOn) {
            starSynth.findStarsToTrigger();
            starSynth.playStars();
            // starSynth.animateStars();
        }
    }
    playhead.draw();
    starSynth.animateStars();
    
    
    canvasBorder();
}

///////////////////////////////////////////////////////////////////
// Draw a border around the canvas
let canvasBorder = () => {
    noStroke()
    fill(0, 0, 0);
    //rect(x position, y position, width, height)

    if (himage.width > himage.height) {
        rect(0, 0, canvasWidth, himage.heightShift); //Top
        rect(0, himage.height + himage.heightShift, canvasWidth, canvasHeight); //Bottom
    } else {
        rect(0, 0, himage.widthShift, canvasHeight); //Left
        rect(himage.width + himage.widthShift, 0, canvasWidth, canvasHeight); //Right
    }
}
//////////////////////////////////////////////////////////////////////////////

