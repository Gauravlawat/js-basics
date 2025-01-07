//ES6

// class User {
//     constructor(username,email,pass){
//         this.username=username;
//         this.email=email;
//         this.pass=pass
//     }
//     encryptPassword(){
//         return `${this.pass}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai=new User("chai","chai@mail.com","123")
// console.log(chai.encryptPassword()); //123abc
// console.log(chai.pass); // 123
// console.log(chai); // gives User as object
// console.log(chai.changeUsername()) //gives CHAI

// behind the scenes

function User(username,email,pass){
    this.username=username;
    this.email=email;
    this.pass=pass
}
User.prototype.encryptPassword=function(){
    return `${this.pass}abc`
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}
const tea=new User("tea","tea@mail.com","111")
console.log(tea.encryptPassword())
console.log(tea.changeUsername())
