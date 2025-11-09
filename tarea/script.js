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

document.addEventListener("DOMContentLoaded", function() {
    console.log("Ya mismo aprendo con suficiente practica")
    const container = document.querySelector(".container")
    createMatrix(5, container, 2, 3)
})