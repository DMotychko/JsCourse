// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const form = document.getElementsByTagName('form')[0]
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const age = document.getElementById('age');

form.onsubmit = (e) => {
    e.preventDefault()

    const div = document.createElement('div')

    div.innerText = `${name.value} ${surname.value} -- ${age.value}`

    document.body.appendChild(div)
    form.reset()
}

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let current = +localStorage.getItem('number');
current += 1;
localStorage.setItem('number', current);
document.getElementById('target').innerText = current;