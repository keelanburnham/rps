const cpuDisplay = document.getElementById('cpu-choice');
const userDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
let userSelection;
let cpuSelection;

const selections = document.querySelectorAll('button');

selections.forEach((selections) =>
  selections.addEventListener('click', (e) => {
    userSelection = e.target.id;
    userDisplay.innerHTML = userSelection;
    generateCPUSelection();
    getResult();
  })
);

function generateCPUSelection() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      cpuSelection = 'Rock';
      break;
    case 2:
      cpuSelection = 'Paper';
      break;
    case 3:
      cpuSelection = 'Scissors';
      break;
  }
  cpuDisplay.innerHTML = cpuSelection;
}

function getResult() {
  let result;
  if (cpuSelection === userSelection) {
    result = 'Draw!';
  } else if (
    // win conditions
    (userSelection === 'Rock' && cpuSelection === 'Scissors') ||
    (userSelection === 'Paper' && cpuSelection === 'Rock') ||
    (userSelection === 'Scissors' && cpuSelection === 'Paper')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose.';
  }
  resultDisplay.innerHTML = result;
}
