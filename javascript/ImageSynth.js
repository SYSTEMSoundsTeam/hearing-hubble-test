class ImageSynth {
    constructor(himage) {
        this.setHimage(himage);
        this.setHarmony(harmonyDropdownValue);
    
        this.gainNode = new p5.Gain();
        this.gainNode.amp(0.4);
        this.reverbNode = new p5.Reverb();

        this.filterNode = new p5.LowPass();
        this.filterNode.freq(1000); // Set the initial frequency of the low pass filter, gets reset by column avergage
        this.filterNode.res(10); // Set the initial resonance of the low pass filter

        this.oscillators = [];
        for (let i=0;i < this.n_data_rows; i++){
            this.oscillators.push(new p5.Oscillator(oscillator_type));
            this.oscillators[i].disconnect(); // Disconnect the oscillators from the main output
            this.oscillators[i].connect(this.filterNode); // Connect the oscillators to the filterNode
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
    }

    setHarmony(harmony){
        switch (harmony) {
            case 'major':
                this.midiNumbers = [0, 0, 7, 12, 16, 19, 21, 23, 24, 26, 28, 29, 31, 33, 35];
                break;  
            case 'minor':
                this.midiNumbers = [0, 0, 7, 12, 15, 19, 20, 22, 24, 26, 27, 29, 31, 32, 35];
                break;  
            case 'major pentatonic':
                this.midiNumbers = [0, 0, 7, 12, 16, 19, 21, 24, 26, 28, 31, 33];
                break;
            case 'minor pentatonic':    
                this.midiNumbers = [0, 0, 7, 12, 15, 19, 22, 24, 27, 29, 31, 34];
                break;  
            case 'whole tone':    
                this.midiNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
                break;  
            case 'diminished':  
                this.midiNumbers = [0, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23];
                break;
            case 'chromatic':
                this.midiNumbers = Array.from({length: 24}, (_, i) => i);
                break;
            case 'lydian':
                this.midiNumbers = [0, 0, 7, 12, 16, 19, 21, 23, 24, 26, 28, 30, 31, 33, 35];
                break;  
            case 'mixolydian':
                this.midiNumbers = [0, 0, 7, 12, 16, 19, 21, 22, 24, 26, 28, 29, 31, 33, 34];
                break;  
            case 'byzantine': //1, b2, 3, 4, 5, b6, 7
                this.midiNumbers = [0, 0, 7, 12, 15, 19, 20, 23, 24, 25, 28, 29, 31, 32, 35];
                break;  
            case 'asavari': //1, b2, 4, 5, b6
                this.midiNumbers = [0, 0, 7, 12, 19, 20, 24, 25, 29, 31, 32, 36];
                break;  
            case 'hijaz': //1, b2, 3, 4, 5, b6, b7
                this.midiNumbers = [0, 0, 7, 12, 15, 19, 20, 22, 24, 25, 28, 29, 31, 32, 34];
                break;  
            case 'egyptian': //1, 2, 4, 5, b7
                this.midiNumbers = [0, 0, 7, 12, 17, 19, 22, 24, 26, 29, 31, 34];
                break;  
        }
        this.midiNumbers = this.midiNumbers.map(number => number + start_note - 12);
        this.makeAmpFreqArrays();
    }

    setOscillatorType(oscillator_type){
        this.oscillators.forEach(osc => {
            osc.setType(oscillator_type);
        });
    }

    chooseOscillatorData(){
        //Sets the data that's fed to the oscillators based on the scan type and direction
        switch (playhead_type) {
            case 'leftright':
                this.oscillator_grey_data = this.himage.LR_grey_data;
                this.oscillator_color_data = this.himage.LR_color_data;
                break;
            case 'updown':  
                this.oscillator_grey_data = this.himage.UD_grey_data;
                this.oscillator_color_data = this.himage.UD_color_data;
                break;
            case 'outin':
                this.oscillator_grey_data = this.himage.radial_grey_data;
                this.oscillator_color_data = this.himage.radial_color_data;
                break;
            case 'cwccw':
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

    getColumnAverage(column) {
        let sum = 0;
        for (let i = 0; i < this.amplitudes.length; i++) {
            sum += this.amplitudes[i][column];
        }
        let average = sum / this.amplitudes.length;
        return average;
    }

    updateOscillators() {
        //oscillator data is always read right/left
        let image_data_col = int(n_position * this.n_data_cols);
        image_data_col = constrain(image_data_col, 0, this.n_data_cols - 1);

        for (let i = 0; i < this.n_data_rows; i++) {
            this.oscillators[i].amp(this.amplitudes[i][image_data_col], 30/100/2); //could set to actual time between data points?
            this.oscillators[i].freq(this.frequencies[i][image_data_col], 30/100/2);
            
        }
        this.himage.column_average = this.getColumnAverage(image_data_col);
        this.filterNode.freq(map(this.himage.column_average, 0, max_oscillator_amplitude, lp_cutoff_min, lp_cutoff_max)) ;
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
