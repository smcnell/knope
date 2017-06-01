console.log("hey?")






var randomOne=""


function makeNewQuote(){

	function randomQuote(){
		var quotesArr= [
			{text: "The mind is just like a muscle - the more you exercise it, the stronger it gets and the more it can expand."},
			{text: "Fixed mindset worries in the nest and the growth mindset dances on the edge."},
			{text: "Becoming is better than being."},
			{text: "Picture your brain forming new connections as you meet the challenge and learn. Keep on going."},
			{text: "Do not judge me by my successess, judge me by how many times I fell down and got back up again."},
			{text: "It is not that I am so smart, it is just that I stay with problems longer."},
			{text: "To avoid criticism, do nothing, say nothing, be nothing."},
			{text: "You've only failed if you've given up."



			}
		]

		// console.log(quotesArr)
		randomOne= quotesArr[Math.floor(Math.random() * quotesArr.length)]
		console.log(randomOne)

	}



	console.log(randomOne)

randomQuote()
	var myButton= document.getElementById("quoteButton");
	var myQuoteInner= document.getElementById("quote")
	myQuoteInner.innerHTML='"' + randomOne.text + '"'







}
