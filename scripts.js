
var myVar = setInterval(myTimer, 1000);
var t = 0;
function myTimer() {
 
t+=1;

  document.getElementById("demo").innerHTML = 'TIMER : ' +  t;
  
  if (t == 301) {
  	alert("Wow,5 mins passed, you got some strong perseverence in you");
  }
   
};

   /*** FUNCTION TO GET RANDOM COLOR ***/
 /*
 function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * 6)];
  }
  return color;
}
*/


function getImage(){
  var myPix = new Array("kennen/1.jpg","kennen/2.jpg","kennen/3.jpg","kennen/4.jpg","kennen/5.jpg","kennen/6.jpg","kennen/7.jpg","kennen/8.jpg","kennen/9.jpg","kennen/10.jpg","kennen/11.jpg","kennen/12.jpg","kennen/13.jpg","kennen/14.jpg","kennen/15.jpg","kennen/16.jpg");
  var randomNum = Math.floor(Math.random() * myPix.length);
  var rez = "url" + "(" + "'" + myPix[randomNum] + "'" + ")";

  return rez;

}


function setRandomColor() {
 // document.getElementById("btn1").style.backgroundImage = getImage();
  $("#btn1").css("background-image", getImage());
  $("#btn1").css("background-size", "cover");
} 

function setRandomColor2() {
  $("#btn2").css("background-image", getImage());
  $("#btn2").css("background-size", "cover");
}

function setRandomColor3() {
  $("#btn3").css("background-image", getImage());
  $("#btn3").css("background-size", "cover");
}

function setRandomColor4() {
  $("#btn4").css("background-image", getImage());
  $("#btn4").css("background-size", "cover");
}

function setRandomColor5() {
  $("#btn5").css("background-image", getImage());
  $("#btn5").css("background-size", "cover");
}

function setRandomColor6() {
  $("#btn6").css("background-image", getImage());
  $("#btn6").css("background-size", "cover");
}

function setRandomColor7() {
  $("#btn7").css("background-image", getImage());
  $("#btn7").css("background-size", "cover");
}

function setRandomColor8() {
  $("#btn8").css("background-image", getImage());
  $("#btn8").css("background-size", "cover");
}

function setRandomColor9() {
  $("#btn9").css("background-image", getImage());
  $("#btn9").css("background-size", "cover");
}

function setRandomColor10() {
  $("#btn10").css("background-image", getImage());
  $("#btn10").css("background-size", "cover");
}

function setRandomColor11() {
  $("#btn11").css("background-image", getImage());
  $("#btn11").css("background-size", "cover");
}

function setRandomColor12() {
  $("#btn12").css("background-image", getImage());
  $("#btn12").css("background-size", "cover");
}

function setRandomColor13() {
  $("#btn13").css("background-image", getImage());
  $("#btn13").css("background-size", "cover");
}

function setRandomColor14() {
  $("#btn14").css("background-image", getImage());
  $("#btn14").css("background-size", "cover");
}

function setRandomColor15() {
  $("#btn15").css("background-image", getImage());
  $("#btn15").css("background-size", "cover");
}

function setRandomColor16() {
  $("#btn16").css("background-image", getImage());
  $("#btn16").css("background-size", "cover");
}



function checkImage(){
var a = $('#btn1').css('background-image');
var getIndex = a.indexOf('kennen/1.jpg');
var a = $('#btn2').css('background-image');
var getIndex2 = a.indexOf('kennen/2.jpg');
var a = $('#btn3').css('background-image');
var getIndex3 = a.indexOf('kennen/3.jpg');
var a = $('#btn4').css('background-image');
var getIndex4 = a.indexOf('kennen/4.jpg');
var a = $('#btn5').css('background-image');
var getIndex5 = a.indexOf('kennen/5.jpg');
var a = $('#btn6').css('background-image');
var getIndex6 = a.indexOf('kennen/6.jpg');
var a = $('#btn7').css('background-image');
var getIndex7 = a.indexOf('kennen/7.jpg');
var a = $('#btn8').css('background-image');
var getIndex8 = a.indexOf('kennen/8.jpg'); 
var a = $('#btn9').css('background-image');
var getIndex9 = a.indexOf('kennen/9.jpg');
var a = $('#btn10').css('background-image');
var getIndex10 = a.indexOf('kennen/10.jpg');
var a = $('#btn11').css('background-image');
var getIndex11 = a.indexOf('kennen/11.jpg');
var a = $('#btn12').css('background-image');
var getIndex12 = a.indexOf('kennen/12.jpg'); 
var a = $('#btn13').css('background-image');
var getIndex13 = a.indexOf('kennen/13.jpg');
var a = $('#btn14').css('background-image');
var getIndex14 = a.indexOf('kennen/14.jpg');
var a = $('#btn15').css('background-image');
var getIndex15 = a.indexOf('kennen/15.jpg');
var a = $('#btn16').css('background-image');
var getIndex16 = a.indexOf('kennen/16.jpg');     //indexOf() is used, for checking the absolute image URLs

if(getIndex!=-1 
      && 
   getIndex2!=-1 
      && 
   getIndex3!=-1 
      && 
   getIndex4!=-1
      && 
   getIndex5!=-1 
      && 
   getIndex6!=-1 
      && 
   getIndex7!=-1
      && 
   getIndex8!=-1 
      && 
   getIndex9!=-1 
      && 
   getIndex10!=-1
      && 
   getIndex11!=-1 
      && 
   getIndex12!=-1 
      && 
   getIndex13!=-1
      && 
   getIndex14!=-1 
      && 
   getIndex15!=-1 
      && 
   getIndex16!=-1){

    alert('Congrats');
    $("#fireworks").css("opacity","1");
    $("#fireworks").css("left","50%");
    $("#fireworks").css("top","25%");



}

}




