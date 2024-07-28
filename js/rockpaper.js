/**
 * Rock Paper Scissors Lizard Spock Game
 * Author: Gabriela Moniz
 * Date: March 4, 2023
 */

// Get DOM elements
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("k");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreTable_div = document.querySelector(".score-table");
const result_p = document.querySelector(".result > p");

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Get a random option (rock, paper, scissors, lizard, or spock)
function getComputerOption() {
  const options = ['r', 'p', 's', 'l', 'k'];
  const randomNum = Math.floor(Math.random() * options.length);
  return options[randomNum];
}

// Convert an option letter to its corresponding word
function convertToWord(letter) {
  const optionNames = {
    'r': "Rock",
    'p': "Paper",
    's': "Scissors",
    'l': "Lizard",
    'k': "Spock"
  };
  return optionNames[letter];
}

// Handle a win
function win(userOption, computerOption) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userOption)} beats ${convertToWord(computerOption)} - YOU WON! 👍`;
}

// Handle a loss
function lose(userOption, computerOption) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userOption)} loses to ${convertToWord(computerOption)} - YOU LOST! 👎`;
}

// Handle a tie
function tie(userOption, computerOption) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userOption)} equals ${convertToWord(computerOption)} - THE RESULT IS A TIE! 👊`;
}

// Define winning combinations
const winningCombinations = {
  'r': ['s', 'l'],
  'p': ['r', 'k'],
  's': ['p', 'l'],
  'l': ['p', 'k'],
  'k': ['r', 's']
};

// Play a round of the game
function play(userOption) {
  const computerOption = getComputerOption();
  
  if (userOption === computerOption) {
    tie(userOption, computerOption);
  } else if (winningCombinations[userOption].includes(computerOption)) {
    win(userOption, computerOption);
  } else {
    lose(userOption, computerOption);
  }
}

// Main function that adds event listeners to each option (rock, paper, scissors, lizard, and spock)
function main() {
  rock_div.addEventListener('click', () => play("r"));
  paper_div.addEventListener('click', () => play("p"));
  scissors_div.addEventListener('click', () => play("s"));
  lizard_div.addEventListener('click', () => play("l"));
  spock_div.addEventListener('click', () => play("k"));
}

main();

// Restart the game by resetting scores and result message
function restartGame() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "New game. Make your move!";
}

// Add an event listener to the restart button
document.getElementById('restart-button').addEventListener('click', restartGame);

