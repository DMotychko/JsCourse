//створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const form = document.getElementById('form');
const input = document.getElementById('kg');
const span = document.getElementById('span');

input.oninput = () => {
    span.innerText = `${input.value * 2.2}`
}
