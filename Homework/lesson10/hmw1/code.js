// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".

const divText = document.createElement('div');
divText.id = 'text';
divText.innerText = 'text';
const buttonDeleteText = document.createElement('button');
buttonDeleteText.innerText = 'delete'
buttonDeleteText.onclick = () => {
    document.querySelector('#text').remove();
}
document.body.append(divText, buttonDeleteText)

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const formAge = document.getElementsByTagName('form')[0]
const inputAge = document.getElementById('age');

formAge.onsubmit = ((e) => {
    e.preventDefault();
    if (inputAge.value >= 18) {
        alert('Welcome')
    } else {
        alert('you cant visit this site')
    }
    formAge.reset()
})




