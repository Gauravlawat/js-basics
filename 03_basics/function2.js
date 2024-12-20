function calculatePrice(...num1){  // ... is rest operator gives array of all attributes
    return num1
}
// console.log(calculatePrice(200,400,500))
function calculateCartPrice(val1,val2,...num1){   //start values goes to val1,val2
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000)) //only 500,2000 are returned in num1 values
const user={
    object: "Rice",
    price: 50
}
function handleObject(anyobject) {
    console.log(`Product is ${anyobject.object} and price is ${anyobject.price}`)
}
// handleObject(user) //no need to make object before calling function
handleObject({
    object:"Pasta",
    price:70
})

const myarr=[200,100,500]
function return2value(getArray){
    return getArray[1]     // dont return myarr[1] as its generic value always write attribute of function as here getArray[1]
}
console.log(return2value(myarr)); // getArray gets myarr and return index1 value
