function test1(){
	
    var fName = prompt("Hey what's your name?");
    var myColour = prompt("Pick a colour, " + fName);
	

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
    var age = prompt("how old are you?");


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



