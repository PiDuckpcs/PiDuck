// Unit Circle Values
const values = ["0", "π/6", "π/4", "π/3", "2π/3", "3π/4", "5π/6", "π", "7π/6", "5π/4", "4π/3", "π/2", "3π/2", "5π/3", "7π/4", "11π/6", "2π"];

// Sine Values
const sines = ["0", "1/2", "√2/2", "√3/2", "√3/2", "√2/2", "1/2", "0", "-1/2", "-√2/2", "-√3/2", "1", "-1", "-√3/2", "-√2/2", "-1/2", "0"];

// Cosine Values
const cosines = ["1", "√3/2", "√2/2", "1/2", "-1/2", "-√2/2", "-√3/2", "-1", "-√3/2", "-√2/2", "-1/2", "0", "0", "1/2", "√2/2", "√3/2", "1"];

// Tangent Values
const tangents = ["0", "√3/3", "1", "√3", "-√3", "-1", "-√3/3", "0", "√3/3", "1", "√3", "und", "und", "-√3", "-1", "-√3/3", "0"];

// Cosecant Values
const cosecants = ["und", "2", "√2", "2/√3", "2/√3", "√2", "2", "und", "-2", "-√2", "-√3", "-1", "-2/√3", "-√2", "-2", "und"];

// // Secant Values
const secants = ["1", "2/√3", "√2", "2", "-2", "-√2", "-2/√3", "-1", "-√3", "-√2", "-2", "und", "2", "√2", "2/√3", "1"];

// // Cotangent Values
const cotangents = ["und", "3/√3", "1", "√3/3", "-1/√3", "-1", "-√3", "und", "√3", "1", "√3/3", "und", "-√3/3", "-1", "-√3", "und"];

// Timer Function
var timerInterval = setInterval(function() { myTimer() }, 1000);
var secondLimit = 15;

function myTimer() {
  if (secondLimit <= 0) {
    clearInterval(timerInterval);
    document.getElementById("verifyAns").innerHTML = "Time's up";
    document.getElementById("end").style.visibility = 'visible';
  }
  else {
    document.getElementById("timer").innerHTML = secondLimit;
    secondLimit--;
  }
}

// Normal Trig Generator Function
var whichTrig = Math.floor(Math.random() * 3 + 1);
var whichVal = Math.floor(Math.random() * values.length);
var faultless = 0;
var faulty = 0;

function createPblmUnitCircle() {
  if (whichTrig === 1)
    document.getElementById("question").innerHTML = "sin(" + values[whichVal] + ")";
  else if (whichTrig === 2)
    document.getElementById("question").innerHTML = "cos(" + values[whichVal] + ")";
  else if (whichTrig === 3)
    document.getElementById("question").innerHTML = "tan(" + values[whichVal] + ")";
}

// Inverse Trig Generator Function
var whichTrigHard = Math.floor(Math.random() * 6 + 1);
const array = [1, 2, 3, 4, 6];
var nume = Math.floor(Math.random() * 50 + 2);
var index = Math.floor(Math.random() * array.length);
var denominator = array[index];

function createPblmHardTest() {
  if (whichTrigHard === 1)
    document.getElementById("question").innerHTML = "sin(" + nume + "π/" + denominator + ")";
  else if (whichTrigHard === 2)
    document.getElementById("question").innerHTML = "cos(" + nume + "π/" + denominator + ")";
  else if (whichTrigHard === 3)
    document.getElementById("question").innerHTML = "tan(" + nume + "π/" + denominator + ")";
  else if (whichTrigHard === 4)
    document.getElementById("question").innerHTML = "csc(" + nume + "π/" + denominator + ")";
  else if (whichTrigHard === 5)
    document.getElementById("question").innerHTML = "sec(" + nume + "π/" + denominator + ")";
  else if (whichTrigHard === 6)
    document.getElementById("question").innerHTML = "cot(" + nume + "π/" + denominator + ")";
}

function getDataHardTest() {

  // Stop Timer
  clearInterval(timerInterval);

  // 2D Array for corresponding answers
  let twoDimensionalArr = [["0", "-1", "1", "√3/2", "√2/2", "1/2", "-1/2", "-√2/2", "-√3/2", "√3/2", "√3", "-√3", "√3/3", "-√3/3", "-2", "2", "und"], [0.00, -1.00, 1.00, (Math.sqrt(3) / 2).toFixed(2), (Math.sqrt(2) / 2).toFixed(2), 0.50, -0.50, -(Math.sqrt(2) / 2).toFixed(2), -(Math.sqrt(3) / 2).toFixed(2), (Math.sqrt(3) / 2).toFixed(2), (Math.sqrt(3)).toFixed(2), -(Math.sqrt(3)).toFixed(2), (Math.sqrt(3) / 3).toFixed(2), -(Math.sqrt(3) / 3).toFixed(2), -2.00, 2.00]];


  const num = document.getElementById('userAnswer').value;
  var correctVal = 0.00;
  for (let i = 0; i < twoDimensionalArr[0].length; i++) {
    if (num == "und") {
      correctVal = "und";
      break;
    }
    else if (twoDimensionalArr[0][i] == num) {
      if (i === 0 || i === 1 || i === 2 || i === 5 || i === 6 || i == 14 || i == 15)
        correctVal = (twoDimensionalArr[1][i]).toFixed(2);
      else
        correctVal = (twoDimensionalArr[1][i]);
    }
  }
  var checkVal = 0.00;
  if (whichTrig === 1) {
    if (Math.abs(Math.sin((nume * Math.PI) / denominator).toFixed(2)) === 0.00)
      checkVal = Math.abs(Math.sin((nume * Math.PI) / denominator)).toFixed(2);
    else
      checkVal = Math.sin((nume * Math.PI) / denominator).toFixed(2);
  }
  else if (whichTrig === 2) {
    if (Math.abs(Math.cos((nume * Math.PI) / denominator).toFixed(2)) === 0.00)
      checkVal = Math.abs(Math.cos((nume * Math.PI) / denominator)).toFixed(2);
    else
      checkVal = Math.cos((nume * Math.PI) / denominator).toFixed(2);
  }
  else if (whichTrig === 3) {
    if ((denominator === 2 && nume % 2 != 0) || (denominator === 4 && nume % 2 === 0) || (denominator === 6 && nume % 3 === 0))
      checkVal = "und";
    else if (Math.abs(Math.tan((nume * Math.PI) / denominator).toFixed(2)) === 0.00)
      checkVal = Math.abs(Math.tan((nume * Math.PI) / denominator)).toFixed(2);
    else
      checkVal = Math.tan((nume * Math.PI) / denominator).toFixed(2);
  }
  else if (whichTrig === 4) {
    if (Math.abs(Math.sin((nume * Math.PI) / denominator).toFixed(2)) === 0.00)
      checkVal = "und";
    else
      checkVal = (1.00 / (Math.sin((nume * Math.PI) / denominator))).toFixed(2);
  }
  else if (whichTrig == 5) {
    if (Math.abs(Math.cos((nume*Math.PI) / denominator).toFixed(2)) === 0.00)
      checkVal = "und";
    else
      checkVal = (1.0 / Math.cos(((nume * Math.PI) / denominator))).toFixed(2);
  }
  else if (whichTrig == 6) {
    if (Math.abs(Math.tan((nume * Math.PI) / denominator).toFixed(2)) === 0.00)
      checkVal = "und";
    else
      checkVal = (1.0 / (Math.tan((nume * Math.PI) / denominator))).toFixed(2);
  }

  // Check if value is correct
  if (correctVal == checkVal) {
    document.getElementById("verifyAns").innerHTML = "You got it right!!!";
    if (document.getElementById("end").style.visibility == 'visible')
      document.getElementById("next").style.visibility = 'hidden';
    else
      document.getElementById("next").style.visibility = 'visible';
  }
  else {
    document.getElementById("verifyAns").innerHTML = "Try again!";
    document.getElementById("end").style.visibility = 'visible';
  }
}

function getDataUnitCircle() {
  // Stop Timer
  clearInterval(timerInterval);

  var userAns = document.getElementById('userAnswer').value;
  var accAns;

  if (whichTrig === 1)
    accAns = sines[whichVal];
  else if (whichTrig === 2)
    accAns = cosines[whichVal];
  else if (whichTrig === 3)
    accAns = tangents[whichVal];

  // Check if value is correct
  if (userAns == accAns) {
    faultless = faultless + 1;
    document.getElementById("verifyAns").innerHTML = "You got it right!";

    if (document.getElementById("end").style.visibility == 'visible')
      document.getElementById("next").style.visibility = 'hidden';
    else
      document.getElementById("next").style.visibility = 'visible';
  }
  else {
    faulty = faulty + 1;
    document.getElementById("verifyAns").innerHTML = "Try Again!";
    document.getElementById("end").style.visibility = 'visible';
  }
}

/*
function printScore() {
  if (localStorage.getItem("faultless") == null) {
    localStorage.setItem("faultless", 0);
  } else if (localStorage.getItem("faulty") == null) {
    localStorage.setItem("faulty", 0);
  }
  document.getElementById("scoree").innerHTML = "Correct: " + localStorage.getItem("faultless") + " Incorrect: " + localStorage.getItem("faulty");
  localStorage.setItem("faultless", 0);
  localStorage.setItem("faulty", 0);
}
*/