class User{
    constructor(username){
       this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,pass){
        super(username) // use super to directly access other object variables in another object
        this.email=email
        this.pass=pass
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai= new Teacher("chai","chai@gmail.com","123123")
// chai.addCourse()

const masalaChai = new User("masalaChai")

// masalaChai.logMe()
// masalaChai.addCourse() // throws error
// chai.logMe() // works fine as Teacher inherited properties of User

// console.log(chai===masalaChai); //false 
// console.log(chai === Teacher) //false

console.log(User instanceof Teacher) // false
console.log(Teacher instanceof User) // false
console.log(chai instanceof Teacher) // true
console.log(chai instanceof User) // true
console.log(masalaChai instanceof User) // true
console.log(masalaChai instanceof Teacher) // false

