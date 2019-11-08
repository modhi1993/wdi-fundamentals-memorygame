//console.log("Up and running!");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);
alert('Hello, friends.');
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
function checkForMatch(){
		if(cardsInPlay[0] === cardsInPlay[1]){
		 console.log("You found a match!");}
        else{console.log("Sorry, try again.");}

}
function flipCard(cardId){
checkForMatch();
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
//if (cardsInPlay.length === 2){}



}
flipCard(0);
flipCard(2);


