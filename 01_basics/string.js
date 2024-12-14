const gameName= new String('Gaurav-TT-soni')
 console.log(gameName[0]);
 console.log(gameName.__proto__);

 console.log(gameName.length);
 console.log(gameName.toUpperCase()) //doesnot change original string
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('u'));

 const newString = gameName.substring(0,4) //not include last index
 console.log(newString);

 const anotherString= gameName.slice(-9,4) // negative index me add krdo length wha se start hoga inde here l=9 so -9+9=0 index se start kro
 console.log(anotherString);

 const newStringOne= "   Gaurav  "
 console.log(newStringOne.trimEnd()); //trim trimEnd trimeStart removes extra spaces 
 
const url="https://gaurav.com/gaurav%03lawat"

console.log(url.replace('%03','-'));
console.log(url.includes('soni'))

 
 console.log(gameName.split('-'));
 
 
 
 
 
 