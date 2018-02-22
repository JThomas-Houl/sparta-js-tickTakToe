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

var topRow = $(".topRow_0_2");
var middleRow = $(".middleRow_3_5");
var bottomRow = $(".bottomRow_6_8");


//Functions:

$(function(event){ //checks if the dom is ready can run before the html
	console.log("DOM is ready"); 

	$("td").on("click", function(event){ //click on top row
		//console.log($(this).attr("data-num", "X")) //player click event debug print to console.log

		console.log($(this).html("0"));
		//topRow.css("background-color", "blue");

		//('#your-button-id').attr('data-cmd');

		// for(var i = 0; i >= 9; i++){ //nedd to add the 
		// 	console.log(	 + i);
		// } 


	});

});













