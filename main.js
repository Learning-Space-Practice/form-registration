const enterBtn = document.querySelector('.enter-btn')
const registrationBtn = document.querySelector('.registration-btn')
const box = document.querySelector('.enter-item')
const box2 = document.querySelector('.enter-registration')

enterBtn.addEventListener('click', () => {   
    box.classList.add('change')
    box2.classList.remove('active')
})

registrationBtn.addEventListener('click', () => { 
   
    box2.classList.add('change')
    box.classList.remove('change')
    console.log(box2.classList.value)   
})
