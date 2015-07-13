function GameBoard(mastermind){
  this._currentGuess = [];
  this._guesses = [];
  this._numberOfGuesses = 8;
  this.mastermind = mastermind;
}

GameBoard.prototype.bindListeners = function(gameBoard){

  $(".peg").draggable({
    revert: "invalid", // when not dropped, the item will revert back to its initial position
    cursor: "move",
    helper: "clone"
  });

  $( ".hole" ).droppable({
    accept: ".peg",
    drop: function( event, ui ) {
      var targetElem = $(this).attr("id");
      $( ui.draggable ).clone().appendTo(this);
      gameBoard.addPeg(ui.draggable[0].id, targetElem);
    }
  });
}

GameBoard.prototype.buildBoard = function(){
  //loop x times and append guess-holes-template to guess-container
  var guessUl;
  var i=0;
  for(i; i<this._numberOfGuesses; i++){
    guessUl = document.createElement('ul'); 
    $(guessUl).append($("#guess-holes-template").html());
    $(guessUl).attr("id", i);
    $(guessUl).attr("class", "guess-holes");

    $("#guesses-container").append($(guessUl));
  }
}

GameBoard.prototype.addPeg = function(color, position){
  //addPeg should add a peg object to the current guess array
  this._currentGuess.push(new Peg(color, position));

  if(this._currentGuess.length === 5){
   this.mastermind.giveFeedback(this._currentGuess);   
 }
}

GameBoard.prototype.addSecretCode = function(arrSecretCode){
  var i=0;
  for(i; i<arrSecretCode.length; i++){
    $('#secret-code #' + i).attr("class", "peg " + arrSecretCode[i].getColor());
  }
}
