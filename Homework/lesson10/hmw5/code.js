//(подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let date = new Date().getTime();
let allVisits = []
const h1 = document.getElementById('hOne');

if(!localStorage.getItem('price')) {
    localStorage.setItem('price', JSON.stringify(100))
}

if (localStorage.getItem('time')) {
    try {
        allVisits = JSON.parse(localStorage.getItem('time'));
    } catch (e) {
        console.error('Помилка при парсингу даних:', e);
    }
}

allVisits.push(date);
localStorage.setItem ('time', JSON.stringify(allVisits))

function lastVisit() {
    if (allVisits.length > 1 && (new Date().getTime() - allVisits[allVisits.length - 2]) > 10000) {
        let price = JSON.parse(localStorage.getItem('price'))
        price += 10;
        localStorage.setItem('price', JSON.stringify(price))
    }
}
lastVisit();
h1.innerText = `${JSON.parse(localStorage.getItem('price'))} uan`
