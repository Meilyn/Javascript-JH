/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function chanColor() {

    var reCup = document.getElementById('color').value;
    // var colores = ["red","yellow","blue"];

    
    document.getElementById('run').addEventListener("click",function() {

    	switch(reCup){
    		case "rouge":
    		document.body.style.backgroundColor = "red";
    		break;
    		case "vert":
    		document.body.style.backgroundColor = "green";
    		break;
    		case "blue":
    		document.body.style.backgroundColor = "blue";
    		break;
    		case "jaune":
    		document.body.style.backgroundColor = "yellow";
    		break;
    		case "noir":
    		document.body.style.backgroundColor = "black";
    		break;
    		case "rose":
    		document.body.style.backgroundColor = "pink";
    		break;
    		default:
    		document.body.style.backgroundColor = "initial";
    		document.getElementById('p').innerHTML = "Veuillez choisir un couleur valide!";

    	}
    });
};
// chanColor(res);
