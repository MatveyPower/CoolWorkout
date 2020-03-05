'use strict'
let nameCheck = document.querySelector('.nameCheck')
let nameCheckButton = document.querySelector('.nameCheckButton')
let error = document.querySelector('.error')
let questions = [...document.querySelectorAll('.question')]
console.log(questions)
nameCheckButton.disabled = true
let count = 0;

// nameCheck.addEventListener('')

nameCheck.addEventListener('keydown', keyCheck)
nameCheckButton.addEventListener('click', () => {
    if (count < 3) {
        nameCheck.classList.add('nameCheckStyle')
        error.style.display = 'block'
    } else{
        questions[0].style.display = 'block'

    }
})


function keyCheck(event) {
    nameCheck.classList.remove('nameCheckStyle')
    error.style.display = 'none';
    if (event.key !== 'Backspace') {
        count++
    } else if (count > 0) {
        count--

    }

    if (count > 0) {
        nameCheckButton.disabled = false

    } else {
        nameCheckButton.disabled = true
    }
}
