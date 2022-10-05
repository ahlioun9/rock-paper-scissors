
function getComputerChoice() {
  const items = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * 3);
  return items[index];
}

function playRound(player, computer) {
  player = player.toLowerCase();
  
  if (player === 'rock') {
    if (computer === 'paper') {
      return 'You Lose! Paper beats Rock.';
    } else if (computer === 'scissors') {
      return 'You Win! Rock beats Scissors';
    } else {
      return 'Both Rock';
    }

  } else if (player === 'paper') {
    if (computer == 'rock') {
      return 'You Win! Paper beats Rock';
    } else if (computer === 'scissors') {
      return 'You Lose! Scissors beats Paper';
    } else {
      return 'Both Paper';
    }

  } else if (player === 'scissors') {
    if (computer === 'rock') {
      return 'You Lose! Rock beats Scissors';
    } else if (computer === 'paper') {
      return 'You Win! Scissors beats Paper';
    } else {
      return 'Both Scissors';
    }
  }
}

let score = 0;

for (let i = 0; i < 5; i++) {
  const player = prompt('(Rock, Paper, Scissors): ');
  const computer = getComputerChoice()

  const result = playRound(player, computer);
  console.log(result);
  if (result.includes('Win')) {
    score++
  }
  if (result.includes('Both')) {
    i--;
  }
}

if (score > 2) {
  console.log('You\'re the winner', score);
} else {
  console.log('You\'re the loser', score);
}