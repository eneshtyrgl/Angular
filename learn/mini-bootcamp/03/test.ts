// Define the product interface
interface IProduct {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

// Product class
class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public category: string,
        public inStock: boolean = true
    ) {}

    getDetails(): string {
        return `${this.name} - ${this.category} - $${this.price}`;
    }

    updateStock(available: boolean): void {
        this.inStock = available;
    }
}

// ProductList class
class ProductList {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getAllProducts(): Product[] {
        return this.products;
    }

    findProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }

    getProductsByCategory(category: string): Product[] {
        return this.products.filter(product => product.category === category);
    }
}

// Usage Example
const productList = new ProductList();

// Creating products
const laptop = new Product(1, "MacBook Pro", 1299.99, "Electronics");
const phone = new Product(2, "iPhone 13", 999.99, "Electronics");
const book = new Product(3, "TypeScript Guide", 29.99, "Books");

// Adding products to the list
productList.addProduct(laptop);
productList.addProduct(phone);
productList.addProduct(book);

// Test the functionality
console.log("All Products:", productList.getAllProducts());
console.log("Electronics:", productList.getProductsByCategory("Electronics"));
console.log("Product #1:", productList.findProductById(1));