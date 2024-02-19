const allCards = document.getElementsByClassName('card')
for(let i = 0; i < allCards.length; i++){
    allCards[i].classList.add('flip')          
}
setTimeout(function(){
    for(let i = 0; i < allCards.length; i++){
    allCards[i].classList.remove('flip')          
  }
},2000)


function flip(element){
	element.classList.add("flip");
    setTimeout(function(){
        match()
    }, 1000)
}


function match(){
   const flippedCards = document.getElementsByClassName("flip");
   if(flippedCards.length != 2){
    return;
   }
   const firstCardContent = flippedCards[0].getElementsByClassName("back")[0].innerHTML;
   const secondCardContent = flippedCards[1].getElementsByClassName("back")[0].innerHTML;
   if(firstCardContent == secondCardContent){
        flippedCards[0].classList.add('opacity');
        flippedCards[1].classList.add('opacity');
   }    
    flippedCards[0].classList.remove('flip')
    flippedCards[0].classList.remove('flip')
    checkGameOver();
}
function checkGameOver(){
    const hiddenCards = document.getElementsByClassName("opacity").length;
    const cards = document.getElementsByClassName("card").length;  
    if(cards == hiddenCards){
        alert("You won!")
        window.location.reload();
    }
}