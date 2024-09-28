const clone = (obj) => {
    if(obj) {
        let functions = [];
        for (const key in obj) {
            if(typeof obj[key] === 'function') {
                const cloneFunction = obj[key].bind({})
                functions.push({cloneFunction, key})
            }
        }

        const cloneObj = JSON.parse(JSON.stringify(obj))

        for (const func of functions) {
            cloneObj[func.key] = func.cloneFunction
        }

        return cloneObj;
    }

    throw new Error('Invalid input: object is null or undefined')
}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

const array = coursesAndDurationArray.map((elem, index) => ({
    id: index + 1,
    ...elem
}))