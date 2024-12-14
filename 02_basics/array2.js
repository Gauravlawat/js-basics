const marvel=["shakti","man"]
const dc=["bat","man"]

// marvel.push(dc) // changes the original array
// console.log(marvel);

// console.log(marvel[2][1]) // to access man at index one in 3rd element at index 2

const newarr=marvel.concat(dc) //merge all elements and stores in new array
console.log(newarr)
//spread operator ...
const all_heros=[...marvel,...dc]
console.log(all_heros)

const another=[1,2,[3,4],5,[6,[7,8]],9,10]
console.log(another.flat(Infinity)) // flat removes depth in array

console.log(Array.isArray("gaurav")) //tells whether array or not
console.log(Array.from("gaurav")); //converts string to array
console.log(Array.from({name: "gaurav"})) // doesn;t show array as we need to specify key or value ,gives empty array

let score1=100
let score2=200
console.log(Array.of(score1,score2))
