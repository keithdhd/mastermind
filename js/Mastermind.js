function Mastermind(){
  
  this._secretCode = [];
  this._score = {
    codeBreaker: 0,
    codeMaker: 0
  };
  this._colors = ["red", "yellow", "aqua", "blue", "orange", "green", "black", "white", "maroon", "brown", "purple", "grey"];
  this.gameBoard = new GameBoard(this);
}

  Mastermind.prototype.init = function(){
    console.log("Initialising Mastermind");
    this.gameBoard.buildBoard();
    this.gameBoard.bindListeners(this.gameBoard);
    this.createSecretCode();
    this.startGame();
  }

  Mastermind.prototype.startGame = function(){

  }

  Mastermind.prototype.endGame = function(){

  }

  Mastermind.prototype.giveFeedback = function(arrGuess){
    console.log(arrGuess);
  }

  Mastermind.prototype.createSecretCode = function(){
    var peg;
    var j;
    for(j=0; j<5; j++){
      peg = new Peg(this._colors[Math.floor(Math.random() * 11)], j);
      this._secretCode.push(peg);
    }
    this.gameBoard.addSecretCode(this._secretCode);
  }


$(function(){
  var mastermind = new Mastermind();
  mastermind.init();
});