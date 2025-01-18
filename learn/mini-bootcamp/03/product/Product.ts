import { IProduct } from './IProduct';

// Product class
export class Product implements IProduct {
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