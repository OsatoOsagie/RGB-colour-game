var numSquares= 6;
//an array of colours randomly generated
var colours = generateRandomColours(numSquares);
//slecting all the square divs
var squares = document.querySelectorAll(".square");
//colour picked as the colour to win the game
var pickedColour= pickRandomColour();
//colour displayed in the h1
var colourDisplay= document.querySelector("#ColourDisplay");
//message displayed colour selected in right or wrong 
var messageDisplay= document.querySelector("#message");
//selecting the h1 in the hmtl
var h1= document.querySelector("h1");
//selecting the reset button
 var resetButton= document.querySelector("#reset");
 //selecting all the buttons in the mode class from html
var modeButtons= document.querySelectorAll(".mode");

for (var i = 0; i <  modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function(){
    console.log(modeButtons[i]);
  	      modeButtons[0].classList.remove("selected");
  	      modeButtons[1].classList.remove("selected");
         this.classList.add("selected");
    //turnery operator, very similar to if statement 
    this.textContent === "Easy" ? numSquares= 3: numSquares=6; 
     reset();

  });
}

function reset(){
colours = generateRandomColours(numSquares);
//pick new random colour from array
pickedColour = pickRandomColour();
//change colour display to match picked colour
colourDisplay.textContent= pickedColour;
messageDisplay.textContent="";
resetButton.textContent= "New colours"

//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given colour
       if (colours[i]) {
       	squares[i].style.display= "block"
squares[i].style.backgroundColor= colours[i];
       } else {
       	squares[i].style.display = "none";
       }
		
	}
h1.style.backgroundColor= "steelblue";

}

// //event listener for easy button
// easyBtn.addEventListener("click", function(){
// this.classList.add("selected");
// hardBtn.classList.remove("selected");
// numSquares=3;
// colours = generateRandomColours(numSquares);
// pickedColour= pickRandomColour();
// colourDisplay.textContent= pickedColour;
// //
// for(var i=0; i< squares.length; i++){
// 	if(colours[i]){
// 		squares[i].style.backgroundColor= colours[i];
// 	}else{
// 		squares[i].style.display="none";
// 	}
// }

// })
// //event listener for easy button
// hardBtn.addEventListener("click", function(){
// 	this.classList.add("selected");
// easyBtn.classList.remove("selected");
// numSquares =6;
// colours = generateRandomColours(numSquares);
// pickedColour= pickRandomColour();
// colourDisplay.textContent= pickedColour;

// for(var i=0; i< squares.length; i++){
	
// 		squares[i].style.backgroundColor= colours[i];

// 		squares[i].style.display="block";
// }


// })

resetButton.addEventListener("click", function(){
reset();
})



colourDisplay.textContent= pickedColour;

for(var i = 0; i < squares.length; i++){
	//add initial colours to squares
	squares[i].style.backgroundColor= colours[i];

   //add click listeners to squares 
   squares[i].addEventListener("click", function(){
   	//grab colour of clicked square
   	var clickedColour= this.style.backgroundColor;

   	//compare colour to pickedColour
   	if(clickedColour === pickedColour){
      messageDisplay.textContent= "correct!";
      changeColours(clickedColour);
      h1.style.backgroundColor= clickedColour;
      resetButton.textContent= "Play Again?"

   	}else{
   		//fade out colour to match background colour
   		this.style.backgroundColor= "#232323";
   		// changeColours("#232323");
   		messageDisplay.textContent= "Try again";

   	}

   });
}
//a function to set all the squares to the same colour when the game is won
function changeColours(colour){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given colour
		squares[i].style.backgroundColor= colour;
	}
}
//a function to pick a winning colour at random
function pickRandomColour(){
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

//a function to generate random colours 
function generateRandomColours(num){
//make an array
var arr= [];
//repeat num times 
for (var i= 0; i< num; i++){
	arr.push(randomColor());
}
return arr;
}

//a function to compose a random rgb colour
function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
		var g = Math.floor(Math.random() * 256);

	//pick a "blue" from 0-255
		var b = Math.floor(Math.random() * 256);
       return "rgb(" + r + ", " + g + ", " + b + ")";
}


