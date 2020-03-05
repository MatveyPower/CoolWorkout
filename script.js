'use strict'
let nameCheck = document.querySelector('.nameCheck')
let nameCheckButton = document.querySelector('.nameCheckButton')

nameCheckButton.disabled = true;

// nameCheck.addEventListener('')

nameCheck.addEventListener('keydown', (event) => {
    nameCheckButton.disabled = false
    if (event.key === 'Backspace'){ 
        nameCheckButton.disabled = true
    }

})


function keyCheck(){
    
}