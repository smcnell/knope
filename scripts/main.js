console.log("hey?")

var randomResult= Math.floor((Math.random() * 10) + 1);
console.log(randomResult)

function changeColor(){
	var x= document.getElementById("blankbutton")

	if (randomResult >=8){
		x.style.backgroundColor="green"
	} else {
		x.style.backgroundColor="red"
	}

}


// <a class="test" name="Name 1"></a>
// <a class="test" name="Name 2"></a>
// <a class="test" name="Name 3"></a>
//
// // javascript
// var elements = document.getElementsByClassName("test");
// var names = '';
// for(var i=0; i<elements.length; i++) {
//     names += elements[i].name;
// }
// document.write(names);
