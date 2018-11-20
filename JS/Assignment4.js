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

function test3()
var a = Math.floor(Math.random() * (999)) + 1;

while (true) {

  var b = prompt("Enter a number in between 1 and 1000");

  if (b == a) {
    alert("You're right!");
    break; // Stops loop
  } else if (!b) {
    alert("The Correct Answer was: " + a); //Shows correct answer
    break;
  } else {
    alert("Incorrect! Try again!");
  }
}
