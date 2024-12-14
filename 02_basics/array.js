const arr =[1,3,2,4,true]
// console.log(arr[4])

const myarr=new Array(1,2,3,4,5)
// console.log(myarr[2]);

//methods
myarr.push(6)
myarr.pop()
// console.log(myarr);
myarr.unshift(-1) // -1 is the value 
// console.log(myarr); // insert at start index
myarr.shift(); //pop at start

// console.log(myarr.includes(3))
// console.log(myarr.indexOf(3));
const newarr=myarr.join()
// console.log(newarr)
// console.log(typeof(newarr))

console.log("a",myarr)

const myn1=myarr.slice(1,3) //myarr remains same
console.log(myn1)
console.log(myarr)
const myn2=myarr.splice(1,3) //myarr changed
console.log(myn2)
console.log(myarr)