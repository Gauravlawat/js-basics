// primitive
// 7: string num bool null undef symbol bigint

const outTemp=null;
const id=Symbol('123')
const id2=Symbol('123')
// console.log(id);
// console.log(id2);
// console.log(id==id2);

const bigNumber=33333333333333333224n
// console.log(typeof bigNumber);

// reference type
//  array,objects,functions
 const arr=["name","place","thing"];
 let myObj={
        name: "gaurav",
        age: 22,
 }
const myFunction=function(){
    // console.log("hello");
}
// console.log(typeof outTemp);
// console.log(typeof myFunction);

// stack(primitive) heap(non pri or reference type)\

let myName="gaurav"
let another=myName
another="lawat"
console.log(myName)
console.log(another) //name remains same but another name changes as in stack

let userOne={
    email: "gaurav@gmail.com",
    pass: "12345"
}
let userTwo=userOne

userTwo.email="lawat@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
