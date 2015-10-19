# Mastermind
WDI Project 1 London

![Mastermind](https://raw.githubusercontent.com/keithdhd/mastermind/master/images/screen-shot2.png "Mastermind")

##Classic Mastermind game

1. Mastermind creates a secret combination of colored pegs. 
2. Guess that combination in 8 or fewer tries to win.
3. For each guess a black score indicates that one of your pegs is the right color in the right position.
4. A white score indicates that one of your pegs is the right color in the wrong position.

[Play it here!](https://js-mastermind.herokuapp.com)

![Mastermind](https://raw.githubusercontent.com/keithdhd/mastermind/master/images/screen-shot1.png "Mastermind")(https://js-mastermind.herokuapp.com)

##Approach / How it works

1. Start on the bottom row.
2. Drag and drop a peg to a hole - doesn't matter which hole
3. Complete the 4 peg row to get feedback from the Mastermind
4. Based on the feedback, make an informed guess in the next row above.
5. Your goal is to get 4 black feedbacks to win!
6. If you win (or lose by not guessing within 8 rows) the secret code will be revealed


##The build
-  HTML, CSS, JavaScript, jQuery and jQueryUI were used
-  jQueryUI draggable and droppable functions were used for the pegs
  
##Approach Taken
- Object oriented JavaScript
- Designed class diagram with responsibilities and properties.
- Added functions to the classes with "prototype".
- Ended up with Mastermind, Gameboard and Peg classes based on real life objects
- There turned out to be no need for a Player class. Who needs players!
  
##Issues that arose
  - How can I minimise HTML but still produce 8 rows of gueses?
    - Use a hidden template and dynamically generate rows with JS
  - How can I create random pegs?
    - Create a Peg class and objects from that and push onto an array
  - How can I allow users to add pegs to the board?
    - Used jQueryUI to add a draggable handler to the Peg objects.

##Improvements  
- In retrospect it would be a better UX if the player could just click on a peg and it would add to the board in the correct row in the first availalbe position. They could then click again to remove it.
- Initially I had pegs represented in the HTML as DIVS within LIs. This was unnecessary
so changed pegs to LIs
- It's not fully responsive. Well not at all really! The box cover is absolutely positioned so the screen has to be a certain size to look good. I would start mobile first next time and drop the draggable functionality.
  
  
##Interesting points
- Doing a getColor() on a Peg object did not return a === value to another Peg.getColor(). Huh?!?
- Algorithm for determining feedback pegs. Because my array is an array of Peg objects and not colors I had to  create an ordered array from the pegs that were in the array. It's an array of pegs so that the player can add       a peg to any hole in any order. It would probably be better to have a simple array of colors. But then the user wouldn't be able to add a peg to any hole in the row. They'd have to do it sequentially.
- Create the animated box with jQuery animate().
  
