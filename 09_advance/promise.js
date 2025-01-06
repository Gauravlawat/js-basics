const promiseOne = new Promise(function(resolve,reject){
    //Do an async task like DB calls,cryptography,network
    setTimeout(function(){
        console.log("Async task complete")
        resolve() //link resolve with .then otherwise promise consumed will not show
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
}) //shows async task complete after 1sec

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"gaurav@gmail.com"})
    },1000)
    
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Gaurav",email:"gaurav@gmail.com"})
        }
        else{
           reject("ERROR: Wrong credentials");
            
        }
    },1000)
})
// const uesrname=promiseFour.then((user) => {
//     console.log((user));
//     return user.username   
// })
// console.log(uesrname); //throws error no username printed 

// correct way

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((myUsername) =>{
    console.log(myUsername);
}).catch(function(error){
    console.log(error);  //if error is true , error message will be printed ERROR: Wrong credentials
    //else, my username will be printed which is Gaurav here
}).finally(() => console.log("Promise is resolved or rejected Successfully"))

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Java",Pass:"123123"})
        }
        else{
           reject("ERROR: JS went wrong");
            
        }
    },1000)
})
//async await
async function consumePromiseFive(){
    //if error is true error occurs, nothing prints
    //else, Java and 123123 gets printed as object
    
    //try and catch block
    try{
        const response=await promiseFive
        console.log((response));
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllusers(params) {
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log((data));
//     }
//     catch(error){
//         console.log("E: ",error);
        
//     }
// }
// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()  //then use to convert to json from string
})
.then((data)=>{
    console.log(data);    // this then used to print data in json
    
})
.catch((error)=>{
    console.log(("E: ",error));
})

