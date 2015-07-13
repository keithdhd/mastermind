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
    this.gameBoard.bindListeners(this.gameBoard, 0);
    this.createSecretCode();
    this.startGame();
  }

  Mastermind.prototype.startGame = function(){

  }

  Mastermind.prototype.endGame = function(){

  }

  Mastermind.prototype.giveFeedback = function(arrGuess, guessNum){
    var white = 0;
    var black = 0;
    var guessColor;
    var guessPosition;
    var arrSuccessullBlackColors = [];
    var guessNum = guessNum.charAt(guessNum.length-1);

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
        if(this._secretCode[j].getColor() == guessColor && this._secretCode[j].getPosition() == guessPosition){
          black++; 
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
          break; 
        }
      }
    }

    console.log("black:" + black);
    console.log("white:" + white);

    if(black === 5 && white === 0){
      alert("You win in " +  (parseInt(guessNum) + 1) + " guesses!");
      $("#feedback" + guessNum).html("WIN");
    }else{
      $("#feedback" + guessNum).html("black:" + black   + "<br>" + "white:" + white); 
    }

    //clear currentGuess array
    arrGuess.length = 0;
    this.gameBoard.bindListeners(this.gameBoard, parseInt(guessNum) + 1);
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