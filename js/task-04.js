const valueCounter = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let value = Number(valueCounter.textContent);
let step = 1;


incrementBtn.addEventListener('click',() => {value+=step; counterValue()});
decrementBtn.addEventListener('click',() => {value-=step; counterValue()});


const counterValue = () => {
    valueCounter.textContent= value;
}




