function addClass(containerDiv, className) {
    console.log(containerDiv.classList)
    containerDiv.classList.add(className)
}

function createMatrix(dimension, container, divisorFizz, divisorBazz) {
    let counter = 1 

    for (let i = 0; i < dimension; i++) {
        const div = document.createElement("div")
        addClass(div, "demo")

        for (let j = 0; j < dimension; j++) {
            const content = document.createElement("div")
            addClass(content, "content")
            content.textContent = counter

            
            fizzbazz(divisorFizz, divisorBazz, content, counter)

            div.appendChild(content)
            counter++
        }

        container.appendChild(div)
    }
}
// function applyFizzBuzz(divisor,square,number) {
//     fizz(divisor,square,number)
    //bazz(divisor,square,number)
//}



// function fizz(divisor, square, number) {
//     if ( number% divisor == 0){
//         addClass(square, "fizz")
//     }


// }
// function buzz(divisor ,square, number) {
//     if (number % divisor == 0 ){
//         addClass(square, "buzz")
//     }
// }
function fizzbazz(divisorFizz, divisorBazz, square, number) {
    if (number % divisorFizz === 0 && number % divisorBazz === 0) {
        addClass(square, "fizzbazz") 
    } 
    else if (number % divisorFizz === 0) {
        addClass(square, "fizz")
    } 
    else if (number % divisorBazz === 0) {
        addClass(square, "bazz")
    }
}

function buttonClicked(){
    console.log("me Hicieron clickcitooo")

const dimensionInput = document.getElementById("dimension")
const fizzInput = document.getElementById("fizz-divisor")
const bazzInput = document.getElementById("bazz-divisor")

const dimensionValue= parseInt(dimensionInput.value)
const fizzValue= parseInt(fizzInput.value)
const bazzValue= parseInt(bazzInput.value)

console.log(`El valor de la dimension es:${dimensionValue}`)
console.log(`El valor de fizz es:${fizzValue}`)
console.log(`El valor de bazz es:${bazzValue}`)

const matrixContainer = document.getElementById("matrix-container");
createMatrix(dimensionValue, matrixContainer, fizzValue, bazzValue);
}

document.addEventListener("DOMContentLoaded", function() {

    const btnGenerate = document.getElementById("Generate-button")
    btnGenerate.addEventListener("click", buttonClicked)


 

});





