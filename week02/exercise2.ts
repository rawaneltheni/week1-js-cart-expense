// Exercise: Create typed utilities

// 1. Create an interface for a Product with name, price, category
interface Product {
    name: string,
    price: number,
    category: productCategories;
}

// 2. Create a union type for product categories: "electronics" | "clothing" | "books"
type productCategories = "electronics" | "clothing" | "books";

// 3. Write a generic filter function that works with any array type
function filterArray<T>(array: T[], predicate: (item: T) => boolean): T[] {
    return array.filter(predicate);
}

// 4. Create an enum for order status
enum orderStatus {
    PENDING = "pending",
    PROCESSING = "processing",
    SHIPPED = "shipped",
    DELIVERED = "delivered"
}

// 5. Build a typed shopping cart system
interface ShoppingCart<T> {
    items: CartItem<T>[];
    total: number;
    addItem: (product: T, quantity: number) => void;
    removeItem: (productId: string) => void;
}

interface CartItem<T> {
    product: T;
    quantity: number;
}










