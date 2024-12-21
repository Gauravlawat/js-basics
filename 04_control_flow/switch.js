// switch(key){
//     case  value:
//         break;
//     default:
//         break;
// }

const month = "March"
switch (month) {
    case "Jan":
        console.log("Jan");
        
        break;
    case "Feb":
        console.log("Feb");
        
        break;
    case "March":
        console.log("March");
        
        break; //if break not used , it will execute all below cases without even matching keys except the default case

    default:
        console.log("enter correct month");
        
        break;
}