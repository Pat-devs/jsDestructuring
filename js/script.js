const toyBox = ["teddy", "dinosaur", "robot"];

const container = document.getElementById("main-container")

// function creates a button and returns it
function createButton(text) {
    const buttonElement = document.createElement("button")
    buttonElement.textContent = text

    return buttonElement
}

// use map method to "transform" array elemtns into html-elements 
const toyElements = toyBox.map(toy => {
    return createButton(toy)
})

// the document.append method can take dom elements as arguemnts, but not an array
// here we use (...) spread operator to "unpack" all elements
container.append(...toyElements)