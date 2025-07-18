let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (guess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low!";
  } else if (guess > secretNumber) {
    message.textContent = "📈 Too high!";
  } else {
    message.textContent = "Please enter a valid number!";
  }
}
