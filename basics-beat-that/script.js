var GAME_MODE_DICE_ROLL = "GAME_MODE_DICE_ROLL";
var GAME_MODE_CHOOSE_DICE_ORDER = "GAME_MODE_CHOOSE_DICE_ORDER";

var gameMode = GAME_MODE_DICE_ROLL;

var currPlayer = 1;

var player1Dice = [];
var player2Dice = [];

var player1Num;
var player1Num;

// =======Main Function======

var main = function (input) {
  // var myOutputValue = "Hello";
  // return myOutputValue;

  if (gameMode == GAME_MODE_DICE_ROLL) {
    var newDiceRolls = getDiceRolls();
    gameMode = GAME_MODE_CHOOSE_DICE_ORDER;

    console.log(gameMode);

    return (
      "Welcome Player " +
      currPlayer +
      " you rolled Dice 1: " +
      newDiceRolls[0] +
      " and Dice 2: " +
      newDiceRolls[1] +
      " choose the order of the dice by entering 1 or 2 as the first numeral index"
    );
  }
};

// ======Helper Function======

var rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var getDiceRolls = function () {
  var newDiceRolls = [rollDice(), rollDice()];

  if (currPlayer === 1) {
    player1Dice = newDiceRolls;
  } else {
    player2Dice = newDiceRolls;
  }

  return newDiceRolls;
};

var concatenate2Numbers = function (num1, num2) {
  return Number(String(num1) + String(num2));
};

var getPlayerNumber = function (firstNumbeIndex) {
  var diceArray = currPlayer === 1 ? playerDice : player2Dice;
  var playerNum;

  if (firstNumberIndex === 1) {
    playerNum = concatenate2Numbers(diceArray[1], diceArray[0]);
  } else {
    playerNum = concatenate2Numbers(diceArray[1], diceArray[0]);
  }

  if (currPlayer == 1) {
    player1Num = playerNum;
  } else {
    player2Num = playerNum;
  }

  return playerNum;
};

var determineWinner = function () {
  if (player1Num > player2Num) {
    return 1;
  }
  return 2;
};
