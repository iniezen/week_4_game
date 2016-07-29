

// func3 compares goalnumber to gamescore,
 // if =, then win++, if gamescore>, then loss++, if win or loss, relaunch

 var goalnumber;
 var gamescore=0;
 var crystal1;
 var crystal2;
 var crystal3;
 var crystal4;
 var wins=0;
 var losses=0;


// func startGame generate rdm values for goalnumber between 19-120 
// & crystals between 1-12.  It also updates page elements
function startGame(){

 	goalnumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
 	$('#goalnumber').html(goalnumber)


 	crystal1 = Math.floor(Math.random() * 12) + 1; 

 	crystal2 = Math.floor(Math.random() * 12) + 1; 

 	crystal3 = Math.floor(Math.random() * 12) + 1; 

 	crystal4 = Math.floor(Math.random() * 12) + 1; 

}

startGame()
console.log(goalnumber)
console.log(crystal1)
console.log(crystal2)
console.log(crystal3)
console.log(crystal4)
$('#wins').html('Wins: '+wins)
$('#losses').html('Losses: '+wins)
$('#winstatus').html("Total Score")
$('#gamescore').html(gamescore)

// func2 adds value of crystals to gamescore


$('.img-responsive').on('click', function(){
gamescore=gamescore + parseInt($(this).data('num'));
$('#gamescore').html(gamescore)
console.log(gamescore)

})




    