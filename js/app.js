// wait for the DOM to finish loading
$(document).ready(function() {
  console.log("Dom is loaded and ready!");
  // all code to manipulate the DOM
  // goes inside this function

  // givens for starting tic tac toe
  var playerTurn = 'X';
  console.log(playerTurn + " goes first.");

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

        // Check board to see if win conditions are satisfied

        // switch playerTurn value for next playerTurn
        if (playerTurn === 'X') {

          playerTurn = 'O';

        }
        else {
          playerTurn = 'X';
          }
        }
      })
    })

    $(".reset").on("click", function(){

      $(".box").each(function(){
        $(this).text("");
        playerTurn = 'X';

      })

    })

  })
//$('.box':has('X'))

// var oCheck = ['', '', '', '', '', '', '', '', '']
// var xCheck = ['', '', '', '', '', '', '', '', '']
//
// var winningCombos = [[$('.box').eq(0).text(), $('.box').eq(1).text(), $('.box').eq(2).text()],
//                 [$('.box').eq(3).text(), $('.box').eq(4).text(), $('.box').eq(5).text()],
//                 [$('.box').eq(6).text(), $('.box').eq(7).text(), $('.box').eq(8).text()],
//                 [$('.box').eq(0).text(), $('.box').eq(3).text(), $('.box').eq(6).text()],
//                 [$('.box').eq(1).text(), $('.box').eq(4).text(), $('.box').eq(7).text()],
//                 [$('.box').eq(2).text(), $('.box').eq(5).text(), $('.box').eq(8).text()],
//                 [$('.box').eq(0).text(), $('.box').eq(4).text(), $('.box').eq(8).text()],
//                 [$('.box').eq(2).text(), $('.box').eq(4).text(), $('.box').eq(6).text()]];
//   var winningCombos = [
//                 [0, 1, 2],
//                 [3, 4, 5],
//                 [6, 7, 8],
//                 [0, 3, 6],
//                 [1, 4, 7],
//                 [2, 5, 8],
//                 [0, 4, 8],
//                 [2, 4, 6]
//               ];
// var oWin = ["O", "O", "O"];
// var xWin = ["X", "X", "X"];
//
// function checkWin() {
//   for (var i = 0; i < winOrNot.length; i++) {
//     //This will just default to the if statement
//       if (winOrNot[i] === oWin || winOrNot[i] !== xWin) {
//         console.log("No winner!");
//     }
//       else {
//         if (winOrNot[i] === oWin) {
//           console.log("O wins!")
//         }
//         else {
//           console.log("X wins!");
//         }
//     }
//   }
// }
//
// var board = [{}
//
// ]
//

// winOrNot.forEach(function(){
//   if (winOrNot === oWin) {
//
//   }
//
// })


// var oWin = [[$('.box').eq(0).text('O'), $('.box').eq(1).text('O'), $('.box').eq(2).text('O')],
//                 [$('.box').eq(3).text('O'), $('.box').eq(4).text('O'), $('.box').eq(5).text('O')],
//                 [$('.box').eq(6).text('O'), $('.box').eq(7).text('O'), $('.box').eq(8).text('O')],
//                 [$('.box').eq(0).text('O'), $('.box').eq(3).text('O'), $('.box').eq(6).text('O')],
//                 [$('.box').eq(1).text('O'), $('.box').eq(4).text('O'), $('.box').eq(7).text('O')],
//                 [$('.box').eq(2).text('O'), $('.box').eq(5).text('O'), $('.box').eq(8).text('O')],
//                 [$('.box').eq(0).text('O'), $('.box').eq(4).text('O'), $('.box').eq(8).text('O')],
//                 [$('.box').eq(2).text('O'), $('.box').eq(4).text('O'), $('.box').eq(6).text('O')]];
// var xWin = [[$('.box').eq(0).text('X'), $('.box').eq(1).text('X'), $('.box').eq(2).text('X')],
//                 [$('.box').eq(3).text('X'), $('.box').eq(4).text('X'), $('.box').eq(5).text('X')],
//                 [$('.box').eq(6).text('X'), $('.box').eq(7).text('X'), $('.box').eq(8).text('X')],
//                 [$('.box').eq(0).text('X'), $('.box').eq(3).text('X'), $('.box').eq(6).text('X')],
//                 [$('.box').eq(1).text('X'), $('.box').eq(4).text('X'), $('.box').eq(7).text('X')],
//                 [$('.box').eq(2).text('X'), $('.box').eq(5).text('X'), $('.box').eq(8).text('X')],
//                 [$('.box').eq(0).text('X'), $('.box').eq(4).text('X'), $('.box').eq(8).text('X')],
//                 [$('.box').eq(2).text('X'), $('.box').eq(4).text('X'), $('.box').eq(6).text('X')]];

// var eachBox =
// function checkWin() {
//   for (var i = 0; i < winArray.length; i++) {
//     //Checks possible winning combinations vs string contents
//     $(winOrNoto).text()
//
//     if (winArray[i] !== oWin && winArray !== xWin) {
//       console.log("No winner.")
//     }
//     else {
//       if (winArray[i] === oWin) {
//         console.log("O Wins!")
//       }
//       else {
//         console.log("X wins!");
//       }
//     }
//   }
// }
