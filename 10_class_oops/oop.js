const user={
    username:"Gaurav",
    logincount:8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got details of user");
        // console.log(`Username: ${this.username}`);
        console.log(this); // provides everything about current context , here user object
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());

function User(username,loginCount,isLogin){
    this.username = username;
    this.loginCount=loginCount
    this.isLogin=isLogin 
    this.greeting=function(){
        console.log(`Welcome user: ${this.username}`);
        
    }
    return this
    // return this doesnt need to write as implicitly defined 
}
const userOne=new User("GAurav",8,true)
const userTwo=new User("Lawat",5,false)
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor)  // instcance of can be used also
