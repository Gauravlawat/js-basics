//  const tinderUser = new Object() makes singleton object
const tinderUser={} // make non singleton object

tinderUser.id="123abc"
tinderUser.name="Lawat"
tinderUser.isLogin = false
// console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"gaurav",
            lastname:"soni"
        }
    }
}
// console.log(regularUser.fullname); //shows object userfullname and its contents
// console.log(regularUser.fullname?.userfullname.lastname); // ? shows if fullname exits then only move forward to usefullname and lastname

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// console.log(obj3) shows to objects in one object
// const obj3=Object.assign({},obj1,obj2) //should give an empty object also treated as target
const obj3={...obj1,...obj2}
// console.log(obj3) 
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]
// users[1].email // to access email of object in array
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //every key converts to array

console.log(tinderUser.hasOwnProperty('isLogin')); //tells whether key exist or not
console.log(tinderUser.hasOwnProperty('Lawat')) //values not accessed