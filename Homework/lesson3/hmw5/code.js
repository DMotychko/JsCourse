//5
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write(`</ul>`);
//6
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FXHqBU0wS72zbVUJv022K&w=1080&q=75'
    },
];
document.write(`<div class="product-card">`);
for (let i = 0; i < products.length; i++) {
    document.write(`<h3 class="product-title">${products[i].title}. Price - ${products[i].price}</h3>
        <img src="${products[i].image}" alt="${products[i].title}" class="product-image">`)
}
document.write(`</div>`);
//7
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//7.1
for (let i = 0; i < users.length; i++) {
    if(users[i].status) {
        console.log(users[i])
    }
}
//7.2
for (let i = 0; i < users.length; i++) {
    if(!users[i].status) {
        console.log(users[i])
    }
}
//7.3
for (let i = 0; i < users.length; i++) {
    if(users[i].age >= 30) {
        console.log(users[i])
    }
}