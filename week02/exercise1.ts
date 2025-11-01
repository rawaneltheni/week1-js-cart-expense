// 💻 Exercise 1: JavaScript to TypeScript Conversion
// Convert these JavaScript utilities to TypeScript:

// function calculateTotal(price, quantity, discount) {
//     return (price * quantity) * (1 - discount);
// }

function calculateTotal(price: number, quantity: number, discount: number) : number {
    return (price * quantity) * (1-discount);
}

// function formatUser(user) {
//     return {
//         fullName: `${user.firstName} ${user.lastName}`,
//         age: user.age,
//         isAdult: user.age >= 18
//     };
// }

interface user {
    firstName: string;
    lastName: string;
    age: number;
    isAdult: boolean;
}

interface product {
    name: string;
    price: number;
    inStock: boolean;
}

function formatUser(user: user) : {fullName: string; age: number; isAdult: Boolean} {
    return { 
        fullName: `${user.firstName} ${user.lastName}`,
        age: user.age,
        isAdult: user.age >= 18 
    };
} 

// const inventory = [
//     { name: "laptop", price: 1000, inStock: true},
//     {name: "mouse", price: 25, inStock: false}
// ];

const inventory: product[] = [
    {name: "Laptop", price: 1000, inStock: true},
    {name: "mouse", price: 25, inStock: false}
]
