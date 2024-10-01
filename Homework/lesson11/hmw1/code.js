//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(data => {
        data.carts.forEach(cart => {
            const div = document.createElement('div')
            const hr = document.createElement('hr')

            for (const cartKey in cart) {
                const ul = document.createElement('ul')
                if(cartKey === 'products') {
                    for (const product of cart[cartKey]) {
                        const li = document.createElement('li')
                        const img = document.createElement('img')
                        li.innerText = `
                          "id": ${product.id},
                          "title": ${product.title},
                          "price": ${product.price},
                          "quantity": ${product.quantity},
                          "total": ${product.total},
                          "discountPercentage": ${product.discountPercentage},
                          "discountedTotal": ${product.discountedTotal},
                        `
                        ul.appendChild(li);
                        img.src = product.thumbnail
                        ul.appendChild(img)
                    }
                }
                const p = document.createElement('p')
                if(cartKey === 'products') {
                    div.appendChild(ul)
                } else {
                    p.innerText = `${cartKey}: ${cart[cartKey]}`
                }
                div.append(p)
            }

            document.body.append(div, hr)
        })
    })

