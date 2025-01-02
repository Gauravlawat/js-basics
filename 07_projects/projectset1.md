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
