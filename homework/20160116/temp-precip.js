var temperature = 90;
var precipitation = "raining";
var indoors = false;

if(indoors) {
	console.log("Time to swim!");	
} else {
	if (temperature === 80) {
		console.log("The temperature is 80 degrees.");
	} else if (temperature > 80 && precipitation !== "raining" && precipitation !== "snowing") {
		console.log("Time to swim!");	
	} else {
		console.log("Not a good time to swim.");
	} 	
}