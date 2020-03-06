'use strict'
let fieldForEnteringUserName = document.querySelector('.name-check')
let buttonToConfirmationUserName = document.querySelector('.name-check-button')
let blockForDisplayingInputErrors = document.querySelector('.block-for-displaying-input-errors')
let questions = [...document.querySelectorAll('.question')]


buttonToConfirmationUserName.disabled = true


fieldForEnteringUserName.addEventListener('input', keyCheck)
buttonToConfirmationUserName.addEventListener('click', () => {
    if (fieldForEnteringUserName.value.length < 3) {
        fieldForEnteringUserName.classList.add('displaying-input-errors')
        blockForDisplayingInputErrors.style.display = 'block'
    }

})



function keyCheck() {
    blockForDisplayingInputErrors.style.display = 'none'
    fieldForEnteringUserName.classList.remove('displaying-input-errors')
    if (fieldForEnteringUserName.value.length > 0) {
        buttonToConfirmationUserName.disabled = false
    } else {
        buttonToConfirmationUserName.disabled = true
    }
}





