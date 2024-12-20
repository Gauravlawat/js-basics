const user={
    username:"soni",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`) //this refiers to current context
        console.log(this)
    }

}
// user.welcomeMessage()
user.username="Gaurav" //context or values changed
// user.welcomeMessage()
// console.log(this) //gives empty object {} in node,dino environment
//but this gives window object in browser environment
// function chai(){
//     let username="soni"
//     console.log(this.username) //gives undefined as this works only in object not in functions
// }
// chai()

// const chai=function(){
//     let username="soni"
//     console.log(this.username)
// }
// chai() //also a way to define function but this also gives undefined
//arrow function//
const chai=() => {  //same as function replaced by =>
    let username="soni"
    console.log(this.username)
    console.log(this); //gives empty object
}
// chai()

// const addTwo =(num1,num2) => {
//     return (num1+num2)
// }
// const addTwo =(num1,num2) => (num1+num2) //curly braces requires return but paranthesis don't reqire return command
// const addTwo =(num1,num2) => {username: "gaurav"} //objects should be enclosed in paranthesis to return value
const addTwo =(num1,num2) => ({username: "gaurav"})
console.log(addTwo(3,5))

const myarr=[2,3,5,6]
// myarr.forEach(()=>())