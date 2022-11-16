// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector("button").onclick = count;
// ------------------------------------------------------------------ have to run only 1 function at a time
//     document.querySelector("button").onclick = subtract;
// })

let counter = 0;

function count() {
    counter++;
    document.querySelector("#counter").innerHTML = counter;
}

function subtract() {
    counter--;
    document.querySelector("#counter").innerHTML = counter;
}

