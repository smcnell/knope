console.log("hey?")






var randomOne=""
function randomQuote(){
	var quotesArr= [
		{text: "Hey you."},
		{text: "What's up"},
		{text: "Your mom"},
		{text: "Hey hey heyyy"}
	]

	// console.log(quotesArr)
	randomOne= quotesArr[Math.floor(Math.random() * quotesArr.length)]
	console.log(randomOne)

}

function makeNewQuote(){
	console.log(randomOne)


	var myButton= document.getElementById("quoteButton");
	var myQuote= document.getElementById("quote").innerHTML="hey dear"

	console.log(myQuote)


	console.log("working")



}
