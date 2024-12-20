function one(){
    const username="Gaurav"
    function two(){
        const website="youtube"
        console.log(username) //outer variables can be accessed inside
    }
    // console.log(website); //inner variables cant be accessed outside 
    two(); //won't be executed as error in website console
}
// one()
if(true){
    const username="lawat"
    if(username=="lawat"){
        const website=" yt"
        // console.log(username + website)
    }
    // console.log(website) //throws error
}
// console.log(username) //throws error

// INTERESTING //(hoisting)
console.log(addone(5))
function addone(num){
    return num+1
}
// addTwo(5) //cant access addTwo before initialization
const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))
