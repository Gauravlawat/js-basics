let myName="gaurav     " // 5 spaces given
// console.log(myName.length); // shows 11

//console.log(myName.truelength); need to build this prototype

let myHeros=["thor","flash"]
let heroPower={
    thor:"hammer",
    flash:"speed",
    getFlashpower: function(){
        console.log(`flash has ${this.flash}`);
    }
}
Object.prototype.Gaurav=function(){  // this makes Gaurav() available to all heirarchy in objects like string,array,function etc.
    console.log("Gaurav() is present in all objects");
}
Array.prototype.lawat=function(){
    console.log("lawat() is presnt only in array");
    
}
// heroPower.Gaurav()
// myHeros.Gaurav()

// myHeros.lawat()
// heroPower.lawat() // error 

//inheritance
const User={
    name:"Chai",
    email:"chai@google.com"
}

const Teacher={
    makevideo:true
}
const Teachingsupport={
    isAvailable: false
}
const TAsupport={
    makeAsssignment:"JS notes",
    fullTime:true,
    __proto__:Teachingsupport
}
Teacher.__proto__=User  //teacher can access property of user

//modern syntax
Object.setPrototypeOf(Teachingsupport,Teacher) // teaching support can inhert teacher property

let anotherUsername="ChaiaurCode   "

String.prototype.truelength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log((`true length is: ${this.trim().length}`));
}
anotherUsername.truelength();
"soniJi ".truelength()
