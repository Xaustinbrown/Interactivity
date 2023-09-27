console.log('it is working')

let count = 0;
let minusButton = document.querySelector('#minus-btn')
let resetButton = document.querySelector('#reset-btn')
let plusButton = document.querySelector('#plus-btn')
let counterElement = document.getElementById('counter')

function increase(){
  count++
  console.log(count)
  counterElement.innerHTML = count
}

function decrease(){
  count--
  console.log(count)
  counterElement.innerHTML = count
}


function reset(){
  count = 0
  console.log(count)
  counterElement.innerHTML = count
}

minusButton.addEventListener('click', decrease)
resetButton.addEventListener('click', reset)
plusButton.addEventListener('click', increase)



