//створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const form = document.getElementById('form');
const input = document.getElementById('kg');
const span = document.getElementById('span');

input.oninput = () => {
    span.innerText = `${input.value * 2.2}`
}


//В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayKey,objToAdd) {
    const array = JSON.parse(localStorage.getItem(arrayKey))
    array.push(objToAdd);
    localStorage.setItem(arrayKey, JSON.stringify(array))
}



