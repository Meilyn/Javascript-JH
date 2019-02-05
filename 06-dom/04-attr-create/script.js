/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	//Recupération de la balise "source" & attribute data-image
   var imgR = document.getElementById('source').getAttribute("data-image");
   // Créate une balise image dans la balise Target
   var divparent = document.getElementById('material');
   var divchild = document.createElement('img');
   divchild.setAttribute("src", imgR);
   
   //insert appendchild
   document.getElementById('target').appendChild(divchild);

   //supprime un element du document
   var element = document.getElementById('source');
   element.parentNode.removeChild(element);


})();

