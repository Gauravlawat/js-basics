//immediate invoked function expression

// function chai(){
//     console.log("DB connected")
// }
// chai()
(function chai(){  //named iife
    console.log(`DB connected`)
})();// the ending () is for execution as in chai()
// iife is used to avoid global scope pollution in child scope
// ; is must after 1st func as to end context of scope
( (name) => {  //unnamed iife
    console.log(`DB connected twice ${name}`);
    
}) ("Thanks")

// two iife are always separated by ;
