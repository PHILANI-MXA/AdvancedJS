// function hello() {
//     document.querySelector("h1").innerHTML = "Hello!";
// }


function hello() {
   const headings = document.querySelectorAll("h1");
   for(const heading of headings){
    heading.innerHTML = "Hello!"
   }
}

