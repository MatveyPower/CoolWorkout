'use strict'
let blockUserName = document.querySelector('.name-correctness')
let fieldForEnteringUserName = document.querySelector('.name-check')
let buttonToConfirmationUserName = document.querySelector('.name-check-button')
let blockForDisplayingInputErrors = document.querySelector('.block-for-displaying-input-errors')
let questions = [...document.querySelectorAll('.question')]
let listOfQuestions = document.querySelector('.questions')
let InputUserResponseToFirstQuestion = [...questions[0].querySelectorAll('input')]
let buttonToConfirmationAnswer = document.querySelector('.button-answer')
let watchResultDiv = document.querySelector('.watch-result')
let buttonToWatchResult = document.querySelector('.button-result')

let score = 0;

let currentUserResponse = [
  {
    question: 1,
    answer: ''
  },
  {
    question: 2,
    answer: ''
  }
  ,
  {
    question: 3,
    answer: ''
  }
  ,
  {
    question: 4,
    answer: ''
  }
  ,
  {
    question: 5,
    answer: ''
  }
]
let correctAnswer = [
  {
    question: 1,
    answer: '1'
  },
  {
    question: 2,
    answer: '13'
  }
  ,
  {
    question: 3,
    answer: ''
  }
  ,
  {
    question: 4,
    answer: ''
  }
  ,
  {
    question: 5,
    answer: ''
  }
]

buttonToConfirmationUserName.disabled = true
blockForDisplayingInputErrors.classList.add('display-none')
listOfQuestions.classList.add('display-none')
questions.forEach(item => item.classList.add('display-none'))
watchResultDiv.classList.add('display-none')
buttonToWatchResult.classList.add('display-none')

fieldForEnteringUserName.addEventListener('input', keyCheck)
buttonToConfirmationUserName.addEventListener('click', buttonClick)
buttonToConfirmationAnswer.addEventListener('click', confirmQuestions)
listOfQuestions.addEventListener('click', getQuestions)
buttonToWatchResult.addEventListener('click', watchResult)


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
  let target = event.target
  if (target.type != 'radio' && target.type != 'button' && target.type != 'checkbox') {
    return
  }
  if (target.type === 'radio') {
    if (currentUserResponse[0].answer.length > 0) {
      currentUserResponse[0].answer = ''
      currentUserResponse[0].answer += target.value
    } else {
      currentUserResponse[0].answer += target.value
    }
  }
  if (target.type === 'checkbox') {

    currentUserResponse[1].answer += target.value


  }
}

function confirmQuestions() {
  questions[0].classList.add('display-none')
  questions[1].classList.remove('display-none')
  buttonToConfirmationAnswer.classList.add('display-none')
  buttonToWatchResult.classList.remove('display-none')
}

function watchResult() {
  if (currentUserResponse[0].answer === correctAnswer[0].answer) {
    score++
  }
  currentUserResponse[1].answer = currentUserResponse[1].answer.split('')
  currentUserResponse[1].answer = currentUserResponse[1].answer.filter(item => {
    if (item === '1' || item === '3') {
      return false
    } else if (item === '2' || item === '4') {
      return true
    }
  })

  if (currentUserResponse[1].answer.length === 0) {
    score++
  }
  listOfQuestions.textContent = `Ваш счет: ${score} из 2`
}



