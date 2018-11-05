function test1(){
  for (var i=1; i<=100; i++) {

    if (i%15===0) {
        alert("FizzBuzz");
    } else if (i%3===0) {
        alert("Fizz");
    } else if (i%5===0) {
        alert("Buzz");
    } else {
        alert(i)
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
    alert(chr);
    chr='';    
  }
}
