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

function GTN(){
  var random = (Math.random());
  var multiply = random * 1000;
  var round = Math.round(multiply);
  var number = round;
  var allowedGuesses = 1000
  console.log(number);
  
  function integer(){
    for(var c = 0; c < 5; c ++) {
      var guess = window.prompt("Guess what number i'm thinking of, 1 to 1000, q to quit");
      parseInt(guess);
      if (guess == "Q") {
        break
      }
      else if (guess < number) {
        alert("too low try again");
        integer()
      }
      else if (guess > number) {
        alert("too high try again");
        integer()
      }
      else if (guess == number) {
        alert("You guessed it right!");
        break;
      }
      else {
        break;
      }
    }
  }
}

function Encryption(){
  var plaintext = prompt ("Enter message to encrypt");
  var ciphertext = ("");

  for (var i = 0; i < plaintext.length; i ++){
  ciphertext += plaintext[i] + "ABC";
}
  
  console.log(ciphertext) 


}