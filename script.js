console.log("Hola Mundo Soy Franklin")
var a = "1"
var b = 2
var c = a + b
console.log("el resultado es :",c)
function addClass(containerDiv, className) {
    console.log(containerDiv.classList)
    containerDiv.classList.add(className)
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Ya mismo aprendo con suficiente practica")
    const containerDivs = document.querySelectorAll(".content")
    console.log(containerDivs)
    for (i= 0; i < containerDivs.length; i++) {
        addClass(containerDivs[i], "Frank")
    }
    containerDivs.forEach((ElNombreQueTuQuieras) => {
        addClass(ElNombreQueTuQuieras, "Frank")
   })
   
})
