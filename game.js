$(document).on("pagecreate","#firstgame",function(event){
  


var score=0;
var pic1 = document.getElementById("rock");
var pic2= document.getElementById("paper");
var pic3= document.getElementById("scissors");
var reset= document.getElementById("buttonone");
var test= document.getElementById ("test");
var clickapic= document.getElementById("clickapic");

pic1.addEventListener('click', function(){
  score=score+1;
  test.innerHTML=score;
  clickapic.innerHTML = "You picked rock. Computer picked scissors. You win!";
});

pic2.addEventListener('click', function(){
  score=score-1;
  test.innerHTML=score;
  clickapic.innerHTML = "You picked scissors. Computer picked rock. You lose!";
});

pic3.addEventListener('click',function(){
	score=score+0;
	test.innerHTML=score
	clickapic.innerHTML = "You and the Computer both picked paper. It's a tie."
});

reset.addEventListener('click', function(){
  score=score=0;
  test.innerHTML=score; 
  clickapic.innerHTML = "Click a picture."
});


});//closing bracket for ALL the JS on this page