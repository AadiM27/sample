 function test1(){
  var i;
    i = prompt ("Insert an integer for Fizzbuzz", "0")

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

function test3(){
  var random = (Math.random());
  var multiply = random * 1000;
  var round = Math.round(multiply);
  var number = round;
    for(var c = 0; c < 5; c ++)

    var guess = window.prompt ("Guess what number i'm thinking off, 1 - 1000");
    if(guess < number)
  {
    console.log("higher + c");
  }
    else if (guess > number)
  {
    console.log("lower + c");
  }
    else
  {
    console.log("correct the number was + number");
  }
}