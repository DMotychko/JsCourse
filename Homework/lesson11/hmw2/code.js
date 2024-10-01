//взяти https://dummyjson.com/recipes
// та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(recipesObj => {
        const {recipes} = recipesObj
        for (const recipe of recipes) {
            const recipeObjDiv = document.createElement('div')
            const hr = document.createElement('hr')

            for (const recipeKey in recipe) {
                if (Array.isArray(recipe[recipeKey])) {
                    const div = document.createElement('div')
                    const ul = document.createElement('ul')
                    const h3 = document.createElement('h3')
                    const array = recipe[recipeKey]
                    for (const arrayElement of array) {
                        const li = document.createElement('li')
                        li.innerText = `${arrayElement}`
                        ul.appendChild(li)
                    }
                    h3.innerText = `${recipeKey}:`
                    div.append(h3, ul)
                    recipeObjDiv.appendChild(div);
                }
                else {
                    if(recipeKey !== 'image') {
                        const div = document.createElement('div')
                        div.innerText = `${recipeKey} - ${recipe[recipeKey]}`
                        recipeObjDiv.appendChild(div);
                    }
                }
            }
            const img = document.createElement('img')
            img.src = recipe.image
            document.body.append(recipeObjDiv, img, hr);
        }
    })