class StarSynth {
    constructor(himage) {
        this.himage = himage;
        this.star_data = himage.star_data;
        this.star_indexes_to_trigger = [];
        this.stars_to_animate = [];
        this.setHarmony(harmonyDropdownValue);
        this.sortStars();
    }

    setHarmony(harmony){
        switch (harmony) {
            case 'major':
                this.midiNumbers = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23];
                break;  
            case 'minor':
                this.midiNumbers = [0, 2, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22];
                break;  
            case 'major pentatonic':
                this.midiNumbers = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21];
                break;
            case 'minor pentatonic':    
                this.midiNumbers = [0, 3, 5, 7, 0, 12, 15, 17, 19, 22];
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
                this.midiNumbers = [0, 2, 4, 6, 7, 9, 11, 12, 14, 16, 18, 19, 21, 23];
                break;  
            case 'mixolydian':
                this.midiNumbers = [0, 2, 4, 5, 7, 9, 10, 12, 14, 16, 17, 19, 21, 22];
                break; 
            case 'byzantine':
                this.midiNumbers = [0, 1, 4, 5, 7, 8, 11, 12, 13, 16, 17, 19, 20, 23];
                break;  
            case 'asavari': //1, b2, 4, 5, b6
                this.midiNumbers = [0, 1, 5, 7, 8, 12, 13, 17, 19, 20, 24];
                break;  
            case 'hijaz': //1, b2, 3, 4, 5, b6, b7
                this.midiNumbers = [0, 1, 4, 5, 7, 8, 10, 12, 13, 16, 17, 19, 20, 22];
                break; 
            case 'egyptian': //1, 2, 4, 5, b7
                this.midiNumbers = [0, 2, 5, 7, 10, 12, 14, 17, 19, 22, 24];
                break;
        }
        this.midiNumbers = this.midiNumbers.map(number => number + start_note - 12);
    }

    sortStars() {
        sort_param = sort_dict[playhead_type];

        const combined = this.star_data.x_norm.map((value, index) => ({
            x_norm: this.star_data.x_norm[index],
            y_norm: this.star_data.y_norm[index],
            size_norm: this.star_data.size_norm[index],
            r_norm: this.star_data.r_norm[index],
            theta_norm: this.star_data.theta_norm[index],
            id: this.star_data.id[index],
            color: this.star_data.color[index]
        }));

        combined.sort((a, b) => a[sort_param] - b[sort_param]);

        const sortedData = {
            x_norm: combined.map(item => item.x_norm),
            y_norm: combined.map(item => item.y_norm),
            size_norm: combined.map(item => item.size_norm),
            r_norm: combined.map(item => item.r_norm),
            theta_norm: combined.map(item => item.theta_norm),
            id: combined.map(item => item.id),
            color: combined.map(item => item.color)
        };

        this.star_data = sortedData;
        //console.log('sorted by ' + sort_param);
    }

    sortStarsMatrix() {
        sort_param = sort_dict[playhead_type];
        // Step 1: Get the index of the row to sort by using the key
        const keys = Object.keys(this.star_data);
        const sortIndex = keys.indexOf(sort_param);
    
        if (sortIndex === -1) {
            console.error(`Invalid sort key: ${sort_param}`);
            return;
        }
    
        // Step 2: Convert the dictionary values to a matrix
        const matrix = Object.values(this.star_data);
    
        // Step 3: Transpose the matrix
        const transpose = (matrix) => matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
        const transposedMatrix = transpose(matrix);
    
        // Step 4: Sort the transposed matrix by the specified row
        transposedMatrix.sort((a, b) => a[sortIndex] - b[sortIndex]);
    
        // Step 5: Transpose the matrix back to its original form
        const sortedMatrix = transpose(transposedMatrix);
    
        // Step 6: Convert the sorted matrix back to the original dictionary format
        const sortedData = {};
        keys.forEach((key, index) => {
            sortedData[key] = sortedMatrix[index];
        });
    
        this.star_data = sortedData;
        //console.log(`sorted by ${sort_param}`);
    }

    mapValueToMidi(value) {
        const midiNote = int(map(value**2, 0,  1, 58, 70));
        return midiNote;
    }

    filterLargestStars(starIndexes, n) {
        let threshold = 0.0;
        const filteredIndexes = starIndexes.filter(index => {
            const size = this.star_data.size_norm[index];
            return size > threshold;
        });

        const sortedIndexes = filteredIndexes.sort((a, b) => {
            const sizeA = this.star_data.size_norm[a];
            const sizeB = this.star_data.size_norm[b];
            return sizeB - sizeA;
        });
        

        return sortedIndexes.slice(0, n);
    }
    
    removeOldStars() {
        //this.stars_to_animate = this.stars_to_animate.filter(star => direction_sign*(n_position - star.n_position) <= t_fade);
        this.stars_to_animate = this.stars_to_animate.filter(star => direction_sign*(t - star.t) <= 2*t_fade);
    }

    addStarIndex(i) {
        this.star_indexes_to_trigger.push(i);
                        this.stars_to_animate.push({'t': t, 'n_position':n_position,'x_norm':this.star_data.x_norm[i],'y_norm':this.star_data.y_norm[i],'size_norm':this.star_data.size_norm[i],'id':this.star_data.id[i]});
    }
    findStarsToTrigger() {
        this.star_indexes_to_trigger = [];
        if (n_position<=delta_n_position){  
            return
        } else if (n_position>=1-delta_n_position) {
            return
        } else {
            if (direction_sign==1) {    
                let closestLesserIndex = this.findClosestLesserIndex(n_position);
                let prevClosestLesserIndex = this.findClosestLesserIndex(n_position - delta_n_position);
                
                if (closestLesserIndex == prevClosestLesserIndex) {
                    if (this.star_data[sort_param][closestLesserIndex]>=n_position - delta_n_position && this.star_data[sort_param][closestLesserIndex] < n_position) {
                        this.addStarIndex(closestLesserIndex);
                    } else {
                        return
                    }
                } else {
                    for (let i = prevClosestLesserIndex + 1; i <= closestLesserIndex; i++) {
                        this.addStarIndex(i);
                    }
                }
                
                
            } else if (direction_sign==-1) {    
                let closestGreaterIndex = this.findClosestGreaterIndex(n_position);
                let prevClosestGreaterIndex = this.findClosestLesserIndex(n_position + delta_n_position);

                if (closestGreaterIndex == prevClosestGreaterIndex) {
                    if (this.star_data[sort_param][closestGreaterIndex] > n_position && this.star_data[sort_param][closestGreaterIndex] <= n_position + delta_n_position) {
                        this.addStarIndex(closestGreaterIndex);
                    } else {
                        return
                    } 
                } else {
                    for (let i = closestGreaterIndex; i <= prevClosestGreaterIndex; i++) {
                        this.addStarIndex(i);
                    }
                }
                
            }
            //this.star_indexes_to_trigger = this.filterLargestStars(this.star_indexes_to_trigger, 100);

            // if (this.star_indexes_to_trigger.length > 0) {
                
            //     console.log('triggering star ' + this.star_indexes_to_trigger);
            //     console.log('triggering star ' + this.star_data.id[this.star_indexes_to_trigger]);
            // }

            this.removeOldStars();
            
            return;
        }
        
    }

    animateStars() {
        this.stars_to_animate.forEach(star => { 
            const x = map(star.x_norm, 0, 1, 0, this.himage.width) + this.himage.widthShift;
            const y = map(star.y_norm, 0, 1, 0, this.himage.height) + this.himage.heightShift;
            const size = 50*star.size_norm*pow((t - star.t)/t_fade, 1);
            const alpha = 255 * Math.exp(-Math.pow((t - star.t), 2) / (2 * Math.pow(t_fade, 2)));
            //fill(255, 255, 255, alpha);
            noFill();
            strokeWeight(2);
            stroke(255, 255, 255, alpha); // Set stroke color with opacity
            ellipse(x, y, size, size);
        });
    }

    playStars() {
        // Play the stars that are in the `star_indexes_to_trigger` array

        this.star_indexes_to_trigger.forEach(index => {
            
            const size = this.star_data.size_norm[index];
            let pitch_value = size;
            //const midiNote = int(map(size**2, 0,  1, 58, 70)); //map the star's size to a midi note
            if (pitch_mapping == 'brightness') {
                pitch_value = size**0.5;
            } else if (pitch_mapping == 'color') {
                pitch_value = this.star_data.color[index]
            }
            //console.log(pitch_value,pitch_mapping);
            const midiNoteIndex = int(map(pitch_value, 0,  1, 0, this.midiNumbers.length-1)); //map the star's size to an index in the midiNumbers array
            const midiNote = this.midiNumbers[midiNoteIndex];
            const sampleIndex = midiNote - midiMin;
            //const sample = sampleDict[soundName][sampleIndex];
            //sample.setVolume(map(size**2, 0,  1, 0, max_star_volume)); //map the star's size to the volume
            //sample.play();
            const volume = map(size**1, 0, 1, 0, max_star_volume);

            playSound(buffers[sampleIndex], volume); 
        });
    }

    findClosestLesserIndex(target) {
        let arr = this.star_data[sort_param];
        let start = 0;
        let end = arr.length - 1;
        let mid;

        while (start <= end) {
            mid = Math.floor((start + end) / 2);
    
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    
        // If no exact match is found, end will be pointing to the closest lesser value
        if (direction_sign==1) {    
            return end >= 0 ? end : this.star_data[sort_param].length - 1;
        } else if (direction_sign==-1) {    
            return end >= 0 ? end : 0
        }
    }

    findClosestGreaterIndex(target) {
        let arr = this.star_data[sort_param];
        let start = 0;
        let end = arr.length - 1;
    
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
    
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    
        // If no exact match is found, start will be pointing to the closest greater value
        return start < arr.length ? start : this.star_data[sort_param].length - 1;
    }

}



function initAudio() {
    createSampleNames();
    //initAllSamples();
}

function createSampleNames() {
    for (let midi = midiMin; midi<=midiMax; midi++){
      note = midi2note(midi)
      sampleFileNames.push(midi)
      sampleNames.push(note)
    }
  }

function getSoundPaths(soundName) {
    soundPaths = [];
    for (let i = 0; i < sampleNames.length; i++) {
        soundPaths.push('./sounds/' + soundName +'/' + sampleFileNames[i] + '.mp3');
      }
    return soundPaths
}


// function initSamples(soundName) {
//     samples = [];
//     for (let i = 0; i < sampleNames.length; i++) {
//       note = loadSound('./sounds/' + soundName +'/' + sampleFileNames[i] + '.mp3');
//       //note.setVolume(0.5);
//       samples.push(note);
//     }
//     samplesLoaded = true;
//     return samples
//   }

// function initAllSamples() {
//     for (let i = 0; i < starSounds.length; i++) {
//         console.log('loaded ' + starSounds[i] + ' samples');
//         let samples = initSamples(starSounds[i]);
//         sampleDict[starSounds[i]] = samples;
//     }   
// }

function loadSoundBuffers(soundName){
    soundPaths = getSoundPaths(soundName);
    soundPaths.forEach((path, index) => {
        loadSoundFile(path, index);
    });
}
function loadSoundFile(url, index) {
    fetch(url)
        .then(response => response.arrayBuffer())
        .then(data => audioContext.decodeAudioData(data))
        .then(buffer => {
            buffers[index] = buffer;
        });
}

// Function to play a sound buffer with a specified volume
function playSound(buffer, volume) {
    // Create a buffer source
    const source = audioContext.createBufferSource();
    source.buffer = buffer;

    // Create a GainNode
    const gainNode = audioContext.createGain();
    gainNode.gain.value = volume; // Set the volume (0.0 to 1.0)

    // Connect the source to the GainNode
    source.connect(gainNode);

    // Connect the GainNode to the destination (speakers)
    gainNode.connect(audioContext.destination);

    // Start playing the sound
    source.start(0);
}