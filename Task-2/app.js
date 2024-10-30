// 1-й метод
const setMethod = (argument) => {
    return Array.from(new Set(argument))
}
// 2-ой метод
const forEachMethod = (argument) => {
    const unique = {};
    argument.forEach(item => {
        unique[item] = true;
    });
    return Object.keys(unique)
}

let arrayFirst =[]
btn.onclick = () => {
    let elem1 = document.getElementById("elem-1").value
    let elem2 = document.getElementById("elem-2").value
    let elem3 = document.getElementById("elem-3").value
    let elem4 = document.getElementById("elem-4").value
    let elem5 = document.getElementById("elem-5").value
    arrayFirst.push(elem1, elem2, elem3, elem4, elem5)
    let result = JSON.stringify(setMethod(arrayFirst))
    document.getElementById("result").innerHTML="<h3>Результат выполнения: " + result + "</h3>"
    arraySecond = []
}
let arraySecond = []
btn1.onclick = () => {
    let elem6 = document.getElementById("elem-6").value
    let elem7 = document.getElementById("elem-7").value
    let elem8 = document.getElementById("elem-8").value
    let elem9 = document.getElementById("elem-9").value
    let elem10 = document.getElementById("elem-10").value
    arraySecond.push(elem6, elem7, elem8, elem9, elem10)
    let result = JSON.stringify(forEachMethod(arraySecond))
    document.getElementById("result1").innerHTML="<h3>Результат выполнения: " + result + "</h3>"
    arraySecond = []
}