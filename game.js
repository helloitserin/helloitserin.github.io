$(document).on("pagecreate","#firstgame",function(event){
  
var score=0;
var pic1 = document.getElementById("rock");
var pic2= document.getElementById("paper");
var pic3= document.getElementById("scissors");
var reset= document.getElementById("buttonone");
var test= document.getElementById ("test");
var clickapic= document.getElementById("clickapic");

//RANDOMIZES computer choice
function getCompChoice(){
	var choices=['rock','paper','scissors']
	var compChoice=choices[Math.floor(Math.random()*choices.length)];
	return compChoice;
}

$('#rock').on('tap', function(){
  var computerChoice = getCompChoice();
  
  if (computerChoice === "scissors") {
  score=score+1;
  test.innerHTML=score;
  clickapic.innerHTML = "You picked rock. Computer picked Scissors. You win!";
}

else if (computerChoice === "paper") {
score=score-1;
test.innerHTML=score;
  clickapic.innerHTML = "You picked rock. Computer picked Paper. You lose!";
}

else {
	score=score+0;
	test.innerHTML=score;
	clickapic.innerHTML = "It's a tie!";
}

});

$('#paper').on('tap', function(){
	var computerChoice = getCompChoice();

	if (computerChoice === "scissors"){
		score=score-1;
		test.innerHTML=score;
		clickapic.innerHTML = "You picked paper. Computer picked scissors. You lose!";
	}

else if (computerChoice ==="rock"){
		score=score+1;
		test.innerHTML=score;
		clickapic.innerHTML = "You picked paper. Computer picked rock. You win!";
}

else{
	score=score+0;
	test.innerHTML=score;
	clickapic.innerHTML = "it's a tie!";
}

});

$('#scissors').on('tap', function(){
	var computerChoice = getCompChoice();

	if (computerChoice === "paper") {
		score=score+1;
		test.innerHTML=score;
		clickapic.innerHTML = "You picked scissors. Computer picked paper. You win!";
	}

	else if (computerChoice === "rock") {
		score=score-1;
		test.innerHTML=score;
		clickapic.innerHTML = "You picked scissors. Computer picked rock. You lose!";
	}

	else{
		score=score+0;
		test.innerHTML=score;
		clickapic.innerHTML = "It's a tie.";
	}
	
});

reset.addEventListener('click', function(){
  score=score=0;
  test.innerHTML=score; 
  clickapic.innerHTML = "Click a picture."
});


});//closing bracket for ALL the JS on this page