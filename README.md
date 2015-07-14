# Mastermind
WDI Project 1 London

explanations of the technologies used, the approach taken, installation instructions, unsolved problems

Mastermind creates a secret combination of colored pegs. Guess that combination in 8 or fewer tries to win.
For each guess a black score indicates that one of your pegs is the right color in the right position.
A white score indicates that one of your pegs is the right color in the wrong position.

Technologies Used:
  HTML, CSS, JavaScript
Libraries used:
  JQuery, jQueryUI
  
Approach Taken:
  Object oriented JavScript
  Designed class diagram with responsibilities and properties.
  Ended up with Mastermind, Gameboard and Peg classes based on real life objects
  There turned out to be no need for a Player class.
  
Issues that arised:
  How can I minimise HTML but still produce 8 rows of gueses?
    - Use a hidden template and dynamically generate rows with JS
  How can I create random pegs?
    - Create a Peg class and objects from that and push onto an array
  How can I allow users to add pegs to the board?
    - Used JQueryUI to add a draggable handler to the Peg objects.
      In retrospect it would be a better UX if the player could just
      click on a peg and it would add to the board
  Initially I had pegs represented in the HTML as DIVS within LIs. This was unnecessary
  so changed pegs to LIs.
  
  
  Interesting points: 
    - Doing a getColor() on a Peg object did not return a === value to another Peg.getColor(). Huh?!?
    - Algorithm for determining feedback pegs. Because my array is an array of Peg objects and not colors I had to         create an ordered array from the pegs that were in the array. It's an array of pegs so that the player can add       a peg to any hole in any order.
    - Create the animated box with JQuery animate().
  
