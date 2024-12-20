function myName(){
    console.log("s");
    console.log("o");
    console.log("n");
    console.log("i");
}
// myName() //call a function

// function add2num(num1,num2){  //num1 num2 are parameters
//     console.log(num1+num2);
// }
// add2num(3,null) //3 null are arguments
function add2num(num1,num2){ 
    // let result=num1+num2;
    // return result
    return num1+num2
}

const result=add2num(3,5)
// console.log("Result: ",result); //shows undefined if return not used just console log used

function login(userName){
    return `${userName} has logged in!`
}
// console.log(login("Soni ji")) //incase no arguments passed undefined shows up 
function loginname(userName ="Default"){
    if(userName===undefined || !userName){
        console.log("please enter a name");
        return
    }
   
    return `${userName} has logged in!`
    
}
console.log(loginname());
