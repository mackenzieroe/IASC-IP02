var colourArray = new Array();
colourArray = ["RED", "GREEN", "BLUE", "YELLOW"];

var colour="";

function getColour(){

  var colourNum = Math.round(Math.random()*3)

  colour=String(colourArray[colourNum]);

  document.getElementById('output').innerHTML=colourArray[colourNum];

  setTimeout(function(){document.getElementById('output').innerHTML="";},1000);

}

function pushButton(userColour){

if(colour == userColour){
document.getElementById('output').innerHTML="CORRECT!";
setTimeout(getColour(), 2000);

}
else{
  document.getElementById('output').innerHTML="GAME OVER!";
}

}
