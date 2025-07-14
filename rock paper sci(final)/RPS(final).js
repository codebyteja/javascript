 let score=/*{
         wins :0,
         loose :0,
         tie : 0,
      };*/
//console.log(localStorage.getItem("score"))//this is json
//convert json to js object
JSON.parse(localStorage.getItem("score"))
if(!score){
    score ={
        wins:0,
        loose:0,
        tie:0,
    };
}
updatescore()


 function playGame(playermove){
         let computerguess = isComputerMoveIs();
  result=''
if(playermove === 'scissors'){
     
if(computerguess === 'rock'){
   result='you loose'
}else if (computerguess === 'paper'){
   result='you win'
}else if(computerguess === 'scissors'){
  result='tie'
}
}else if(playermove === 'rock'){
    
if(computerguess === 'rock'){
   result='tie'
}else if (computerguess === 'paper'){
   result='you loose'
}else if(computerguess === 'scissors'){
  result='you win'
}   
}else if(playermove === 'paper'){
if(computerguess === 'rock'){
   result='you win'
}else if (computerguess === 'paper'){
   result='tie'
}else if(computerguess === 'scissors'){
  result='you loose'
}
}if(result === 'you win' ){
   score.wins += 1

}else if(result === 'you loose'){
   score.loose += 1
}else if(result === 'tie'){
   score.tie+= 1
}
//only string type can be stored in localstorage.
localStorage.setItem("score",JSON.stringify(score))//we stord data i localstorage 
//here localitem name is store ,now in 2nd keep object name which has been reated in the button place.
//we cant keep direct obect ,we should conver js to JSON.

document.querySelector('.js-result').innerHTML =result
document.querySelector('.js-moves').innerHTML =` you <img class="moveimg" src="images/${playermove}-emoji.png" alt=""> 
,<img class="moveimg" src="images/${computerguess}-emoji.png" alt=""> computer</p>`
updatescore()



}
function updatescore(){
   document.querySelector(
   '.js-button'
).innerHTML = ` win:${score.wins} loose:${score.loose} tie:${score.tie}`


}

        function isComputerMoveIs(){
           let randomNumber= Math.random();
           let  computerguess=''
    if(randomNumber >= 0 && randomNumber < 1/3){
      computerguess='rock'
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
         computerguess='paper'
    }else if(randomNumber >= 2/3 && randomNumber < 1){
     computerguess='scissors'
    }
    console.log(computerguess)
    return computerguess
        }