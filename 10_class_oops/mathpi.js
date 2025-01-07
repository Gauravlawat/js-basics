
// console.log(Math.PI);// value 3.14
// Math.PI=5 // doesnot overwrite by doing this
// console.log(Math.PI); // same value 3.14

const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

//OUTPUT
/*{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  }
*/
const chai={
    name:"Adrak chai",
    price:240,
    isAvailable:true,
    orderChai: function () {
        console.log("No chai");
    }
}
// console.log(chai)
// console.log(Object.getOwnPropertyDescriptor(chai,"price"))
/* { value: 240, writable: true, enumerable: true, configurable: true } */
Object.defineProperty(chai,'price',{
    // writable: false,
    enumerable:false, //it will stop the iteration on chai for price property, price wont be shown in key value pair
    // configurable:false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"price"))
/* { value: 240, writable: false, enumerable: false, configurable: false } */ 

for (let [key,value] of Object.entries(chai)) {
    if(typeof value!='function'){
        console.log(`${key} : ${value}`);
    }  // if a key's value is not a function in object
}
