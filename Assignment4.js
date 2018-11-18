 function test1(){
  for (var i=1; i<=100; i++) {

    if (i%15===0) {
        console.log("FizzBuzz");
    } else if (i%3===0) {
        console.log("Fizz");
    } else if (i%5===0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
  }
}

function test2(){
  var x,y,chr;
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
