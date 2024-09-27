////////////////////////////////////////////////////////////////////////////////////////////////////
let url = "https://systemsoundsteam.github.io/hearing-hubble-test/";  // SET THIS TO URL OF PAGE HOSTING THE IFRAME
////////////////////////////////////////////////////////////////////////////////////////////////////

let shareLink = document.getElementById("shareLink");
let localUrl = "127.0.0.1:5500/app/index.html"; //only used for testing
let shareUrl = window.location.href;
let savedSonification;


//--------------------------------ARRAYS--------------------------------------------//
let imagesArr = Array.from(
  document.querySelectorAll(".image-container img")
).map((element) => element);
let imagesIdArr = Array.from(
  document.querySelectorAll(".image-container img")
).map((element) => element.id);
let scanLinesArr = Array.from(document.querySelectorAll(".scanLine")).map(
  (element) => element.id
);
let mappingArr = Array.from(document.getElementById("mappingDropdown")).map(
  (element) => element.value
);
let harmonyArr = Array.from(document.getElementById("harmonyDropdown")).map(
  (element) => element.value
);
let soundWaveArr = Array.from(document.getElementById("soundWaveDropdown")).map(
  (element) => element.value
);
let instrumentArr = Array.from(
  document.getElementById("instrumentDropdown")
).map((element) => element.value);



//--------------------------------LOAD SONIFICATION--------------------------------//

if (shareUrl.includes("?")) {
  let paramsArr = shareUrl.split("?")[1].split("-"); //Get the parameters from the URL
  imagePickerDeselectAll(); //Deselect all images
  image_name = imagesArr[paramsArr[0]].id; //Set image name

  imagesArr[parseInt(paramsArr[0])].classList.add("selected"); //Add selected class to image
  imagesArr[
    (parseInt(paramsArr[0]) - 1 + imagesArr.length) % imagesArr.length
  ].classList.add("left"); //Add left class to image
  imagesArr[
    (parseInt(paramsArr[0]) + 1 + imagesArr.length) % imagesArr.length
  ].classList.add("right");

  playhead_type = scanLinesArr[paramsArr[1]]; //Set playhead type
  deselectAll(); //Deselect all scanlines
  document
    .getElementById(scanLinesArr[paramsArr[1]])
    .classList.add("playhead-type-selected"); //Select playhead
  if (paramsArr[2] == "true") {
    //Set reverse
    //make function that sets the direction of the playhead
    direction_sign = -1;
    reverse = true;
    reverseButton.classList.add("reverse-selected");
    leftRight.innerHTML = "Left";
    upDown.innerHTML = "Up";
    cwccw.innerHTML = "Counter-Clockwise";
    outin.innerHTML = "In";
  }
  mappingDropdown.value = mappingArr[paramsArr[3]]; //Set pitch mapping dropdown value
  pitch_mapping = mappingArr[paramsArr[3]]; //Set pitch mapping
  harmonyDropdown.value = harmonyArr[paramsArr[4]]; //Set harmony dropdown value
  harmonyDropdownValue = harmonyArr[paramsArr[4]]; //Set harmony
  soundWaveDropdown.value = soundWaveArr[paramsArr[5]]; //Set sound wave dropdown value
  soundWaveDropdownValue = soundWaveArr[paramsArr[5]]; //Set sound wave
  instrumentDropdown.value = instrumentArr[paramsArr[6]]; //Set instrument dropdown value
  soundName = instrumentArr[paramsArr[6]]; //Set instrument
  slider.value = paramsArr[7]; //Set slider value
}

//--------------------------------SAVE SONIFICATION--------------------------------//
function saveSonification() {
  shareLink.classList.remove("copy-animation");
  let imageIndex = imagesIdArr.indexOf(image_name);
  let scanLineIndex = scanLinesArr.indexOf(playhead_type);
  let mappingIndex = mappingArr.indexOf(mappingDropdown.value);
  let harmonyIndex = harmonyArr.indexOf(harmonyDropdown.value);
  let soundWaveIndex = soundWaveArr.indexOf(soundWaveDropdown.value);
  let instrumentIndex = instrumentArr.indexOf(instrumentDropdown.value);
  let savedSonification = `${url}?${imageIndex}-${scanLineIndex}-${reverse}-${mappingIndex}-${harmonyIndex}-${soundWaveIndex}-${instrumentIndex}-${sliderValue}`;
  shareLink.innerHTML = savedSonification;
}

function copySonificationLink() {
  let copyText = shareLink.innerHTML;
  document.getElementById("copyButton").innerText = "Copied!";
  shareLink.classList.add("copy-animation");
  navigator.clipboard.writeText(copyText);
}
