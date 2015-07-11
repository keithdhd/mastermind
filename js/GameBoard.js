function GameBoard(){
  this._pegs = [];
  this._currentGuess = [];
  this._guesses = [];
}

GameBoard.prototype.bindListeners = function(){
  //get all the DOM elements we need

}

GameBoard.prototype.buildBoard = function(){
  //loop 10 times and append guess-holes-template to guess-container
  var htmlToInsert = "";
  var i=0;
  for(i; i<10; i++){
    var guessUl = document.createElement('ul'); 
    $(guessUl).append($("#guess-holes-template").html());
    $(guessUl).attr("id", i);
    $(guessUl).attr("class", "guess-holes");

    $("#guesses-container").append($(guessUl));
  }

  $(".guess-holes").children().each( function(innerInd){
    $(this).attr("id", innerInd);
  });
}

GameBoard.prototype.addPeg = function(peg, pegArray){
  //addPeg should add a peg object to the current guess array
  //and then add the pegArray to the _pegs array
}
