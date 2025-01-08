class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}soni` //only this._password get change to uppercase not soni as set is applied on only this._password
    }
    set password(value){
        this._password=value.toUpperCase()// if we use same variable password in get or set, then stack overflow due to race b/w constructor and get or set.
    }   
}

const gaurav = new User("gaurav@mail.com","abc")
console.log(gaurav.password); //ABCsoni gets printed
console.log(gaurav.email); //GAURAV@MAIL.COM gets printed
