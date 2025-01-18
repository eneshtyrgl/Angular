import { Product } from './Product';
import { ProductList } from './ProductList';

// Usage Example
const productList = new ProductList();

// Creating products
const laptop = new Product(1, "ThinkPad X1 Carbon", 1499.99, "Electronics");
const phone = new Product(2, "Samsung Galaxy Z Flip", 1099.99, "Electronics");
const book = new Product(3, "TypeScript Guide", 29.99, "Books");

// Adding products to the list
productList.addProduct(laptop);
productList.addProduct(phone);
productList.addProduct(book);

// Test the functionality
console.log("All Products:", productList.getAllProducts());
console.log("Electronics:", productList.getProductsByCategory("Electronics"));
console.log("Product #3:", productList.findProductById(3));