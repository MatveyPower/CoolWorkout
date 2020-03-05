'use strict'
let nameCheck = document.querySelector('.nameCheck')
let nameCheckButton = document.querySelector('.nameCheckButton')

nameCheckButton.disabled = true
let count = 0;

// nameCheck.addEventListener('')

nameCheck.addEventListener('keydown', keyCheck)
nameCheckButton.addEventListener('click', () => {
    if (count < 3) {
        nameCheck.classList.add('nameCheckStyle')
    }
})


function keyCheck(event) {
    nameCheck.classList.remove('nameCheckStyle')
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
