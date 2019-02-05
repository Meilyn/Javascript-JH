/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	//console.DIR = ffiche une liste interactive des propriétés de l'objet Javascript spécifié

	var img = document.getElementsByTagName('img')[0];
		
	img.addEventListener("mouseover", function () {
		//recupera el valor de Data-Hover
		let getAtt = img.getAttribute('data-hover');
		// remplacer la valeur de img pour changer
		img.attributes[0].value = getAtt;
		console.dir(img);

	}) 

})();
