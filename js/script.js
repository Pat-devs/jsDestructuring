const person = {
  name: "Alice",
  age: 25,
  city: "Oslo"
};

const { name, age, city, country = "Norway" } = person

console.log(country)