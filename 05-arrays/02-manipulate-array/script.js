/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function fruit(){

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
     
        document.getElementById('run').addEventListener("click", function(){
        fruits.pop(); //Enlever 1ér Élément
        fruits.shift(); //Enlever dérnier Élément
        fruits.unshift("Banana"); // Ajoute élement à la 1ér place.
        fruits.push("Kiwi"); // Ajoute élément à la dérnier place.

        document.getElementById('resultat').innerHTML = fruits + "<br>";    
    }); 
       
};
fruit()
