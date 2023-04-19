window.addEventListener("load", init);

// Available Levels

var time;
let score = 0;
let isPlaying;

// DOM Elements

let gear = document.getElementById("gear");
let strtbtn = document.getElementById("strtbtn");
let sec = document.getElementById("sec");
let myDIV = document.getElementById("myDIV");
let wordInput = document.querySelector("#word-input");
let currentWord = document.querySelector("#current-word");
let scoreDisplay = document.querySelector("#score");
let timeDisplay = document.querySelector("#time");
let message = document.querySelector("#message");
let seconds = document.querySelector("#seconds");
let seconds2 = document.querySelector("#seconds2");
let second = document.querySelector("#second");
let highscoreDisplay = document.querySelector("#highscore");
var SelectVal = document.getElementById("mySelect");
var finishscore = document.getElementById("finishscore");
var finish = document.getElementById("finish");

var currentLevel;
function select() {
  if (SelectVal.value == 1) {
    localStorage.i = 1;
    currentLevel = 20;
    gear.innerHTML="easy";
    seconds.innerHTML = currentLevel;
    seconds2.innerHTML = currentLevel;
  } else if (SelectVal.value == 2) {
    localStorage.i = 2;
    currentLevel = 15;
    gear.innerHTML="normal";
    seconds.innerHTML = currentLevel;
    seconds2.innerHTML = currentLevel;
  } else if (SelectVal.value == 3) {
    localStorage.i = 3;
    currentLevel = 10;
    gear.innerHTML="hard";
    seconds.innerHTML = currentLevel;
    seconds2.innerHTML = currentLevel;
  }
  else {
    localStorage.i = 1;
    currentLevel = 20;

    seconds.innerHTML = currentLevel;
    seconds2.innerHTML = currentLevel;
  }
}

let words = [
  "hat",
  "hamza",
  "lucky",
  "monkey",
  "saeed",
  "ali",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "mostafa",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "css",
  "html",
  "mahmoud",
];
// Initialize Game
function init() {
  if (Number(localStorage.i) == 1) {
    time = 20;
    sec.innerHTML = 20;
  }
  if (Number(localStorage.i) == 2) {
    time = 15;
    sec.innerHTML = 15;
  }
  if (Number(localStorage.i) == 3) {
    time = 10;
    sec.innerHTML = 10;
  }
  // Show number of seconds in UI
  setInterval(countdown, 1000);
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener("input", startMatch);
}
// Call countdown every second

// Check game status
setInterval(checkStatus, 50);

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    myDIV.style.backgroundColor = "0xaaaaaa";
    message.innerHTML = "Correct!!!";
    return true;
  } else if (wordInput.value != currentWord.innerHTML) {
    // myDIV.style.backgroundColor = "#212529";
  }
}
// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}
// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    // document.body.innerHTML = "Game Over!!!";
    message.innerHTML = "Game Over!!!";
    myDIV.style.display = "none";
    finishscore.innerHTML = score;
    finish.style.display = "block";
  }
}
function test(){
  strtbtn.disabled = false;
}