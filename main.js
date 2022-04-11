const enterBtn = document.querySelector('.enter-btn')
const registrationBtn = document.querySelector('.registration-btn')
const box = document.querySelector('.enter')
const box2 = document.querySelector('.enter-registration')

enterBtn.addEventListener('click', () => {        
        box.style = 'justify-content: flex-end'

})

registrationBtn.addEventListener('click', () => {
    box.style = 'justify-content: flex-start'

})
