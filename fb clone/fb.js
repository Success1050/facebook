const buttons = document.querySelectorAll('#button')
const number1 = document.querySelector('#number1')
const number2 = document.querySelector('#number2')
const number3 = document.querySelector('#number3')
const number4 = document.querySelector('#number4')
const number5 = document.querySelector('#number5')
const displayChats = document.querySelector('.display-chats')
console.log(displayChats);
const hide = document.querySelector('#hide')
console.log(hide);
const imageBtn = document.querySelector('.image')
const settingsMenu = document.querySelector('.settings-menu')
const darkBtn = document.querySelector('#dark-btn')



// RESET 
let value1 = 0
let value2 = 0
let value3 = 0
let value4 = 0
let value5 = 0

imageBtn.addEventListener('click', () => {
    settingsMenu.classList.toggle('show-settings-menu')
})

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('btn1')) {
            value1++
            number1.textContent= value1
        }
        if (e.currentTarget.classList.contains('btn2')) {
            value2++
            number2.textContent= value2
        }
        if (e.currentTarget.classList.contains('btn3')) {
            value3++
            number3.textContent= value3
        }
        if (e.currentTarget.classList.contains('btn4')) {
            value4++
            number4.textContent= value4
        }
        if (e.currentTarget.classList.contains('btn5')) {
            value5++
            number5.textContent= value5
        }
    })
})


hide.addEventListener('click', () => {
    if (!displayChats.classList.contains('show-chats'))
    {
    displayChats.classList.add('show-chats')
        hide.innerHTML= `<p>Hide Chats</p>`
    }

    else {
    displayChats.classList.remove('show-chats')
        hide.innerHTML= `<p>Show Chats</p>`
    }
})



darkBtn.addEventListener('click', () => {
    darkBtn.classList.toggle('slide-btn')
    document.body.classList.toggle('dark-theme')

    if (localStorage.getItem('theme') == 'light'){
         localStorage.setItem('theme', 'dark')
    } else {
         localStorage.setItem('theme', 'light')
    }
})


if (localStorage.getItem('theme') == 'light') {
     darkBtn.classList.remove('slide-btn')
    document.body.classList.remove('dark-theme')
}
else if (localStorage.getItem('theme') == 'dark') {
    darkBtn.classList.add('slide-btn')
    document.body.classList.add('dark-theme')
}
else {
    localStorage.setItem('theme', 'light')
}