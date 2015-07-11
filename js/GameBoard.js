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
    htmlToInsert += $("#guess-holes-template").html();;
  }
  $("#guesses-container").html(htmlToInsert);

  $(".guess-holes").each( function(ind){
    $(this).attr("id", ind);

    $(this).children().each( function(innerInd){
      $(this).attr("id", innerInd);
    })
  });
}

GameBoard.prototype.addPeg = function(peg, pegArray){
  //addPeg should add a peg object to the current guess array
  //and then add the pegArray to the _pegs array
}
