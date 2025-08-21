const participants = [
  {
    name: "Alice",
    age: 25,
    city: "Oslo"
  },
  {
    name: "Bob",
    age: 30,
    city: "Bergen"
  },
  {
    name: "Charlie",
    age: 28,
    city: "Trondheim"
  },
  {
    name: "Diana",
    age: 35,
    city: "Stavanger"
  }
];

// destructure participats, to show the "top3 winners" (basically the first 3 people in the array)
const [ winner, secondPlace, thirdPlace ] = participants


console.log(winner.name)
console.log("Second place: ",  secondPlace.name)
console.log("Second place: ",  thirdPlace.name)

// display only the name