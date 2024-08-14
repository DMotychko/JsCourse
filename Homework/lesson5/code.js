//1
const areaS = (a, b) => a * b
console.log(areaS(4,5));

//2
const circleS = r => {
    const P =  3.14159;
    return r * r * P;
}
console.log(circleS(5));

//3
const cylinderS = (h, r) => {
    const P = 3.14159;
    return 2 * P * r * (r + h);
}
console.log(cylinderS(8, 9));

//4
let array = [3, 5, 10];
const outputArray = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
outputArray(array);

//5
const createP = text => document.write(`<p>${text}</p>`);
createP("ohoo a ya molodec");

//6
const createUl = text => {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>`)
}
createUl("Ul list")

//7
const createUlList = (text, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
createUlList("LongList", 10);

//8
let arrayTwo= ['Google', 56, true, false]
const listArray = arr => {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`);
}
listArray(arrayTwo);

//9
let objects = [
    {
        name: "Bogdan",
        age: 45,
        id: "993jjd9"
    },
    {
        name: "Roman",
        age: 5,
        id: "fjkdjf9"
    }

]
const arrayObjects = arr => {
    for (let i = 0; i < arr.length; i++)
    {document.write(`<div>
       <h3>${arr[i].name}</h3> 
       <h5>${arr[i].age}</h5>
       <h6>${arr[i].id}</h6>
    </div>`)
    }
}
arrayObjects(objects);

//10
let numbers = [4, 5, 58, 33, 3, 28];
const smallNumber = arr => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            num = arr[i];
        }
    }
    console.log(num);
}
smallNumber(numbers);

//11
let arrayNumbers = [4, 5, 19, 20];
const sum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum)
}
sum(arrayNumbers);

//12
let arrayNumbersTwo = [4, 20, 6, 5];
const mixArray = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}
console.log((mixArray(arrayNumbersTwo, 2, 3)));

//13
let money = [
    {
        currency: "USD",
        value: 25
    },
    {
        currency: "EUR",
        value: 40
    },
]
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let i = 0; i < money.length; i++) {
        if (exchangeCurrency === money[i].currency) {
            console.log(money[i].value * sumUAH)
        }
    }
}
exchange(10000, money, 'USD')
exchange(10000, money, 'EUR')


