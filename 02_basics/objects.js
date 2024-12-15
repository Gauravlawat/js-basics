//singleton 

//objects literals
const mySym=Symbol("key1")

// Object.create makes singleton using constructor
const JsUser={
    name: "Gaurav",
    [mySym]: "mykey1", // symbol mneeds to define in square brackets
    age: 18,
    "location city": "jaipur", // if there is space bw key , then must use paranthesis
    "date of birth": "27 Dec 2003"
}
// access
// console.log(JsUser.age);
// console.log(JsUser["age"]); // all keys are strings so use paranthesis to access value at key
// console.log(JsUser["date of birth"]);
// console.log(JsUser["location city"]);
// console.log(JsUser[mySym]);
// console.log(typeof mySym);

JsUser.age=21 //ovewrite
// console.log(JsUser.age);

// Object.freeze(JsUser) //freezes all attributes in Jsuser
// JsUser.name="Soni" //no overwrite 
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello JS user")
}
JsUser.greeting2=function(){
    console.log(`hello JS user, ${this.name}`)
}
// console.log(JsUser.greeting); // shows undefined
console.log(JsUser.greeting()); // not a function yet as object is freezed

// name inclusion , add ${this.name} in function 
console.log(JsUser.greeting2());
