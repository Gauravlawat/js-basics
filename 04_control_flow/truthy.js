// const userEmail= "gaurav@gmail.com"
// const userEmail=""  //empty string equals false value, will print no user mail
// const userEmail=[]  // empty array equals true vale, will print got user mail
// if(userEmail){
//     console.log("Got user mail");
// }
// else{
//     console.log("no user mail");
// }

//falsy values

//false, 0, -0, BigInt(0n), "", null, undefined

//truthy values
 
// "0","false"," ",[],{},function(){}(empty function is also truthy value)

// if(userEmail.length === 0){
//     console.log(("Array is empty"));
// }

// const emptyObj={}

// if(Object.keys(emptyObj).length === 0){  //Object.keys return array of keys of object defined, and length gets size of array
//     console.log("object is empty");
// }

//Nullish Coalescing operator (??): null undefined
let val1;
// val1=5 ?? 10 //shows 5 in val1
// console.log(val1);
// val1=null ?? 10 //shows 10 in null1
// val1=undefined ?? 15 shows 15 in val1
val1=null ?? 10 ?? 5 //10 shows up as it came before 5
console.log(val1);

// Terniary operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");
// first statement is true statement as per condition(less than 80 check) and 2nd is else statement(more than 80 is else statement)


