let cars=['bmw', 'bmw', 'lada', 'porshe', 'porshe', 'mercedes', 'mercedes']
const carUnique = new Set(cars);

let fruits = ['kiwi', 'banana', 'apple', 'banana', 'kiwi']
const fruitsUnique = Array.from(new Set(fruits));
console.log(carUnique)
console.log(fruitsUnique)


const myFruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
const unique = {};
myFruits.forEach(item => {
    unique[item] = true;
});
// Получаем массив из уникальных ключей
const uniqueArray = Object.keys(unique);
console.log( uniqueArray);