let buttonPush = document.querySelector('#buttonPush')
let errorName = document.querySelector('#errorName')
let errorAge = document.querySelector('#errorAge')
let errorStudent = document.querySelector('#errorStudent')
var accept1 = false
var accept2 = false
var accept3 = false

buttonPush.addEventListener('click', check)

function check(){
    let nameValue = document.querySelector('#name').value
    if (nameValue.length <= 3){
        errorName.innerHTML = "<p>Вы некорректно ввели имя, должно быть от 3 символов</p>"
    }else{
        errorName.innerHTML = ""
        accept1 = true
    }
    let ageValue = document.querySelector('#age').value
    if (ageValue.length == 0){
        errorAge.innerHTML = "Пожалуйста, введите свой возраст"
    } 
    else if (ageValue < 14){
        errorAge.innerHTML = "Вам должно быть больше 14 лет. Попробуйте еще раз"
    }else if(ageValue > 30){
        errorAge.innerHTML = "Вы должны быть младше 30 лет. Попробуйте еще раз"
    }else{
        errorAge.innerHTML = ""
        accept2 = true
    }
    let studentValue = document.querySelector('#student').value
    if (studentValue == 1){
        errorStudent.innerHTML = "Вход только для студентов"
    }else{
        errorStudent.innerHTML = ""
        accept3 = true 
    }
    if (accept1 == true && accept2 == true && accept3 == true){
        window.location.href = "C:/Users/Дамир/Desktop/AlmaU/Web/Calculator Advanced/index.html"
    }
}