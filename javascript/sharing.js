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
let shareLink = document.getElementById("shareLink");
let localUrl = "127.0.0.1:5500/app/index.html";
let githubUrl = "https://systemsoundsteam.github.io/hearing-hubble-test/";
let shareUrl = window.location.href;
let savedSonification;
// console.log(soundWaveArr);

//--------------------------------LOAD SONIFICATION--------------------------------//

// const shareUrl = window.location.href; //Need to change this when it's in an iframe
// let shareUrl = "http://127.0.0.1:5500/app/index.html?1-2-true-0-2-0-0-21"; //Test URL
// let shareUrl = "";

if (shareUrl.includes("?")) {
  let paramsArr = shareUrl.split("?")[1].split("-"); //Get the parameters from the URL
  // console.log((paramsArr[0] - 1 + imagesArr.length) % imagesArr.length);
  // console.log(paramsArr[0]);
  // console.log((paramsArr[0] + 1 + imagesArr.length) % imagesArr.length);
  imagePickerDeselectAll(); //Deselect all images
  image_name = imagesArr[paramsArr[0]].id; //Set image name
  console.log("1", paramsArr[0]);

  imagesArr[parseInt(paramsArr[0])].classList.add("selected"); //Add selected class to image
  imagesArr[
    (parseInt(paramsArr[0]) - 1 + imagesArr.length) % imagesArr.length
  ].classList.add("left"); //Add left class to image
  imagesArr[
    (parseInt(paramsArr[0]) + 1 + imagesArr.length) % imagesArr.length
  ].classList.add("right");

  // console.log(imagesArr[paramsArr[0] + 1]);

  // imagesArr[
  //   (paramsArr[0] + 1 + imagesArr.length) % imagesArr.length
  // ].classList.add("right"); //Add right class to image
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
  let imageIndex = imagesIdArr.indexOf(image_name);
  let scanLineIndex = scanLinesArr.indexOf(playhead_type);
  let mappingIndex = mappingArr.indexOf(mappingDropdown.value);
  let harmonyIndex = harmonyArr.indexOf(harmonyDropdown.value);
  let soundWaveIndex = soundWaveArr.indexOf(soundWaveDropdown.value);
  let instrumentIndex = instrumentArr.indexOf(instrumentDropdown.value);
  let savedSonification = `${githubUrl}?${imageIndex}-${scanLineIndex}-${reverse}-${mappingIndex}-${harmonyIndex}-${soundWaveIndex}-${instrumentIndex}-${sliderValue}`;
  shareLink.innerHTML = savedSonification;
  console.log(savedSonification);
  // window.location.href = url;
}

function copySonificationLink() {
  let copyText = shareLink.innerHTML;
  console.log(copyText);
  document.getElementById("copyButton").innerText = "Copied!";
  navigator.clipboard.writeText(copyText);
}
