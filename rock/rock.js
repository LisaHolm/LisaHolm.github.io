let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const action_div = document.getElementById("action-message");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

//// computer choice till bild
function showComputerImg(computerChoice) {
  if (computerChoice === 'r') {
    document.getElementById('cr').style.display='inline';
  } else if (computerChoice === 'p') {
    document.getElementById('cp').style.display='inline';
  } else {
    document.getElementById('cs').style.display='inline';
  }
}

function hideComputerImg() {
  document.getElementById('cr').style.display='none';
  document.getElementById('cp').style.display='none';
  document.getElementById('cs').style.display='none';
}

function highlightUserChoice(userChoice) {
  var opacity = "0.15";
  var scale = "scale(1.2)";
  if (userChoice === 'r') {
    document.getElementById('r').style.transform = scale;
    document.getElementById('p').style.opacity = opacity;
    document.getElementById('s').style.opacity = opacity;
    console.log("something is correct");

  } else if (userChoice === 'p') {
    document.getElementById('p').style.transform = scale;
    document.getElementById('r').style.opacity = opacity;
    document.getElementById('s').style.opacity = opacity;
    // } else if (userChoice === 's') {
    // document.getElementById('r').style.opacity = "0.5";
    // document.getElementById('p').style.opacity = "0.5";
  } else {
    document.getElementById('s').style.transform = scale;
    document.getElementById('r').style.opacity = opacity;
    document.getElementById('p').style.opacity = opacity;
    console.log("something is wrong");
  }
}

function resetUserChoice() {
  document.getElementById('r').style.transform = "scale(1.0)";
  document.getElementById('p').style.transform = "scale(1.0)";
  document.getElementById('s').style.transform = "scale(1.0)";
  document.getElementById('r').style.opacity = "1";
  document.getElementById('p').style.opacity = "1";
  document.getElementById('s').style.opacity = "1";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
  action_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 1500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost... `;
  action_div.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost... `;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')}, 1500);
}


function draw(userChoice, computerChoice) {
  action_div.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw.`;
  document.getElementById(userChoice).classList.add('blue-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('blue-glow')}, 1500);

}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  showComputerImg(computerChoice);
  resetUserChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice, computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice);
    break;
  }
}

function start(userChoice) {
  hideComputerImg();
  highlightUserChoice(userChoice);


  var timeLeft = 3;
  var elem = document.getElementById('action-message');
  var timerId = setInterval(countdown, 600);

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      game(userChoice);
    } else {
      elem.innerHTML = timeLeft;
      timeLeft--;
    }
  }
}

function main() {

  rock_div.addEventListener('click', function() {
    start("r");
  })

  paper_div.addEventListener('click', function() {
    start("p");
  })

  scissors_div.addEventListener('click', function() {
    start("s");
  })
}

main();
