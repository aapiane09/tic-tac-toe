// wait for the DOM to finish loading
$(document).ready(function() {
  console.log("Dom is loaded and ready!");
  // all code to manipulate the DOM
  // goes inside this function

  // givens for starting tic tac toe
  var playerTurn = 'X';
  console.log(playerTurn);

  // grab all divs as an array-like object and iterate
  $('.box').each(function (){

    // assign event listener to all divs using keyword this
    $(this).on("click", function(){

      //Check if div html is empty
      if($(this).html() !== ""){
        alert("Box is full! Try again!");

        }
      else {
        // if it is empty then assign current player value
        console.log("Player Turn is " + playerTurn);
        $(this).text(playerTurn);

        // switch playerTurn value for next playerTurn
        if (playerTurn === 'X') {

          playerTurn = 'O';
        }
        else {
          playerTurn = 'X';
          }
        }
        checkWin();
      })
    })

    $(".reset").on("click", function(){

      $(".box").each(function(){
        $(this).text("");
        playerTurn = 'X';

      })

    })

  })

var winArray = [[$('.box').eq(0).text(), $('.box').eq(1).text(), $('.box').eq(2).text()],
                [$('.box').eq(3).text(), $('.box').eq(4).text(), $('.box').eq(5).text()],
                [$('.box').eq(6).text(), $('.box').eq(7).text(), $('.box').eq(8).text()],
                [$('.box').eq(0).text(), $('.box').eq(3).text(), $('.box').eq(6).text()],
                [$('.box').eq(1).text(), $('.box').eq(4).text(), $('.box').eq(7).text()],
                [$('.box').eq(2).text(), $('.box').eq(5).text(), $('.box').eq(8).text()],
                [$('.box').eq(0).text(), $('.box').eq(4).text(), $('.box').eq(8).text()],
                [$('.box').eq(2).text(), $('.box').eq(4).text(), $('.box').eq(6).text()]];
var oWin = [[$('.box').eq(0).text('O'), $('.box').eq(1).text('O'), $('.box').eq(2).text('O')],
                [$('.box').eq(3).text('O'), $('.box').eq(4).text('O'), $('.box').eq(5).text('O')],
                [$('.box').eq(6).text('O'), $('.box').eq(7).text('O'), $('.box').eq(8).text('O')],
                [$('.box').eq(0).text('O'), $('.box').eq(3).text('O'), $('.box').eq(6).text('O')],
                [$('.box').eq(1).text('O'), $('.box').eq(4).text('O'), $('.box').eq(7).text('O')],
                [$('.box').eq(2).text('O'), $('.box').eq(5).text('O'), $('.box').eq(8).text('O')],
                [$('.box').eq(0).text('O'), $('.box').eq(4).text('O'), $('.box').eq(8).text('O')],
                [$('.box').eq(2).text('O'), $('.box').eq(4).text('O'), $('.box').eq(6).text('O')]];
var xWin = [[$('.box').eq(0).text('X'), $('.box').eq(1).text('X'), $('.box').eq(2).text('X')],
                [$('.box').eq(3).text('X'), $('.box').eq(4).text('X'), $('.box').eq(5).text('X')],
                [$('.box').eq(6).text('X'), $('.box').eq(7).text('X'), $('.box').eq(8).text('X')],
                [$('.box').eq(0).text('X'), $('.box').eq(3).text('X'), $('.box').eq(6).text('X')],
                [$('.box').eq(1).text('X'), $('.box').eq(4).text('X'), $('.box').eq(7).text('X')],
                [$('.box').eq(2).text('X'), $('.box').eq(5).text('X'), $('.box').eq(8).text('X')],
                [$('.box').eq(0).text('X'), $('.box').eq(4).text('X'), $('.box').eq(8).text('X')],
                [$('.box').eq(2).text('X'), $('.box').eq(4).text('X'), $('.box').eq(6).text('X')]];

function checkWin() {
  for (var i = 0; i < winArray.length; i++) {
    //Checks possible winning combinations vs string contents
    if (winArray[i] !== oWin && winArray !== xWin) {
      console.log("No winner.")
    }
    else {
      if (winArray[i] === oWin) {
        console.log("O Wins!")
      }
      else {
        console.log("X wins!");
      }
    }
  }
}

// var oWin = ["o", "o", "o"];
// var xWin = ["x", "x", "x"];
