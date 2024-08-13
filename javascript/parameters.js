const canvasWidth = 600;
const canvasHeight = 600;

const framerate = 30;

const crossing_time_min = 1;
const crossing_time_max = 60;

let x = 0;
let radius = 0;
let angle = 0;

let n_position = 0; // Normalized position
let delta_n_position = 1/30/framerate; // 
let line_alpha = 200; // Set the alpha value to 100 (out of 255)

let image_names = ["ngc1850-blue", "acos295"]; // List of image names to be loaded
let himages = {}; // Dictionary to store the Himage objects
// let playhead_type = 'leftright'; // Default playhead type
let direction_sign = 1; // Default direction sign
let pitch_mapping = 'brightness'; // Default pitch mapping, brightness or color
let playhead_type = 'leftright'; // Default playhead type

let sort_param = 'x_norm'; // Default sort parameter

let max_oscillator_amplitude = 0.2; // Maximum amplitude for the oscillators
let amplitude_scaling = 2;
let frequency_scaling = 1;

const directions = {
    'right': 1,
    'left': -1,
    'up': 1,
    'down': -1,
    'ccw': -1,  // Counter-clockwise
    'cw': 1,    // Clockwise
    'in': 1,
    'out': -1
}


const sort_dict = {'leftright':'x_norm', 'updown':'y_norm', 'radial':'r_norm', 'polar':'theta_norm'};

const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];


const midiMin = 48;
const midiMax = 96;
let sampleFileNames = [];
let sampleNames = []; //numerical names of each star sound (MIDI numbers)
let sampleDict = {}; //will contain names of each star sound and their samples
let starSounds = ['harp']; //names of the star sounds
let starsOn = true; //default trigger stars to false
let max_star_volume = 0.5; //default max star volume

let t_fade = 0.5; //time to fade in and out in seconds, units of seconds
let t = 0; //time variable for animating stars
let isPlaying = false; //is the sound playing?