const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)  // reduce funtion iterates on array and accumulates all values to accumulator acc, initial value should be given as here 0 at end for acc

const myTotal=myNums.reduce( (acc,currval) => acc+currval , 0)
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:3999
    },
    {
        itemName:"web dev course",
        price:4999
    },
    {
        itemName:"data science course",
        price:5999
    },
]

const myBill=shoppingCart.reduce( (acc,item) => acc+item.price,0) //item refers to each object in cart
console.log(myBill);
