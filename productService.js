class ProductService {

    constructor(products = []) {
        this.products = products
    }

    filterBy(search = '') {
        if (!search.trim()) return this.products
        return this.products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    }

    get(index) {
        return this.products[index]
    }

    getById(id) {
        return this.products.find(product => product.id === id)
    }
}