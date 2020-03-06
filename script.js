'use strict'
let fieldForEnteringUserName = document.querySelector('.name-check')
let userNameConfirmationButton = document.querySelector('.name-check-button')
let error = document.querySelector('.error')
let questions = [...document.querySelectorAll('.question')]
let storeName = []

userNameConfirmationButton.disabled = true
let count = 0;

fieldForEnteringUserName.addEventListener('input', keyCheck)
userNameConfirmationButton.addEventListener('click', () => {
    
})



function keyCheck(event){
    console.log(event)
    
        
        console.log(fieldForEnteringUserName.value)
    
}





