// //if
// const isLogin=true
// if(isLogin){
//     //execute if condition is true
// }

// <,>,<=,>=,==,!=, ===(check datatype also)

// if(2=="2"){
//     // console.log("executed"); //printed on terminal
// }
// if(2==="2"){
//     // console.log("not executed"); //not printed on terminal
// }
// score=200
// if(score>100){
//     let power="fly"
//     console.log(`Power is: ${power}`)
// }
// console.log(`Power is: ${power}`) //power variable is within block scope not outside, make sure to use let or const
// const balance=100
// // if (balance > 50) console.log("test1"),console.log("test2"); //implicit scope, can use comma to write multiple console lines
// if(balance < 50){
//     console.log("less than 50")
// }
// else if(balance<75){
//     console.log("less than 75");
// }
// else{
//     console.log("greater than 75")
// }
const userLogin=true
const debitCard=true
const LoginGoogle=false
const LoginEmail=true
if(userLogin && debitCard && 2<3){
    console.log(("Allowed to buy"));
}
if(LoginEmail || LoginGoogle){
    console.log("user logged in");
    
}
