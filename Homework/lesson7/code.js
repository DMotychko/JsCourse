// 1
// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone) {
 this.id = id;
 this.name = name;
 this.surname = surname;
 this.email = email;
 this.phone = phone;
}

const arrayUsers = [
    new User('1234567890', 'Alice', 'Smith', 'alice.smith@example.com', '380671234567'),
    new User('2345678901', 'Bob', 'Johnson', 'bob.johnson@example.com', '380681234568'),
    new User('3456789012', 'Charlie', 'Williams', 'charlie.williams@example.com', '380691234569'),
    new User('4567890123', 'David', 'Brown', 'david.brown@example.com', '380701234570'),
    new User('5678901234', 'Eva', 'Jones', 'eva.jones@example.com', '380711234571'),
    new User('6789012345', 'Frank', 'Garcia', 'frank.garcia@example.com', '380721234572'),
    new User('7890123456', 'Grace', 'Martinez', 'grace.martinez@example.com', '380731234573'),
    new User('8901234567', 'Helen', 'Hernandez', 'helen.hernandez@example.com', '380741234574'),
    new User('9012345678', 'Ivy', 'Lopez', 'ivy.lopez@example.com', '380751234575'),
    new User('0123456789', 'Jack', 'Gonzalez', 'jack.gonzalez@example.com', '380761234576')
];

// 2
// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filteredUsers = arrayUsers.filter((user) => user.id % 2 === 0);
console.log(filteredUsers)

//3
// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

arrayUsers.sort((userOne, userTwo) => userOne.id - userTwo.id)
console.log(arrayUsers)

//4
// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client  {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


const clientsArray = [
    new Client(1, 'Alice', 'Smith', 'alice.smith@example.com', '+380671234567', ['Apple']),
    new Client(2, 'Bob', 'Johnson', 'bob.johnson@example.com', '+380681234568', ['Orange', 'Mango']),
    new Client(3, 'Charlie', 'Williams', 'charlie.williams@example.com', '+380691234569', ['Bread', 'Milk', 'Eggs']),
    new Client(4, 'David', 'Brown', 'david.brown@example.com', '+380701234570', ['Eggs', 'Butter', 'Cheese', 'Tomato']),
    new Client(5, 'Eva', 'Jones', 'eva.jones@example.com', '+380711234571', ['Cheese', 'Tomato', 'Pasta', 'Rice', 'Chicken']),
    new Client(6, 'Frank', 'Garcia', 'frank.garcia@example.com', '+380721234572', ['Pasta']),
    new Client(7, 'Grace', 'Martinez', 'grace.martinez@example.com', '+380731234573', ['Chicken', 'Fish']),
    new Client(8, 'Helen', 'Hernandez', 'helen.hernandez@example.com', '+380741234574', ['Yogurt', 'Juice', 'Coffee']),
    new Client(9, 'Ivy', 'Lopez', 'ivy.lopez@example.com', '+380751234575', ['Coffee', 'Tea', 'Chocolate', 'Candy']),
    new Client(10, 'Jack', 'Gonzalez', 'jack.gonzalez@example.com', '+380761234576', ['Chocolate', 'Candy', 'Biscuits', 'Cookies', 'Soda'])
];

// 5
// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clientsArray.sort((clientOne, clientTwo) => clientOne.order.length - clientTwo.order.length)
console.log(clientsArray)

//6
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CreateCar (model, manufacturer, yearGraduation, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearGraduation = yearGraduation;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`)
    }
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key])
        }
    }
    this.increaseMaxSpeed = function (newMaxSpeed) {
        this.maxSpeed += newMaxSpeed
    }
    this.changeYear = function (newValue) {
        this.yearGraduation = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

const car = new CreateCar('LL', 'fd', 99, 100, 2)
console.log(car)
car.drive()
car.info()
car.increaseMaxSpeed(50);
car.changeYear(1999);
car.addDriver({name: 'driver'})
console.log(car)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarNew {
    constructor (model, manufacturer, yearGraduation, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearGraduation = yearGraduation;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed}`)
    }
    info = function () {
        for (const key in this) {
            console.log(key, this[key])
        }
    }
    increaseMaxSpeed = function (newMaxSpeed) {
        this.maxSpeed += newMaxSpeed
    }
    changeYear = function (newValue) {
        this.yearGraduation = newValue;
    }
    addDriver = function (driver) {
        this.driver = driver
    }
}

const carNew = new CarNew('LL', 'fd', 99, 100, 2)
console.log(carNew)
car.drive()
car.info()
car.increaseMaxSpeed(50);
car.changeYear(1999);
car.addDriver({name: 'driver'})
console.log(carNew)

//8
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, sizeShoe) {
        this.name = name
        this.age = age
        this.sizeShoe = sizeShoe
    }
}

const cinderellas = [
    new Cinderella('Ella', 18, 31),
    new Cinderella('Bella', 19, 32),
    new Cinderella('Clara', 20, 33),
    new Cinderella('Diana', 21, 34),
    new Cinderella('Eva', 22, 35),
    new Cinderella('Fiona', 23, 36),
    new Cinderella('Grace', 24, 37),
    new Cinderella('Hanna', 25, 38),
    new Cinderella('Isabella', 26, 39),
    new Cinderella('Julia', 27, 41)
];

class Prince {
    constructor(name, age, sizeSlipper) {
        this.name = name;
        this.age = age;
        this.sizeSlipper = sizeSlipper;
    }
}

const prince = new Prince('Robert', '28', 37);

for (let i = 0; i < cinderellas.length; i++) {
    if(cinderellas[i].sizeShoe === prince.sizeSlipper) {
        console.log(cinderellas[i])
    }
}

let princess = cinderellas.find(element => element.sizeShoe === prince.sizeSlipper);
console.log(princess)

//9
//*Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    const array = this;
    for (const arrayElement of array) {
        callback(arrayElement)
    }
}
let nums = [1, 2, 3, 5]
nums.myForEach((e) => console.log(e))

Array.prototype.myFilter = function (callback) {
    const arr = [];
    for (const item of this) {
        if(callback(item)) {
            arr.push(item)
        }
    }
    return arr
}

let newNums = nums.myFilter((e) => e > 2)
console.log(newNums)