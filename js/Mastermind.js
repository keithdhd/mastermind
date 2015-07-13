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
    var white = 0;
    var black = 0;
    var guessColor;
    var guessPosition;
    var arrSuccessullBlackColors = [];

    //for every guess peg, check the position and color
    //and compare to secretCode pegs
    //if position and color === true black++
    //if color === true white++
 
    var i=0;
    for(i; i<arrGuess.length; i++){
      guessColor = arrGuess[i].getColor();
      guessPosition = arrGuess[i].getPosition();

      //look for perfect matches first
      var j=0;
      for(j; j<this._secretCode.length; j++){
        //console.log("secretCode: " + this._secretCode[j].getColor() + ":" + this._secretCode[j].getPosition());  
        //console.log("Guess:" + guessColor + ":" + guessPosition);
        if(this._secretCode[j].getColor() == guessColor && this._secretCode[j].getPosition() == guessPosition){
          black++;
          //delete arrGuess[i]; 
          arrSuccessullBlackColors[arrSuccessullBlackColors.length] = guessColor;
          break;
        }
      }
    }
    i=0;
    for(i; i<arrGuess.length; i++){
      guessColor = arrGuess[i].getColor();
      guessPosition = arrGuess[i].getPosition();

      var k=0;
      for(k; k<this._secretCode.length; k++){
        if(this._secretCode[k].getColor() == guessColor && arrSuccessullBlackColors.indexOf(guessColor) === -1){
          white++;
          //delete arrGuess[i];
          break; 
        }
      }
debugger
    }

    console.log("black:" + black);
    console.log("white:" + white);

    //clear currentGuess array
    arrGuess.length = 0;
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