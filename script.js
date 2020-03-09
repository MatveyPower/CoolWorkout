'use strict'
let blockUserName = document.querySelector('.name-correctness')
let fieldForEnteringUserName = document.querySelector('.name-check')
let buttonToConfirmationUserName = document.querySelector('.name-check-button')
let blockForDisplayingInputErrors = document.querySelector('.block-for-displaying-input-errors')
let questions = [...document.querySelectorAll('.question')]
let listOfQuestions = document.querySelector('.questions')
let InputUserResponseToFirstQuestion = [...questions[0].querySelectorAll('input')]
let buttonToConfirmationAnswer = document.querySelector('.button-answer')
let currentUserResponse = ''


buttonToConfirmationUserName.disabled = true
blockForDisplayingInputErrors.classList.add('display-none')
listOfQuestions.classList.add('display-none')
questions.forEach(item => item.classList.add('display-none'))



fieldForEnteringUserName.addEventListener('input', keyCheck)
buttonToConfirmationUserName.addEventListener('click', buttonClick)
buttonToConfirmationAnswer.addEventListener('click', confirmQuestions)
InputUserResponseToFirstQuestion.forEach(item => item.addEventListener('change', getQuestions))


function keyCheck() {
    blockForDisplayingInputErrors.classList.add('display-none')
    fieldForEnteringUserName.classList.remove('displaying-input-errors')
    if (fieldForEnteringUserName.value.length > 0) {
        buttonToConfirmationUserName.disabled = false
    } else {
        buttonToConfirmationUserName.disabled = true
    }
}

function buttonClick() {
    if (fieldForEnteringUserName.value.length < 3) {
        blockForDisplayingInputErrors.classList.remove('display-none')
        fieldForEnteringUserName.classList.add('displaying-input-errors')
    } else {
        blockUserName.textContent = `Здравствуйте,${fieldForEnteringUserName.value}`
        listOfQuestions.classList.remove('display-none')
        questions[0].classList.remove('display-none')

    }
}


function getQuestions(event) {
    console.log(event.currentTarget.value)
    currentUserResponse =  event.currentTarget.value
}

function confirmQuestions(){
       console.log(currentUserResponse)
    

}



