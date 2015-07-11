function Mastermind(){
  
  this._secretCode = [];
  this._score = {
    codeBreaker: 0,
    codeMaker: 0
  };

  this.gameBoard = new GameBoard();

}
  Mastermind.prototype.init = function(){
    console.log("Initialising Mastermind");

    this.startGame();
  }

  Mastermind.prototype.startGame = function(){
    this.gameBoard.bindListeners();
    this.gameBoard.buildBoard();
  }

  Mastermind.prototype.endGame = function(){

  }

  Mastermind.prototype.giveFeedback = function(){

  }

  Mastermind.prototype.generateCode = function(){

  }


$(function(){
  var mastermind = new Mastermind();
  mastermind.init();
});