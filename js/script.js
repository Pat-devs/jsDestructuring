const person = {
    name: "Alex",
    age: 25
}

const { age, ...allOtherProperties } = person 

console.log(age)

console.log(allOtherProperties)