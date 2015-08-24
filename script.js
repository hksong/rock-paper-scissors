document.addEventListener("DOMContentLoaded", start);

function start() {
	listenForMove();
	listenForReset();
}

var player = 0;
var computer = 0;
var choices = ["scissors", "rock", "paper"];

function listenForMove() {
	var moves = document.querySelectorAll(".moves");
	for (var i = 0; i < moves.length; i++) {
		moves[i].addEventListener("click", move);
	}
	// var moves = document.querySelectorAll(".moves");
	// moves = Array.prototype.slice.call(moves);
	// moves.forEach(function(el) {
	// 	el.addEventListener("click", move);
	// });
}

function move() {
	var cmove = cMove();
	var pmove = this.id;
	var win = choices[parseInt(this.querySelector("img").alt)];

	displayInfo("Computer", cmove);
	displayInfo("Player", pmove);

	if (cmove === this.id) {
		displayResult(2);
	}
	else if (cmove === win) {
		displayResult(0);
		player++;
	}
	else {
		displayResult(1);
		computer++;
	}
	updateScores();
}

function cMove() {
	return choices[Math.floor(Math.random()*3)];
}

function displayInfo(id, mv) {
	document.getElementById(id).innerText = id + " move: " + mv;
}

function displayResult(opt) {
	var result = document.getElementById("result");
	if (opt === 0) {
		result.innerText = "Player wins";
	}
	else if (opt === 1) {
		result.innerText = "Computer wins";
	}
	else {
		result.innerText = "Tie";
	}
}

function listenForReset() {
	document.getElementById("reset").addEventListener("click", function() {
		player = 0;
		computer = 0;
		updateScores();
	});
}

function updateScores() {
	document.getElementById("player").innerText = player;
	document.getElementById("computer").innerText = computer;
}