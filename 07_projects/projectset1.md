# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html) 


## project 1 Solution code

```javascript
console.log("gaurav")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target);
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='purple'){
      body.style.backgroundColor=e.target.id
    }
  });
});
```
## project 2 solution code

``` javascript

const form=document.querySelector('form')
//const height=parseInt(document.querySelector('#height').value); will gives empty value of height
form.addEventListener('submit',function(e){
  e.preventDefault();


  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');

  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`Please enter valid height ${height}`
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`Please enter valid weight ${weight}`
  }
  else{
    const BMI=(weight/((height*height)/10000)).toFixed(2);
    let status='';
    if(BMI<18.6) status="Under weight"
    else if(BMI>18.6 && BMI<24.9) status="Normal weight"
    else if(BMI>24.9) status="Over weight"
    
    results.innerHTML=`<span>${BMI}<br>${status}</br></span>`
  }
});
```
## propject 3
```javascript

const clock = document.getElementById('clock');
// const clock =document.querySelector('#clock')

// run at given intervals, 1000 is time in ms
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
## project 4
``` javascript

let randNo=parseInt(Math.random()*100 +1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowORhigh=document.querySelector('.lowOrHi');
const startAgain=document.querySelector('.resultParas');

const p= document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}
function validateGuess(guess){
  // valid input given or not
  if(isNaN(guess)){
    alert('Please enter valid number')
  }
  else if(guess<1){
    alert('Please enter number greater than 1')
  }
  else if(guess>100){
    alert('Please enter lesses than 100 number')
  }
  else{
    prevGuess.push(guess)
    if(numGuess===11){
      cleanupGuess(guess);
      displayMessage(`Game over, Random number was ${randNo}`);
      endgame();
    }
    else{
      cleanupGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  // check the guess
  if(guess===randNo){
    displayMessage('7 crore!!!')
    endgame()
  }
  else if(guess>randNo){
    displayMessage('thoda chota soch be')
  }
  else if(guess<randNo){
    displayMessage('itti choti soch hai kya be teri')
  }
}
function cleanupGuess(guess){
  // prev array update, attempts remaining , new input  update
  userInput.value ='';
  guessSlot.innerHTML +=`${guess}, `;
  numGuess++;
  remaining.innerHTML =`${11-numGuess}`;
}
function displayMessage(message){
  // shows the msg of win or lose
  lowORhigh.innerHTML= `<h2>${message}</h2`
}
function endgame(){
  userInput.value='';
  userInput.setAttribute('disabled','')
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame">Start new game</h2>`;
  startAgain.appendChild(p);
  playGame=false;
  newgame();
}
function newgame(){
  let newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randNo=parseInt(Math.random()*100 +1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML =`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startAgain.removeChild(p)
    playgame=true
  })
}
```





