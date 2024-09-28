// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const div = document.createElement('div');
div.className = 'wrap collapse alpha beta'

const cloneDiv = div.cloneNode(true)

document.body.append(div, cloneDiv)

// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const ul = document.createElement('ul')
let array = ['Main','Products','About us','Contacts']
for (item of array) {
    const li = document.createElement('li')
    li.innerText = item
    ul.appendChild(li)
}
document.body.appendChild(ul);

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>title -- ${course.title}</h2> <br>
    <p>${course.monthDuration}</p>
    `
    document.body.appendChild(div);
}

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

document.body.innerHTML = ''

for (const course of coursesAndDurationArray) {

    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    div.className = 'item';
    h1.className = 'heading';
    p.className = 'description';

    h1.innerText = course.title;
    p.innerText = course.monthDuration;

    div.append(h1, p);

    document.body.appendChild(div);
}

