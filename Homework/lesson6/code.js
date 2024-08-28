//1 - Знайти та вивести довижину настипних стрінгових значень
//    'hello world', 'lorem ipsum', 'javascript is cool'
let greeting = 'hello world';
let random = 'lorem ipsum';
let statement = 'javascript is cool';

console.log(greeting.length, random.length, statement.length);

//2 - Перевести до великого регістру наступні стрінгові значення
//    'hello world', 'lorem ipsum', 'javascript is cool'

console.log(greeting.toUpperCase(), random.toUpperCase(), statement.toUpperCase());

//3  - Перевести до нижнього регістру настипні стрінгові значення
//     'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let upperGreeting = 'HELLO WORLD';
let upperRandom = 'LOREM IPSUM';
let upperStatement = 'JAVASCRIPT IS COOL';

console.log(upperGreeting.toLowerCase(), upperRandom.toLowerCase(), upperStatement.toLowerCase());

//4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
let clearStr = str.trim();
console.log(clearStr.length, clearStr)

//5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strTwo = 'Ревуть воли як ясла повні';
const stringToArray = str => {
    if(str) {
        const s = str.split(' ');
        return s;
    }
    return ['']
}
console.log(stringToArray(strTwo));

//6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let strNumber = numbers.map(num => num.toString())
console.log(strNumber);

//7 - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((num1, num2) => num1 - num2);
    }
    if (direction === 'descending') {
        return nums.sort((num1, num2) => num2 - num1);
    }
}
sortNums(nums, 'ascending');
console.log(nums);
sortNums(nums, 'descending');
console.log(nums);

//8 - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];

coursesAndDurationArray.sort((elem1, elem2) => elem2.monthDuration - elem1.monthDuration);
console.log(coursesAndDurationArray);

const filteredCourses = coursesAndDurationArray.filter((value) => value.monthDuration > 5 )
console.log(filteredCourses);

console.log(coursesAndDurationArray.map((element, index) => {
    let obj = JSON.parse(JSON.stringify(element));
    obj.id = index + 1
    return obj
}))

//9 описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//

const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value}
        if(suit === 'diamond' || suit === 'heart') {
            card.color = 'red'
        } else {
            card.color = 'black'
        }
        cards.push(card);
    }
}
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
console.log(cards.filter(card => card.value === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8')))

//10
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const objCards = cards.reduce((accumulator, card ) => {
    switch (card.cardSuit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
    }

    return accumulator;
}, {spades:[], diamonds:[], hearts:[], clubs:[]})

console.log(objCards)

//11
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const modulesSass = coursesArray.filter((e) => e.modules.indexOf('sass') >= 0);
const modulesDocker = coursesArray.filter((e) => e.modules.indexOf('docker') >= 0);
console.log(modulesSass);
console.log(modulesDocker);






