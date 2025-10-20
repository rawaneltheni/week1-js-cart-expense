// Day 1 - 5 Days of JavaScript (Variables, Data Types & Arrays)
/*
let cart = [
    {name: 'Chocolate', price: 3.0, quantity: 3},
    {name: 'Tea', price: 2.0, quantity: 2},
    {name: 'Coffee', price: 1.5, quantity: 1}
];

console.table(cart);
*/
/*
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
*/












// Day 2 - 5 Days of JavaScript (Operators & Conditionals)

// task 1: add logic to calculate the total cost of items in the cart
/*
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
*/












// Day 3 - 5 : Loops & Functions
/*
function addItemToCart(cart, name, price, quantity) {
    cart.push({name: name, price: price, quantity: quantity});
}

function removeItem(cart, name) {
    const index = cart.findIndex(i => i.name === name);
    if (index !== -1) cart.splice(index, 1);
}

function doublePrices(cart) {
    for (let i = 0; i < cart.length; i++) 
        cart[i].price *= 2;
}

function getMostExpensiveItem(cart) {
    let max = 0;
    cart.forEach(element => { 
        if(element.price > max) 
            max = element.price;
        });
    return max;
}

function resetCart(cart) {
    cart.length = 0;
}

const readlineSync = require('readline-sync');

let choice = '';
while (choice !== 'e') {

    console.log("Press \n (e) : exit \n (a) : add \n (d) : delete \n (o) : double \n (x) : get the most expensive item \n (r) : reset: ");
    choice = readlineSync.question("\t\nYour choice: ").toLowerCase();

    if (choice === 'e') break;

    // Task 1 : Add an item to the cart using a loop and function
    else if (choice === 'a') {

    let itemName = readlineSync.question("Item Name: ");
    let itemPrice = readlineSync.question("Item Price: ");
    let itemQuantity = readlineSync.question("Item Quantity: ");

    addItemToCart(cart, itemName, parseFloat(itemPrice), parseInt(itemQuantity));

    console.log("Item added to cart successfully! Here is the updated cart: \n ");
    console.table(cart);

    }

    // Task 2 : Remove an item from the cart using a loop and function
    else if (choice === 'd') {
        let ItemNameToDelete = readlineSync.question("Enter the name of the item to delete: ");
        removeItem(cart, ItemNameToDelete);
        console.log("Item removed from cart successfully! Here is the updated cart: \n ");
        console.table(cart);
    }

    // Task 3 : Write a function that doubles all prices in the cart using a loop and function
    else if (choice === 'o') {
        doublePrices(cart);
        console.log("All prices in the cart have been doubled. Here is the updated cart: \n ");
        console.table(cart);
    }

    // Task 4 : Create a getMostExpensiveItem() function
    else if (choice === 'x') {
        let mostExpensive = getMostExpensiveItem(cart);
        console.log(`The most expensive item in the cart is priced at $${mostExpensive}`);
    }

    // Task 5 : Write a function to reset the cart completely
    else if (choice === 'r') {
        resetCart(cart);
        console.log("Cart has been reset successfully! Here is the updated cart: \n ");
        console.table(cart);
    }

    else {
        console.error("Invalid choice. Please try again.");
    }

}
*/












// Day 4 - 5 : Objects & Simple DOM Output

// - Convert the shopping cart into an object with methods ( addItem , removeItem , getTotal ). 

const cart = {

    items : [ 
        {name: 'Chocolate', price: 3.0, quantity: 3} , 
        {name: 'Tea', price: 2.0, quantity: 2}, 
        {name: 'Coffee', price: 1.5, quantity: 1}, 
    ],

    addItem(name, price, quantity) {
        this.items.push({name, price, quantity});
        renderCart();
        renderCart(this);
    },

    removeItem(name) {
        let index = this.items.findIndex(i => i.name === name);
        if (index !== -1) this.items.splice(index, 1);
        renderCart();
        renderCart(this);
    },

    getTotal() {
        let total_price = 0;
        for (const item of this.items) {
            total_price += item.price * item.quantity;
        }
        return Number(total_price.toFixed(2));
    },

    clearCart() {
        this.items.length = 0;
        renderCart();
        renderCart(this);
    },

    checkOut() {
        if(this.items.length !== 0)
            alert("Checkout successful! Thank you for your purchase.");
        else
            alert("Your cart is empty!");
        this.clearCart();
    },


};

// Print the cart as a table in HTML
function renderCart(cart = window.cart) {
    const table = document.getElementById('cartTable');
    const totalDisplay = document.getElementById('displayTotal');

    if (!table || !totalDisplay) return;

    let html = `
        <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th>Action</th>
        </tr>
        `;

        cart.items.forEach(item => {
        html += `
            <tr>
              <td>${item.name}</td>
              <td>$${item.price.toFixed(2)}</td>
              <td>${item.quantity}</td>
              <td>$${(item.price * item.quantity).toFixed(2)}</td>
              <td><button onclick="cart.removeItem('${item.name}')">Remove</button></td>
            </tr>
          `;
        });

        table.innerHTML = html;
        totalDisplay.innerText = `Total: $${cart.getTotal().toFixed ? cart.getTotal().toFixed(2) : cart.getTotal()}`;
    }

window.cart = cart;
renderCart(cart);










// Day 5 - 5 : Expense Tracker Dashboard (Integration)

// Task 1 : Create expenseTracker.js with a list of expenses { category, amount } 
// Task 2 : Add functions: addExpense(), getTotalExpenses(), getCategorySummary()
// Task A : Filter expenses by category 
// Task B : Sort expenses by amount 
// Task C : Combine your Expense Tracker with Shopping Cart totals for a weekly spending summary.
