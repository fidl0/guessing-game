const GuessingGame = require('./src/guessing-game.js');

window.game = new GuessingGame();

// this method accepts min and max value of range of number to guess
setRange(min, max)

// this method returns solution candidate (you make an assumption based on range and previous assumptions)
guess()

// this method is called if prev call of guess() returned number which is greater than answer
lower()

// this method is called if prev call of guess() returned number which is lower than answer
greater()