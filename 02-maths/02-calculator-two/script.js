/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function calculatrice() {
    // to get the value of an input: document.getElementById("element-id").value
    var opOne = document.getElementById('op-one').value;
    var opTwo = document.getElementById('op-two').value;
    var addition ;
    var sustraction;
    var division;
    var multiplication;
    var res;

    
    var performOperation = function(operator) {

       
       switch (calculatrice){
       		case addition:
       		res = parseInt(opOne) + parseInt(opTwo);

       		document.getElementById('resultat').innerHTML = " Votre Result est: " + "<br>" + res;
       		break;
       		default:
       		document.getElementById('resultat').innerHTML = " pas operations: " ;
       		break;
        };
      };
    };    
     
    // Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
    //     $btn.addEventListener("click", function() {
    //         performOperation($btn.id);
        
    //     });
    // });
