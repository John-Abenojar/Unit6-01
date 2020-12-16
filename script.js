var number=prompt("Enter a number from 1-6")
if(number=="2"){
  alert ("correct!");
}
else {
  alert ("wrong!!");
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
