let myToyBox = ["teddy", "dinosaur", "robot"];

const newToys = ["car", "cat", "house"]

// merge two arrays, using "spread operator"
myToyBox = [...myToyBox, ...newToys]


//console.log(myToyBox)

// function takes two numbers, and prints the sum
function calculateV1(a, b) {
    console.log(a + b)
}

// function takes an unspecifeid amount of numbers, and prints the sum
// should be allowed to be called with any number of arguments
// example usage:
// calculateV2(2,2,2) // prints 6
// calcalateV2(1,1) // prints 2

// example here the spread operator allows our function to receive an unspecified number of arguments
function calculateV2(...numbers) {

    for (const number of numbers) {
        console.log(number)
    }
}

// 

calculateV2(1,2)