function test1(){
	//variables
    var fName = prompt("Hey what's your name?");
    var myColour = prompt("Pick a colour, " + fName);
	//

    if(myColour == "red"){
        alert("ha. this guy likes red");
    } 
    else if(myColour == "green"){
        alert("ah, green. He's alright.");
    }
    else if(myColour == "yellow"){
        alert("het him something yellow.");
    }
    else {
        alert("that's not a color");
    }
}

function test2(){
    var age=prompt("how old are you?");


    if(age < 14){
        alert("GET OUUUUTTT");

    }
    else if(age == 14){
        alert("14 is a good age");

    }
    else if(age > 14){
        alert("YOU ARE IIIINNNN");

    }
    else{
        alert("Not a valid age");
    }
}

function test3(){
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

function test4(){
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

