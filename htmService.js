function ellipsis(string = '', maxLength = 30) {
    if (string.length > maxLength) {
        return string.substring(0, maxLength) + '...'
    }
}

class HTMLService {
    paintProduct(product) {
        return `
            <li data-id="${product.id   }">
                <img src="${product.image}" title="${product.title}" />
                <small>${ellipsis(product.title)}</small>
                <small><strong>${product.price}</strong></small>
            </li>
        `
    }

    paintProducts(products = []) {
        return products.map(this.paintProduct).join('')
    }

    paintCartItem(item) {
        return `
            <li data-type="remove" data-id="${item.id}">
                (${item.amount})
                ${item.title}
                <strong>$${item.price}</strong>
            </li>
        `
    }

    paintCart({ items, totalPrice}) {
        if (items.length === 0) {
            return `<p>Корзина пуста</p>`
        }

        return `
            <ul class="cart-list">
                ${ items.map(this.paintCartItem).join('') }
            </ul>
            <p class="info">
                <span>Общая цена: <strog>$${totalPrice.toFixed(2)}</strog></span>
                <button class="clear" data-type="clear">Очистить</button>
            </p>
        `
    }

    printError(e) {
        return `<p class="error">${e.message}</p>`
    }
}