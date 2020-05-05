const playerScore_p = document.querySelector('#player__score');
const computerScore_p = document.querySelector('#computer__score');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const ROCK_SELECT = 'ROCK';
const PAPER_SELECT = 'PAPER';
const SCISSORS_SELECT = 'SCISSORS';

let computerScore = 0;
let playerScore = 0;

const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return ROCK_SELECT;
  } else if (computerChoice === 2) {
    return PAPER_SELECT;
  } else {
    return SCISSORS_SELECT;
  }
};

const winCondition = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    result.innerHTML = `You chose ${pChoice}, Computer chose ${cChoice}, It's a draw!`;
  } else if (
    (cChoice === ROCK_SELECT && pChoice === PAPER_SELECT) ||
    (cChoice === PAPER_SELECT && pChoice === SCISSORS_SELECT) ||
    (cChoice === SCISSORS_SELECT && pChoice === ROCK_SELECT)
  ) {
    result.innerHTML = `You chose ${pChoice}, Computer chose ${cChoice}, You win!`;
    playerScore++;
    playerScore_p.innerHTML = playerScore;
  } else {
    result.innerHTML = `You chose ${pChoice}, Computer chose ${cChoice}, You lost!`;
    computerScore++;
    computerScore_p.innerHTML = computerScore;
  }
};

const glow = choice => {
  if (choice === ROCK_SELECT) {
    rock.classList.remove('select');
  } else if (choice === PAPER_SELECT) {
    paper.classList.remove('select');
  } else {
    scissors.classList.remove('select');
  }
};

rock.addEventListener('click', () => {
  winCondition(getComputerChoice(), ROCK_SELECT);
  rock.classList.add('select');
  setTimeout(() => {
    glow(ROCK_SELECT);
  }, 500);
});

paper.addEventListener('click', () => {
  winCondition(getComputerChoice(), PAPER_SELECT);
  paper.classList.add('select');
  setTimeout(() => {
    glow(PAPER_SELECT);
  }, 500);
});

scissors.addEventListener('click', () => {
  winCondition(getComputerChoice(), SCISSORS_SELECT);
  scissors.classList.add('select');
  setTimeout(() => {
    glow(SCISSORS_SELECT);
  }, 500);
});
