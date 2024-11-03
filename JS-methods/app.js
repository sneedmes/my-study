// МАССИВЫ

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
let books = ['classic', 'fantasy', 'romance', 'utopia']
let unique = books.slice(2)
console.log(unique)
let unique1 = books.slice(2, 3)
console.log(unique1)
let unique2 = books.slice(-1)
console.log(unique2)

// replace() - заменяет одну часть строки на другую. Чувствителен к регистру
let a = 'are you with me?'
let b = a.replace("are you with me?", 'yes i am')
console.log(b)

// concat() - cоединяет строки
let sum = a.concat(b)
console.log(sum)

// split() - создает массива из строки
let stroka = '123456789'
let array = stroka.split("")
console.log(array)

// padStart() и padEnd() - добавление символов для определенной длины переменной
console.log(stroka.padStart(13, '0'))
console.log(stroka.padEnd(13, '0'))

// ОБЪЕКТЫ

// keys() - возвращает ключи объекта
let obj = {name: 'Susanna', age: 18}
console.log(Object.keys(obj))

// values() - возвращает значения объекта
console.log(Object.values(obj))

// create() - создаёт новое значение из существующего
obj.name = 'chloe'
console.log(Object.values(obj))

// assign() - используется для копирования свойств объекта в другой объект
let isPerson = {typeOf: true}
console.log(Object.assign(obj, isPerson))

// ЧИСЛА

// toFixed() - количество цифр после запятой
let calc = 7/3
console.log(calc.toFixed(4))

// ДОПОЛНИТЕЛЬНЫЕ МЕТОДЫ

// map() - принимает массив и применяет указанную функцию к каждому из элементов массива
let arr = [1,2,3,4,5]
let arr1 = arr.map((sym)=>sym*2)
console.log(arr1)

// spread - (...) - представляет элементы массива как отдельный аргумент (отдельную переменную)
function mult(a, b, c) {return a*b*c}
console.log(mult(...arr))

// filter() - cоздает новый массив, элементы которого удовлетворяют условию
let newArray = arr.filter((sym)=>sym>2)
console.log(newArray)