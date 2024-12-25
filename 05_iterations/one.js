// //  for
// for (let index = 0; index < 5; index++) {
//     const element = index;
//     if(element==3){
//         console.log("3 is odd prime")
//     }
//     console.log(element)
// }

// for (let i = 1; i <=2; i++) {
//     console.log(`it's ${i}th outer loop`);
    
//     for (let j = 1; j <=10; j++) {
//         // console.log(`Its ${j+1}th inner loop of ${i+1}th outer loop`);
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
    
// }
// let myArr=["gaurav","soni","lawat"]
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element)
// }

//break and continue
// for (let index = 1; index < 20; index++) {
//     if(index==5){
//         console.log("detected 5");
//         break;     //comes out of the iteration loop   
//     }
//     console.log(`Value of i is ${index}`);
// }
for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("detected 5");
        continue;        //jumps to next iteration
    }
    console.log(`Value of i is ${index}`);
}
