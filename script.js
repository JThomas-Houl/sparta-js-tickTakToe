/* Tick Tac Toe
MVP: - let the user click on to the boxes and be able to add a X or O
	 - be able to win the game: you need 3 in the same row to win
	 - first step be able to win in a single line i.e. topRow_0_2, middleRow_3_5 bottomRow_6_8
	 - 
*/


//variables:

var reset = $(".reset");
var playerTurn = $(".playerTurn");
var Turns = 9;



var turnX = "X";
var turnO = "O";




//Functions:

$(function(event){ //checks if the dom is ready can run before the html
	console.log("DOM is ready"); 
	document.oncontextmenu = function() {return false;}; //stops the context menus from poping up 

	$("td").on("click", function(event){ //click on top row
		for( var i = 0; i < Turns; i++){

			if(i % 2 == 0){
				$(this).html("0"); //puts o in a square

			}
		};
	});

	$("td").mousedown(function(e){ //right click funtion that add x e can be used for event
    if( e.button == 2 ) { 
      $(this).html("X"); 
      return false; 
    } 
    return true; 
  }); 


	$("#reset").on("click", function(e){ //clears the board
		$("td").html("");
	});

	

});














