/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var t = document.getElementsByClassName('target');
    t[0].innerHTML = "owned";
    t[1].innerHTML = "owned";
    t[2].innerHTML = "owned";
    t[3].innerHTML = "owned";
    t[4].innerHTML = "owned";

    console.log(t);
    // t.innerHTML = "owned";

})();
