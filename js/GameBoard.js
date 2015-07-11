function GameBoard(){
  this._pegs = [];
  this._currentGuess = [];
  this._guesses = [];
}

GameBoard.prototype.bindListeners = function(){

  $(".peg").draggable({
    //cancel: "a.ui-icon", // clicking an icon won't initiate dragging
    revert: "invalid", // when not dropped, the item will revert back to its initial position
    containment: "document",
    helper: "clone",
    cursor: "move"
  });

  $(".hole").droppable({
    accept: ".peg"
  });
}

GameBoard.prototype.buildBoard = function(){
  //loop x times and append guess-holes-template to guess-container
  var guessUl;
  var i=0;
  for(i; i<8; i++){
    guessUl = document.createElement('ul'); 
    $(guessUl).append($("#guess-holes-template").html());
    $(guessUl).attr("id", i);
    $(guessUl).attr("class", "guess-holes");

    $("#guesses-container").append($(guessUl));
  }
  //add ids to each li child
  $(".guess-holes").children().each( function(index){
    $(this).attr("id", index);
  });
}

GameBoard.prototype.addPeg = function(peg, pegArray){
  //addPeg should add a peg object to the current guess array
}

GameBoard.prototype.addSecretCode = function(arrSecretCode){
  var i=0;
  for(i; i<arrSecretCode.length; i++){
    $('#secret-code #' + i).attr("class", "peg " + arrSecretCode[i].getColor());
  }
}
