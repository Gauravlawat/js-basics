function mulby5(num) {
    return num*5
}

mulby5.power=2
console.log(mulby5(5));
console.log(mulby5.power);
console.log(mulby5.prototype)

function createUser(username,price){
    this.username=username
    this.price=price
}

createUser.prototype.increament=function(){
    this.price++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.price}`)
}
const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

chai.printMe()