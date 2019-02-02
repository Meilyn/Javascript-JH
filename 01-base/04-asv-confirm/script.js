/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

})();

let age = prompt('Veuillez introduire votre âge!');
let sexe = prompt('Votre Sexe');
let ville = prompt('Votre ville ');
let message = "";
	
if (confirm("Veuillez confirmer vos coordonnées" + "\n" + "Votre âge:" + age + "\n" + "Votre Sexe " + sexe + "\n" + "Votre Ville " + ville + " ")) {
	message = "Merci";
}	
else {
	message = "Oops! Veuillez recomencer";
	document.location.reload(true);
}
alert(message);