class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}
const gaurav=new User("gaurav")
// console.log(gaurav.createId()) thorws error after writing static

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email //super always use before this otherwise error throws
    }
}

const soni=new Teacher("soni","soni@mail.com")

soni.logMe()
console.log(soni.email)