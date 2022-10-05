
function getComputerChoice() {
  const items = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * 3);
  return items[index];
}

console.log(getComputerChoice());