let person = {
    name: "Alex",
    age: 25
}

person = { ...person, city: "Oslo" }

const { age, ...allOtherProperties } = person 

console.log(age)

console.log(allOtherProperties)