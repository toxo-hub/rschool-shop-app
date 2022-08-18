class CartService {
    constructor() {
        this.cart = {}
    }

    add(product) {
        const key = product.id
        
        if (this.cart[key]) {
            this.cart[key].amount++
            return
        }
    
        this.cart[key] = {
            title: product.title,
            price: product.price,
            amount: 1
        }
    }

    getInfo() {
        const items  = Object.keys(this.cart).map(id => {
            return {
                id,
                ...this.cart[id]
            }
        })
    
        const totalPrice = items.reduce((sum, item) => sum + item.amount * item.price, 0)
    
    
        return {items, totalPrice}
    }

    clear() {
        this.cart = {}
    }

    remove(id) {
        if (this.cart[id].amount === 1) {
            delete this.cart[id]
        } else {
            this.cart[id].amount--
        }
    }
}