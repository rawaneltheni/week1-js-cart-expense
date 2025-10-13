// Day 1 - 7 Days of JavaScript (Variables, Data Types & Arrays)

let cart = [
    {name: 'Chocolate', price: 3.0, quantity: 3},
    {name: 'Tea', price: 2.0, quantity: 2},
    {name: 'Coffee', price: 1.5, quantity: 1}
];

console.table(cart);

// using push method to add new item to cart

cart.push({name: 'Salt', price: 1.0, quantity: 4});

console.table(cart);

// using splice method 

// to add new item at a spesfic index
cart.splice(1, 0, {name: 'Sugar', price: 2.5, quantity: 2});
console.table(cart);

// to remove an item at a spesfic index
cart.splice(1, 1);
console.table(cart);

// to replace an item at a spesfic index
cart.splice(3, 1, {name: 'Biscuits', price: 2.0, quantity: 5});
console.table(cart);


// Using template literals to log the total cost of items in the cart

let cost = cart[0].price + cart[1].price + cart[2].price + cart[3].price;
let totalItems = cart[0].quantity + cart[1].quantity + cart[2].quantity + cart[3].quantity;

console.log(`The total cost of items in the cart is $${cost} for ${totalItems} items.`);