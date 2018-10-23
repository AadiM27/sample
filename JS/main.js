function test1(){
	var fName = prompt("Hey what's your name?")
	var myColour = prompt("Pick a colour, + fName")

	if(myColour == "red"){
		console.log("ha, this guy likes red");
	}
	else if(myColour == "green"){
        console.log("ah, green. He's alright");
	}
	else if(myColour == "yellow"){
		console.log("ah, yellow. That's trash");
	}
}


function test2(){
	var age = prompt("How old are you? And don't worry, I'm not a creep.")

	if(age < 14){
		alert("That's not too old");
	}
	else if(age == 14){
		alert("14 is a good age");
	}
	else if(age > 14){
		alert("What??");
	}
	else{
		alert("Not a valid answer");
	}
}

