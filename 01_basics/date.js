let myDate =new Date()
// console.log(myDate); // time in miliseconds from 1970 till date
// console.log(myDate.toDateString()); // SAT Dec 14 2024
// console.log(myDate.toLocaleDateString()); // 12/14/2024
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// console.log(typeof(myDate));
let newDate = new Date(2023,0,23,20,5)
// console.log(newDate.toLocaleString());
let mynewDate=new Date("2023-01-15")
// console.log(mynewDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(mynewDate.getTime());
let newdate=new Date()
// console.log(newdate.getDate())

console.log(newDate.toLocaleString('default',{
    weekday: "long"
})) // ctrl + space to see various properties like weekday, timezone and also long narrow keywords 
