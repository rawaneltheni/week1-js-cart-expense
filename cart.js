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
