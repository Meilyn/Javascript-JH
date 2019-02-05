/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    
    // to get the value of an input: document.getElementById("element-id").value
    var num = document.getElementById('number').value;
    var result = 1;
    var i = 2;

    document.getElementById("run").addEventListener("click", function() {
    	while (num < i);
    };
};
})();
// factorial(total);

// document.getElementById("run").addEventListener("click", function() {
//     	for (var i = 0; i < 22; i++) {
//     		if (i % 2 === 0) {
//     			res = Math.pow(i, 2);
//     		alert(res);
//     		}