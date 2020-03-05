'use strict'
let nameCheck = document.querySelector('.nameCheck')
let nameCheckButton = document.querySelector('.nameCheckButton')

nameCheckButton.disabled = true
let count = 0;

// nameCheck.addEventListener('')

nameCheck.addEventListener('keydown', keyCheck)


function keyCheck(event) {
    if (event.key !== 'Backspace') {
        count++
    } else {
        count--
    }

    if (count > 1) {
        nameCheckButton.disabled = false
    } else {
        nameCheckButton.disabled = true
    }
}