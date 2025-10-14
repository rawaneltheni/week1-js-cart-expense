// Day 1 - 5 Days of JavaScript (Variables, Data Types & Arrays)

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
/*
let cost = cart[0].price + cart[1].price + cart[2].price + cart[3].price;
let totalItems = cart[0].quantity + cart[1].quantity + cart[2].quantity + cart[3].quantity;

console.log(`The total cost of items in the cart is $${cost} for ${totalItems} items.`);
*/












// Day 2 - 5 Days of JavaScript (Operators & Conditionals)

// task 1: add logic to calculate the total cost of items in the cart

function calculateTotal(cart) {
    
    let total_price = 0;
    let total_item = 0;

    for(const item of cart)
    {
        total_item += item.quantity;
    }

    if (total_item === 0) {
        return "Cart is empty !"
    }

    else {

    for(const item_price of cart)
    {
        total_price += item_price.price * item_price.quantity;
    }

    let flag = false; 

    // Apply 15% discount if more than 5 items
    if (total_item > 5) {
        total_price *= 0.85;
        flag = true;
    }

    // Apply 10% discount if total price exceeds $40
    if (total_price > 40) {
        total_price *= 0.9;
        flag = true;
    }    

    // Discount applying confirmation message 
    if (flag == true) 
        return total_price < 30 
        ? `Total price after discount = $${total_price} \n with shipping (+$5) = $${total_price+5}` 
        : `Total price = $${total_price} \n free shipping`
    
    // Displaying the total that didn't receive a discount
    else 
        return total_price < 30 
        ? `Total price = $${total_price} \n with shipping (+$5) $${total_price+5}` 
        : `Total price = $${total_price} \n free shipping`

    }

} console.log(calculateTotal(cart));
