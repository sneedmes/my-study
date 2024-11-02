// pop() - удаляет последний элемент массива
let teammates = ['Susanna', 'Alina', 'Mariya', 'Ruslana', 'Anya']
teammates.pop()
console.log(teammates)

// shift() - удаляет первый элемент массива
let colors = ['red', 'green', 'black', 'yellow']
colors.shift()
console.log(colors)

// push() - добавить элемент/элементы в конец массива
let fruits = ['mango', 'kiwi']
fruits.push('banana', 'apple')
console.log(fruits)

// unshift() - добавить один или несколько элементов в начало массива
let cars = ['bmw', 'mers']
cars.unshift('lada', 'kia')
console.log(cars)

// splice() - добавить элементы в массив, При использовании этого метода нужно указывать, куда именно следует добавить новые элементы.
// В приведенном примере 2 — индекс, показывающий, где нужно вставить новые имена. Цифра 1 указывает, сколько элементов нужно удалить.
let names = ['andrew', 'tim', 'chloe']
names.splice(2, 1, 'sus', 'rachel')
console.log(names)

// concat() - слияние двух массивов
let name = ['sus', 'maria']
let surname = ['dallaqyan', 'cherepanova']
let data = name.concat(surname)
console.log(data)

// slice() - Этот метод вырезает часть массива, начиная с указанного индекса.
//           Метод slice() может принимать два аргумента, указывающих, с какого и до какого элемента нужно сделать срез.
//           Этот метод принимает также отрицательные числа.
let books = ['classic', 'fantasy', 'romance']
let unique = books.slice(2)
console.log(unique)
let unique1 = books.slice(2, 3)
console.log(unique1)
let unique2 = books.slice(-1)
console.log(unique2)