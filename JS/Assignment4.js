 function test1(){
  var i;
    i = window.prompt ("Insert an integer for Fizzbuzz", "0")

    if (i%15===0) {
        document.getElementById("fizz").innerHTML = ("FizzBuzz");
        document.getElementById("buzz").innerHTML = ("FizzBuzz");
    } 
    else if (i%3===0) {
        document.getElementById("fizz").innerHTML = ("FizzBuzz");
        document.getElementById("buzz").innerHTML = ("Fizz");
    } 
    else if (i%5===0) {
        document.getElementById("fizz").innerHTML = ("FizzBuzz");
        document.getElementById("buzz").innerHTML = ("Buzz");
    } else {
        document.getElementById("fizz").innerHTML = ("FizzBuzz");
        document.getElementById("buzz").innerHTML = ("None");
    }  
}

function test2(){
  var x,y,chr;
  x,y,chr = prompt ("Insert an integer. Check the console for results",)
   for(x=1; x <=6; x++)
  {

   for (y=1; y < x; y++)
  {
    chr=chr+("*");        
  }
    console.log(chr);
    chr='';    
  }
}

function yourGuess()
{
var guess1 = document.getElementById("guess").value;
var guess2 = 501;
var newGuess = Math.floor(guess2);
var n = 0;
guess1, guess2, newGuess, n = prompt ("guess")
if (newGuess < guess1) {
    yourReturn = "Your are too low!!!"
}
else {
    if (newGuess > guess1) {
        yourReturn = "You are too high!!!"
    }
    else {
        yourReturn = "Correct, You are the winner!!!"
    }       
}
}
