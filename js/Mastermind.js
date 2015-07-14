function Mastermind(){

  this._secretCode = [];
  this._score = {
    codeBreaker: 0,
    codeMaker: 0
  };
  this._colors = ["red", "yellow", "aqua", "blue", "orange", "green", "black", "white"];
  this.gameBoard = new GameBoard(this);
}

Mastermind.prototype.init = function(){
  console.log("Initialising Mastermind");
  this._secretCode.length = 0;
  this.gameBoard.buildBoard();
  this.gameBoard.bindListeners(this.gameBoard, 0);
  this.createSecretCode();
  $("#secret-code").css("display", "none");
}

Mastermind.prototype.endGame = function(guessNum, black){
  if(black == 4){
    $("#feedback" + guessNum).html("<span class='feedback-black'>WIN!</span>");
  }else{
    $("#feedback" + guessNum).html("<span class='feedback-black'>LOSE!</span>");
  }

  $("#secret-code").fadeIn("slow");

  $( ".peg" ).draggable({
    disabled: true
  });

}

Mastermind.prototype.giveFeedback = function(arrGuess, guessNum){
  var white = 0;
  var black = 0;
  var arrSecretCode = this._secretCode.slice(0);
  var orderedArray = buildOrderedArray(arrGuess);
  var guessNum = guessNum.charAt(guessNum.length-1);
  black = getMatches(orderedArray, arrSecretCode);
  orderedArray.sort();
  arrSecretCode.sort();
  white = getImperfectMatches(orderedArray, arrSecretCode);

  function buildOrderedArray(arrGuess){
    var orderedArray = Array(4);
    var peg;
    for(var j=0; j<arrGuess.length; j++){
      peg = arrGuess[j]; 
      orderedArray[peg.getPosition()] = peg.getColor();
    }
    return orderedArray;
  }

   //1. Perfect -> right color right position
    function getMatches(orderedArray, arrSecretCode){   
      for (var i=0; i< arrSecretCode.length; i++) {
          console.log("arrSecretCode[i]:"+ arrSecretCode[i].getColor());
          if(arrSecretCode[i].getColor() == orderedArray[i]) {
            arrSecretCode[i] = orderedArray[i] = null;
          }    
        }

        return arrSecretCode.filter(function(value){
          return value == null;
        }).length;
      }

      function getImperfectMatches(orderedArray, arrSecretCode){
        var whiteCount = 0;
        
        for(var i=0; i<orderedArray.length; i++){
          for(var j=0; j<arrSecretCode.length; j++){
             if(arrSecretCode[j] !== null){
               if(arrSecretCode[j].getColor() == orderedArray[i]){
                orderedArray[i] = null;
                whiteCount++; 
              }
            }
          }
     
       }
       return whiteCount;
     }

  console.log("black:" + black);
  console.log("white:" + white);

  if((black === 4 && white === 0) || parseInt(guessNum)+1 === 8){
    this.endGame(parseInt(guessNum), black);
  }else{
    $("#feedback" + guessNum).html("<span class='feedback-black'>" + black + "</span><span class='feedback-white'>" + white + "</span>"); 
  }

    //clear currentGuess array
    arrGuess.length = 0;
    this.gameBoard.bindListeners(this.gameBoard, parseInt(guessNum) + 1);
  }

  Mastermind.prototype.createSecretCode = function(){
    var peg;
    var j;
    for(j=0; j<4; j++){
      peg = new Peg(this._colors[Math.floor(Math.random() * 7)], j);
      this._secretCode.push(peg);
    }
    this.gameBoard.addSecretCode(this._secretCode);
  }

  $(function(){
    var mastermind = new Mastermind();
    mastermind.init();
  });