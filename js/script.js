const toyBox = ["teddy", "dinosaur", "robot"];

const container = document.getElementById("main-container")

// function creates a button and returns it
function createButton(text) {
    const buttonElement = document.createElement("button")
    buttonElement.textContent = text

    return buttonElement
}

// we can use the map method, and use the spread operator on it directly inside the .append argument
container.append(...toyBox.map(toy => createButton(toy)))
