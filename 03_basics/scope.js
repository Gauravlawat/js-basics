var c=300
//let a=100 higher priority than block scope of 'let'
if(true){    //{} is block scope and outside is global scope
    let a =10
    const b=20
    console.log("INNER: ",a)
    var c=30 //later declaration has priority over earlier in 'var'
}
 

//console.log(a) not printed 
// console.log(b) not printed
console.log(c) //30 gets printed not 300
let a=100 //let in global scope has priority whether declared earlier or after
console.log(a);
const Array=[1,2,3,4]
for (let i=0;i<Array.length;i++){
    console.log(Array[i])
}


 
