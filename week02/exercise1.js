// 💻 Exercise 1: JavaScript to TypeScript Conversion
// Convert these JavaScript utilities to TypeScript:
// function calculateTotal(price, quantity, discount) {
//     return (price * quantity) * (1 - discount);
// }
function calculateTotal(price, quantity, discount) {
    return (price * quantity) * (1 - discount);
}
function formatUser(user) {
    return {
        fullName: "".concat(user.firstName, " ").concat(user.lastName),
        age: user.age,
        isAdult: user.age >= 18
    };
}
// const inventory = [
//     { name: "laptop", price: 1000, inStock: true},
//     {name: "mouse", price: 25, inStock: false}
// ];
var inventory = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "mouse", price: 25, inStock: false }
];
