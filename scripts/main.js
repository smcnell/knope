console.log("hey?")






var randomOne=""


function makeNewQuote(){

	function randomQuote(){
		var quotesArr= [
			{text: "sweet"},
			{text: "innocent"},
			{text: "pretty"},
			{text: "beautiful"},
			{text: "cool"},
			{text: "talented"},
			{text: "powerful"},
			{text: "worthy"},
			{text: "amazing"},
			{text: "cunning"},
			{text: "pliable"},
			{text: "genius"},
			{text: "sophisticated"},
			{text: "naive"},
			{text: "poetic"},
			{text: "brilliant"



			}
		]


		var quotesArr2= [
			{text: "tropical"},
			{text: "noble"},
			{text: "rule-breaking"},
			{text: "thoughtful"},
			{text: "stupid-hot"},
			{text: "unicorn"},
			{text: "multi-ethnic"},
			{text: "doll-footed"},
			{text: "glowing"},
			{text: "powerful"



			}
		]

		var quotesArr3= [
			{text: "fish"},
			{text: "ox"},
			{text: "spinster"},
			{text: "moth"},
			{text: "heifer"},
			{text: "sunfish"},
			{text: "brain"},
			{text: "sun-goddess"},
			{text: "land-mermaid"},

			{text: "newborn baby"



			}
		]

		// console.log(quotesArr)
		randomOne= quotesArr[Math.floor(Math.random() * quotesArr.length)]
		console.log(randomOne)

		randomTwo= quotesArr2[Math.floor(Math.random() * quotesArr2.length)]
		console.log(randomTwo)

		randomThree= quotesArr3[Math.floor(Math.random() * quotesArr3.length)]
		console.log(randomThree)

	}



randomQuote()
	var myButton= document.getElementById("quoteButton");
	var myQuoteInner= document.getElementById("quote")
	myQuoteInner.innerHTML= randomOne.text + " "+ randomTwo.text + " "+ randomThree.text







}
