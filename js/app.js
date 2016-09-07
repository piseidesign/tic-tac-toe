// Whole-script strict
"use strict";

$(document).ready(function() {
  var alertBox = $('#message');
  var checkBox = $('table tr td');
  var userTurn = "X";
  var xCounter = 0;
  var oCounter = 0;
  var tiesCounter = 0;
  var playerX = $('#player-x');
  var playerO = $('#player-o');
  var numberTies = $('#number-ties');


  $(checkBox).click(function(e){
    if ($(this).children("span").length > 0) {
      alertBox.html("Already picked. Select an empty box.");
    } else {
      alertBox.html("");
      $(this).html("<span>" + userTurn + "</span>");
      if (userTurn == "X") {
        userTurn = "O";
      } else {
        userTurn = "X";
      }
    }

    var oWin = "OOO";
    var xWin = "XXX";
    //rows
    var topRow = $('#top td span').text();
    var midRow = $('#mid td span').text();
    var bottomRow = $('#bottom td span').text();
    //rows
    var firstCol = $('.first-col').text();
    var secondCol = $('.second-col').text();
    var thirdCol = $('.third-col').text();
    //diagonal
    var leftDiag = $('.left-diag').text();
    var rightDiag = $('.right-diag').text();

    //Check if O win
    if (topRow == oWin ||
        midRow == oWin ||
        bottomRow == oWin ||
        firstCol == oWin ||
        secondCol == oWin ||
        thirdCol == oWin ||
        leftDiag == oWin ||
        rightDiag == oWin) {
      oCounter++;
      alertBox.html("<span>O</span> WINNER!").fadeIn();
      playerO.html(oCounter);

    } //Check if X win
    else if (topRow == xWin ||
        midRow == xWin ||
        bottomRow == xWin ||
        firstCol == xWin ||
        secondCol == xWin ||
        thirdCol == xWin ||
        leftDiag == xWin ||
        rightDiag == xWin) {
      xCounter++;
      alertBox.html("<span>X</span> WINNER!").fadeIn();
      playerX.html(xCounter);
    }
    else {
      var tdEmpty = $('table td:empty').length;
      if (tdEmpty == 0) {
        tiesCounter++;
        alertBox.html("IT'S A DRAW!").fadeIn();
        numberTies.html(tiesCounter);
      }
    }

    $('#new-game').click(function() {
      alertBox.empty().hide("slow");
      checkBox.empty();
    });

  })
})
