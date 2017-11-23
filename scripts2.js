function numThing(){
var userNum = document.getElementById("userNum").value;

for(i=0;i<=userNum;i++){

  console.log(i);
  document.getElementById("para").innerHTML += "<br />" + i;
}
}
