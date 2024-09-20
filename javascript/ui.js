//Image Dropdown
//https://codepen.io/aybukeceylan/pen/RwrRPoO

let imageSelectorArr = Array.from(
  document.querySelectorAll(".image-container img")
).map((element) => element);
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let infoTitle = document.getElementById("imageTitle");
let infoDescription = document.getElementById("imageDescription");
let infoLink = document.getElementById("infoLink");
let canvasAltText = document.getElementById("canvas-container");

let image_name =
  imageSelectorArr[
    imageSelectorArr.findIndex((element) =>
      element.classList.contains("selected")
    )
  ].id;

//
function updateImageInfo(himage) {
  infoTitle.innerHTML = himage.name;
  infoDescription.innerHTML = himage.caption;
  infoLink.href = himage.link;
  infoLink.innerHTML = "Learn More";
  canvasAltText.title = himage.alt;
}

// let imageSelecting = [leftArrow, rightArrow];

// imageSelecting.forEach((direction) => {
//   direction.addEventListener("click", () => {
//     console.log(direction);
//   });
// });

// imageSelectorArr.forEach((element) => {
//   element.addEventListener("click", () => {
//     if (element.classList.contains("left")) {
//       let currentIndex = imageSelectorArr.findIndex((element) =>
//         element.classList.contains("selected")
//       );
//       let newLeft =
//         (currentIndex - 2 + imageSelectorArr.length) % imageSelectorArr.length;
//       let newSelected =
//         (currentIndex - 1 + imageSelectorArr.length) % imageSelectorArr.length;
//       let currentRight =
//         (currentIndex + 1 + imageSelectorArr.length) % imageSelectorArr.length;
//       image_name = imageSelectorArr[newSelected].id;

//       imageSelectorArr[currentIndex].classList.remove("selected");
//       imageSelectorArr[newSelected].classList.remove("left");
//       imageSelectorArr[currentRight].classList.remove("right");
//       imageSelectorArr[newLeft].classList.add("left");
//       imageSelectorArr[newSelected].classList.add("selected");
//       imageSelectorArr[currentIndex].classList.add("right");

//       if (isPlaying) {
//         imageSynth.stop();
//         setImage(image_name);
//         imageSynth.start();
//       } else {
//         setImage(image_name);
//       }
//     } else if (element.classList.contains("right")) {
//       let currentIndex = imageSelectorArr.findIndex((element) =>
//         element.classList.contains("selected")
//       );
//       let newRight = (currentIndex + 2) % imageSelectorArr.length;
//       let newSelected = (currentIndex + 1) % imageSelectorArr.length;
//       let currentLeft =
//         (currentIndex - 1 + imageSelectorArr.length) % imageSelectorArr.length;
//       image_name = imageSelectorArr[newSelected].id;

//       imageSelectorArr[currentIndex].classList.remove("selected");
//       imageSelectorArr[newSelected].classList.remove("right");
//       imageSelectorArr[currentLeft].classList.remove("left");
//       imageSelectorArr[newRight].classList.add("right");
//       imageSelectorArr[newSelected].classList.add("selected");
//       imageSelectorArr[currentIndex].classList.add("left");

//       if (isPlaying) {
//         imageSynth.stop();
//         setImage(image_name);
//         imageSynth.start();
//       } else {
//         setImage(image_name);
//       }
//     }
//   });
// });
function resetImage(image_name) {
    if (isPlaying) {
        imageSynth.stop();
        setImage(image_name);
        imageSynth.start();
      } else {
        setImage(image_name);
      }
      playhead.setSpeed(sliderValue);
      updateImageInfo(himage);
}

leftArrow.addEventListener("click", function (event) {
  let currentIndex = imageSelectorArr.findIndex((element) =>
    element.classList.contains("selected")
  );

  let newLeft =
    (currentIndex - 2 + imageSelectorArr.length) % imageSelectorArr.length;
  let newSelected =
    (currentIndex - 1 + imageSelectorArr.length) % imageSelectorArr.length;
  let currentRight =
    (currentIndex + 1 + imageSelectorArr.length) % imageSelectorArr.length;
  image_name = imageSelectorArr[newSelected].id;

  imageSelectorArr[currentIndex].classList.remove("selected");
  imageSelectorArr[newSelected].classList.remove("left");
  imageSelectorArr[currentRight].classList.remove("right");
  imageSelectorArr[newLeft].classList.add("left");
  imageSelectorArr[newSelected].classList.add("selected");
  imageSelectorArr[currentIndex].classList.add("right");

  resetImage(image_name);
});

rightArrow.addEventListener("click", function (event) {
  let currentIndex = imageSelectorArr.findIndex((element) =>
    element.classList.contains("selected")
  );
  let newRight = (currentIndex + 2) % imageSelectorArr.length;
  let newSelected = (currentIndex + 1) % imageSelectorArr.length;
  let currentLeft =
    (currentIndex - 1 + imageSelectorArr.length) % imageSelectorArr.length;
  image_name = imageSelectorArr[newSelected].id;

  imageSelectorArr[currentIndex].classList.remove("selected");
  imageSelectorArr[newSelected].classList.remove("right");
  imageSelectorArr[currentLeft].classList.remove("left");
  imageSelectorArr[newRight].classList.add("right");
  imageSelectorArr[newSelected].classList.add("selected");
  imageSelectorArr[currentIndex].classList.add("left");

  resetImage(image_name);
});

function imagePickerDeselectAll() {
  imageSelectorArr.forEach((type) => {
    type.classList.remove("left");
    type.classList.remove("selected");
    type.classList.remove("right");
  });
}
//Play Button
let playButton = document.getElementById("playButton");
let playButtonText = document.getElementById("play-button-text");
let playPauseImage = document.getElementById("play-pause-image");
playButton.addEventListener("click", () => {
  if (isPlaying == false) {
    playButtonText.innerHTML = "Pause";
    playPauseImage.src = "./assets/icons/pause_icon.svg";
    isPlaying = true;
    // loop();
    imageSynth.start();
  } else {
    playButtonText.innerHTML = "Play";
    playPauseImage.src = "./assets/icons/play_icon.svg";
    isPlaying = false;
    //noLoop();
    imageSynth.stop();
  }
});
//Slider
document.addEventListener("DOMContentLoaded", function () {
  let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    let slider = document.getElementById("playheadSpeedSlider");
    slider.classList.add("safari-slider");
  }
});
let slider = document.getElementById("playheadSpeedSlider");
let sliderValue = slider.value;
slider.addEventListener("input", (event) => {
  sliderValue = event.target.value;
  playhead.setSpeed(sliderValue);
});
//Playhead Type (Boxes)
let playheadType = document.querySelectorAll(".playhead-type");
function deselectAll() {
  playheadType.forEach((type) => {
    type.classList.remove("playhead-type-selected");
  });
}
playheadType.forEach((type) => {
  type.addEventListener("click", () => {
    deselectAll(); // First, deselect all boxes
    type.classList.add("playhead-type-selected");
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
let leftRight = document.getElementById("leftright");
let upDown = document.getElementById("updown");
let cwccw = document.getElementById("cwccw");
let outin = document.getElementById("outin");

let reverseButton = document.getElementById("reverse");
reverseButton.addEventListener("click", () => {
  playhead.reverse();
  starSynth.sortStars(playhead);

  if (reverse == false) {
    reverse = true;
    reverseButton.classList.add("reverse-selected");
    leftRight.innerHTML = "Left";
    upDown.innerHTML = "Up";
    cwccw.innerHTML = "Counter-Clockwise";
    outin.innerHTML = "In";
  } else {
    reverse = false;
    reverseButton.classList.remove("reverse-selected");
    leftRight.innerHTML = "Right";
    upDown.innerHTML = "Down";
    cwccw.innerHTML = "Clockwise";
    outin.innerHTML = "Out";
  }
});
//Mapping
let mappingDropdown = document.getElementById("mappingDropdown");
let mappingDropdownValue = mappingDropdown.value;
mappingDropdown.addEventListener("change", (event) => {
  pitch_mapping = event.target.value;
  imageSynth.makeAmpFreqArrays();
});
//Harmony
let harmonyDropdown = document.getElementById("harmonyDropdown");
let harmonyDropdownValue = harmonyDropdown.value;
harmonyDropdown.addEventListener("change", (event) => {
  harmonyDropdownValue = event.target.value;
  imageSynth.setHarmony(harmonyDropdownValue);
  starSynth.setHarmony(harmonyDropdownValue);
});
//Sound Wave
let soundWaveDropdown = document.getElementById("soundWaveDropdown");
let soundWaveDropdownValue = soundWaveDropdown.value;
soundWaveDropdown.addEventListener("change", (event) => {
  oscillator_type = event.target.value;
  imageSynth.setOscillatorType(oscillator_type);
});
//Instrument
let instrumentDropdown = document.getElementById("instrumentDropdown");
let soundName = instrumentDropdown.value;
instrumentDropdown.addEventListener("change", (event) => {
  soundName = event.target.value;
  console.log(soundName);
  loadSoundBuffers(soundName);
});

/////////OPEN CONTROLS ON MOBILE/////////

document.addEventListener("DOMContentLoaded", function () {
  const controlsButton = document.querySelector(".controls-button");
  const controlsCloseButton = document.querySelector(".controls-close-button");
  const controls = document.querySelector(".controls");

  controlsButton.addEventListener("click", function () {
    controls.classList.add("show");
    controlsCloseButton.classList.add("show");
  });

  controlsCloseButton.addEventListener("click", function () {
    console.log("close");
    controls.classList.remove("show");
    controlsCloseButton.classList.remove("show");
  });
  //Try something where it checks if you press not on the playhead or mapping divs
});
