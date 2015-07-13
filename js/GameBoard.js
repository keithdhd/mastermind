function GameBoard(mastermind){
  this._currentGuess = [];
  this._guesses = [];
  this._numberOfGuesses = 8;
  this.mastermind = mastermind;
}

GameBoard.prototype.bindListeners = function(gameBoard, guessNum){
  $(".peg").draggable({
    revert: "invalid", // when not dropped, the item will revert back to its initial position
    cursor: "move",
    helper: "clone"
  });
console.log("bindListeners:" + guessNum);
  $( "#guess" + guessNum + "> .hole" ).droppable({
    accept: ".peg",
    drop: function( event, ui ) {
      var targetElem = $(this).attr("id");
      $(this).html($(ui.draggable).clone());
      gameBoard.addPeg(ui.draggable[0].id, targetElem, $(this).parent().attr("id"));
    }
  });
}

GameBoard.prototype.buildBoard = function(){
  //loop x times and append guess-holes-template to guess-container
  var guessUl;
  var i = this._numberOfGuesses - 1;
  for(i; i>=0; i--){
    guessUl = document.createElement('ul'); 
    $(guessUl).append($("#guess-holes-template").html());
    $(guessUl).attr("id", "guess" + i);
    $(guessUl).attr("class", "guess-holes");

    $(guessUl).append("<li><div class='feedback-holes' id=feedback" + i + "></div></li>");

    $("#guesses-container").append($(guessUl));
  }
}

GameBoard.prototype.addPeg = function(color, position, guessNum){
  //addPeg should add a peg object to the current guess array
  this._currentGuess.push(new Peg(color, position));

  if(this._currentGuess.length === 5){
   this.mastermind.giveFeedback(this._currentGuess, guessNum);   
 }
}

GameBoard.prototype.addSecretCode = function(arrSecretCode){
  var i=0;
  for(i; i<arrSecretCode.length; i++){
    $('#secret-code #' + i).attr("class", "peg " + arrSecretCode[i].getColor());
  }
}
