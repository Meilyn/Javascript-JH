/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function friday() {

	var friDay = document.getElementById('year').value;
	var d = new Date();
	var month = d.getMonth();
	var year = d.getFullYear();
	var friday = 5;
	var day = 13;
	var today = d.getDate();
	var d = d.getDay(); 
	var result;
	console.log( friday, day);

	

	for (month = 0; month < 12 ; month++) {
		console.log(d, day);
		console.log(friday, today);
		if (friDay = year) {
			if (day == d && friday == today) {
				result = "Mois " + month;

			document.getElementById('resultat').innerHTML += result;  
		}	
	}

	}

};

