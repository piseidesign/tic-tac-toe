// Whole-script strict
"use strict";

$(document).ready(function() {
  var alertBox = $('#message');
  var selectBox = $('table tr td');
  var userTurn = "X";
  var xCounter = 0;
  var oCounter = 0;
  var tiesCounter = 0;
  var playerX = $('#player-x');
  var playerO = $('#player-o');
  var numberTies = $('#number-ties');

  $(selectBox).click(function(e){
    if ($(this).children("span").length > 0) {
      alertBox.html("Already picked.<br> Select an empty box.<br> <a href='#' id='ok' class='ok-link'>OK</a>").fadeIn();
      $('#ok').click(function(){
        alertBox.fadeOut("fast");
      })
    } else {
      if (userTurn == "X") {
        userTurn = "O";
        $(this).html("<span class='color-light'>" + userTurn + "</span>");
      } else {
        userTurn = "X";
        $(this).html("<span>" + userTurn + "</span>");
      }
    }

    var oWin = "OOO";
    var xWin = "XXX";
    //rows
    var topRow = $('#top td span');
    var midRow = $('#mid td span');
    var bottomRow = $('#bottom td span');
    //rows
    var firstCol = $('.first-col');
    var secondCol = $('.second-col');
    var thirdCol = $('.third-col');
    //diagonal
    var leftDiag = $('.left-diag');
    var rightDiag = $('.right-diag');

    //Check if O win
    if (topRow.text() == oWin) {
      var flashElements = topRow;
      flashMessageO();
    } else if (midRow.text() == oWin) {
      var flashElements = midRow;
      flashMessageO();
    } else if (bottomRow.text() == oWin) {
      var flashElements = bottomRow;
      flashMessageO();
    } else if (firstCol.text() == oWin) {
      var flashElements = firstCol;
      flashMessageO();
    } else if (secondCol.text() == oWin) {
      var flashElements = secondCol;
      flashMessageO();
    } else if (thirdCol.text() == oWin) {
      var flashElements = thirdCol;
      flashMessageO();
    } else if (leftDiag.text() == oWin) {
      var flashElements = leftDiag;
      flashMessageO();
    } else if (rightDiag.text() == oWin) {
      var flashElements = rightDiag;
      flashMessageO();
    }
 //Check if X win
    else if (topRow.text() == xWin) {
      var flashElements = topRow;
      flashMessageX();
    } else if (midRow.text() == xWin) {
      var flashElements = midRow;
      flashMessageX();
    } else if (bottomRow.text() == xWin) {
      var flashElements = bottomRow;
      flashMessageX();
    } else if (firstCol.text() == xWin) {
      var flashElements = firstCol;
      flashMessageX();
    } else if (secondCol.text() == xWin) {
      var flashElements = secondCol;
      flashMessageX();
    } else if (thirdCol.text() == xWin) {
      var flashElements = thirdCol;
      flashMessageX();
    } else if (leftDiag.text() == xWin) {
      var flashElements = leftDiag;
      flashMessageX();
    } else if (rightDiag.text() == xWin) {
      var flashElements = rightDiag;
      flashMessageX();
    }
    //Check if it's a draw
    var tdEmpty = $('table td:empty').length;
    if (tdEmpty == 0) {
      alertBox.html("<span class='color-dark'>X</span><span class='color-light'>O</span><p>IT'S A DRAW!</p>").fadeIn('4000');
      tiesCounter++;
      numberTies.html(tiesCounter);
    }
    // Starts a new game
    $('#new-game').click(newGame);

    //functions
    function newGame() {
      alertBox.empty().hide("slow");
      selectBox.empty().removeClass('off');
    }
    //Three in a row starts flashing
    function winnerFlash(element) {
      selectBox.addClass('off');
      element.fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    }
    function flashMessageO() {
      winnerFlash(flashElements);
      alertBox.html("<span class='color-light'>O</span> <p>WINNER!</p>").delay(800).fadeIn('slow');
      oCounter++;
      playerO.html(oCounter);
    }
    function flashMessageX() {
      winnerFlash(flashElements);
      alertBox.html("<span class='color-dark'>X</span> <p>WINNER!</p>").delay(800).fadeIn('slow');
      xCounter++;
      playerX.html(xCounter);
    }

  })
})
