/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function square() {

	var res;
	
    document.getElementById("run").addEventListener("click", function() {
    	for (var i = 0; i < 22; i++) {
    		if (i % 2 === 0) {
    			res = Math.pow(i, 2);
    		alert(res);
    		}
   		}	
    });
};    
square(res);
