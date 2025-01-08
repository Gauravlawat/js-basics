const User={
    _email:"G@gl.com",
    _password:"abc",

    get email(){
        return this._email.toLocaleUpperCase()
    },
    set email(value){
        this._email=value
    }
}

const tea= Object.create(User)  // tea new object in refernce of User object created
console.log(tea.email);  //works fine output is G@GL.COM uppercase value
console.log(tea._email);  //also works fine output is G@gl.com original value
