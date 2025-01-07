function Setusername(username){
    //complex DB calls
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    // Setusername(username) as soon as the function called its execution context is deleted along with all variables like username which cant be accessed further 
    Setusername.call(this,username) // use this keyword 'call' to call one function in another function and give 'this' to save the execution context of Setusername 
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@b.com","123")
console.log(chai)