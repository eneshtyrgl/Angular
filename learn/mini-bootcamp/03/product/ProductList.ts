import { Product } from './Product';

// ProductList class
export class ProductList {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    getAllProducts(): Product[] {
        return this.products;
    }

    getProductsByCategory(category: string): Product[] {
        return this.products.filter(product => product.category === category);
    }

    findProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }
}