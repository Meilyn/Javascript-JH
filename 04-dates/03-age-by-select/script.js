/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function calC() {

 	document.getElementById('run').addEventListener("click", function() {

	var d = new Date();
	var m = d.getMonth();
    console.log(m);
	var a = d.getFullYear();
	var day = d.getDay();

        
    var jour = document.getElementById('dob-day').value;
    var mois = document.getElementById('dob-month').value;
    var annee = document.getElementById('dob-year').value;
    var age = a - annee;
        console.log(mois);
    if (m = mois ){
    	if (day > jour) {
            console.log(age);
    		document.getElementById('resultat').innerHTML = "Vous avez :" + "<br>" + age + " " + "ans";
    	}
    	else {
            console.log('d');
    		document.getElementById('resultat').innerHTML = "Vous avez :" + "<br>" + (age -1) + " " + "ans";
    	}
    }
});
};

calC();
