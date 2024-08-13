class ImageSynth {
    constructor(himage) {
        this.setHimage(himage);

        this.setHarmony(harmonyDropdownValue);
    

        this.gainNode = new p5.Gain();
        this.gainNode.amp(0.5);
        this.reverbNode = new p5.Reverb();
        //this.reverbNode.process(this.gainNode, 3, 2); //duration, decay rate
        //this.gainNode.connect();

        this.filterNode = new p5.LowPass();
        this.filterNode.freq(1000); // Set the initial frequency of the low pass filter, could control this with total brightness
        this.filterNode.res(10); // Set the initial resonance of the low pass filter

        this.oscillators = [];
        for (let i=0;i < this.n_data_rows; i++){
            this.oscillators.push(new p5.Oscillator('triangle'));
            //this.oscillators[i].amp(0);
            this.oscillators[i].disconnect(); // Disconnect the oscillators from the main output
            this.oscillators[i].connect(this.filterNode); // Connect the oscillators to the filterNode
            //this.oscillators[i].connect(this.gainNode); // Connect the oscillators to the gainNode
        }

        this.filterNode.connect(this.reverbNode); // Connect the reverbNode to the filterNode
        this.reverbNode.connect(this.gainNode); // Connect the filterNode to the gainNode
        this.gainNode.connect(); // Connect the gainNode to the main output
        this.updateOscillators(0);
    }   

    setHimage(himage) {
        this.himage = himage;
        this.chooseOscillatorData();
        this.n_data_rows = Object.keys(this.oscillator_grey_data).length;
        this.n_data_cols  = this.oscillator_grey_data[0].length;
        console.log('set himage to ' + this.himage.filename);
    }

    setHarmony(harmony){
        switch (harmony) {
            case 'major':
                this.midiNumbers = [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83];
                break;  
            case 'minor':
                this.midiNumbers = [60, 62, 63, 65, 67, 68, 70, 72, 74, 75, 77, 79, 80, 82];
                break;  
            case 'major pentatonic':
                this.midiNumbers = [60, 62, 64, 67, 69, 72, 74, 76, 79, 81];
                break;
            case 'minor pentatonic':    
                this.midiNumbers = [60, 63, 65, 67, 70, 72, 75, 77, 79, 82];
                break;  
        }
        this.makeAmpFreqArrays();
    }

    chooseOscillatorData(){
        //Sets the data that's fed to the oscillators based on the scan type and direction
        //could work in mapping here, and also change when mapping changes
        switch (playhead_type) {
            case 'leftright':
                this.oscillator_grey_data = this.himage.LR_grey_data;
                this.oscillator_color_data = this.himage.LR_color_data;
                break;
            case 'updown':  
                this.oscillator_grey_data = this.himage.UD_grey_data;
                this.oscillator_color_data = this.himage.UD_color_data;
                break;
            case 'radial':
                this.oscillator_grey_data = this.himage.radial_grey_data;
                this.oscillator_color_data = this.himage.radial_color_data;
                break;
            case 'polar':
                this.oscillator_grey_data = this.himage.polar_grey_data;
                this.oscillator_color_data = this.himage.polar_color_data;
                break;
            
        }

    }

    makeAmpFreqArrays(){
        //create amplitues and frequencies based on the current pitch mapping
        this.amplitudes = [];
        this.frequencies = [];

        for (let row = 0; row < this.n_data_rows; row++) {
            let amplitudeRow = [];
            let frequencyRow = [];

            for (let col = 0; col < this.n_data_cols; col++) {
                let amplitude = map(this.oscillator_grey_data[row][col]**amplitude_scaling, 0, 255**amplitude_scaling, 0, max_oscillator_amplitude);
                let frequency;

                if (pitch_mapping == 'brightness') {
                    let midiIndex = int(map(this.oscillator_grey_data[row][col], 0, 255, 0, this.midiNumbers.length - 1));
                    frequency = midiToFreq(this.midiNumbers[midiIndex]);
                } else if (pitch_mapping == 'color') {
                    let midiIndex = int(map(this.oscillator_color_data[row][col], 0, 255, 0, this.midiNumbers.length - 1));
                    frequency = midiToFreq(this.midiNumbers[midiIndex]);
                }

                amplitudeRow.push(amplitude);
                frequencyRow.push(frequency);
            }

            this.amplitudes.push(amplitudeRow);
            this.frequencies.push(frequencyRow);
        }
    }

    
    updateOscillators() {
        //oscillator data is always read right/left
        //only needs to be run when n_position crosses i/n_data_cols (or faster if we want to interpolate)
        let image_data_col = int(n_position*this.n_data_cols);

        for (let i = 0; i < this.n_data_rows; i++) {
            this.oscillators[i].amp(this.amplitudes[i][image_data_col], 30/100/2); //could set to actual time between data points?
            this.oscillators[i].freq(this.frequencies[i][image_data_col], 30/100/2);
            
        }
    }

    start(){
        if (getAudioContext().state !== 'running') {
            getAudioContext().resume();
        }
        this.oscillators.forEach(osc => {
            osc.amp(0);
            osc.start();
        });
    }
    

    stop(){
        this.oscillators.forEach(osc => {
            osc.amp(0);
            osc.stop();
        });
    }

}


// function midiToFreq(midiNumber) {
//     return 440 * Math.pow(2, (midiNumber - 69) / 12);
// }

// function note2midi(note) {
//     noteName = note.substring(0, note.length-1)
//     noteOctave = note.substring(note.length-1, note.length)
//     midi = note2midiDict[noteName] + 12*noteOctave
//     return midi
// }
  
  
function midi2note(midi) {
    var octave = ((midi-6) / 12) - 1;
    var noteIndex = (midi % 12);
    var noteName = noteNames[noteIndex]
    return noteName + Math.round( octave )
}
  

function noteName2midi(noteName) {
    const octave = parseInt(noteName.slice(-1));
    const note = noteName.slice(0, -1);
    const noteNumber = noteNames.indexOf(note);
    return (octave + 1) * 12 + noteNumber;
}

function convertMidiNumbersToNoteNames(midiNumbers) {
    const noteNamesArray = [];
    for (let i = 0; i < midiNumbers.length; i++) {
        const midiNumber = midiNumbers[i];
        const octave = Math.floor(midiNumber / 12) - 1;
        const noteIndex = midiNumber % 12;
        const noteName = noteNames[noteIndex] + octave;
        noteNamesArray.push(noteName);
    }
    return noteNamesArray;
}
