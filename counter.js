let counter = 0;

function count() {
    counter++;
    document.querySelector("#counter").innerHTML = counter;
}

function sub() {
    counter--;
    document.querySelector("#counter").innerHTML = counter;
}