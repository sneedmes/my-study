let array = []
const countElements = (array) => {
    const count = {};
    array.forEach(f => {
        if (!count[f]) {
            count[f] = 1;
        } else {
            count[f] ++;
        }
    });
    return count;
};
btn.onclick = function (){
    let elem1 = document.getElementById("elem-1").value
    let elem2 = document.getElementById("elem-2").value
    let elem3 = document.getElementById("elem-3").value
    let elem4 = document.getElementById("elem-4").value
    let elem5 = document.getElementById("elem-5").value
    let elem6 = document.getElementById("elem-6").value
    array.push(elem1, elem2, elem3, elem4, elem5, elem6)
    let result = JSON.stringify(countElements(array))
    document.getElementById("result").innerHTML="<h3>Результат выполнения: " + result.map(el=>{return el}) + "</h3>"
    array = []
}





