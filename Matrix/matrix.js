const createMatrix = document.querySelector("#create-matrix")
const getResult = document.querySelector("#result-button")
const result = document.querySelector("#result")
let c = document.querySelector(".c")
let matrixName = document.querySelector(".matrix-name")
let isCreated = false
let isCounted = false

function createMatrixFunction (){
    if (isCreated){
        document.querySelector("#matrix-main").innerHTML=""
        document.querySelector("#matrix-vector").innerHTML=""
        isCreated = false
    }
    let m = parseInt(document.getElementById("rows-columns").value)
    let matrixMain = document.querySelector("#matrix-main")
    let matrixVector = document.querySelector("#matrix-vector")
    for (let i=0; i<m; i++){
        let matrixMainDiv = document.createElement('div')
        matrixMainDiv.id='row'
        matrixMain.appendChild(matrixMainDiv)
        for (let j=0; j<m; j++){
            let firstResult = document.createElement('input')
            firstResult.id='matrix-row'
            matrixMainDiv.appendChild(firstResult)
        }
    }
    isCreated = true
    for (let k=0; k<m; k++){
        let matrixVectorDiv = document.createElement('input')
        matrixVectorDiv.id='matrix-column'
        matrixVector.appendChild(matrixVectorDiv)
    }
    getResult.innerHTML="<button id='matrix-vector' class='content-button'>Получить результат умножения</button>"
}
function getResultFunction(){
    if (isCounted){
        document.querySelector("#matrix-result").innerHTML=""
        isCounted = false
    }
    let m = parseInt(document.getElementById("rows-columns").value)
    const itemsA = document.querySelectorAll('#matrix-row')
    const elemA = []
    itemsA.forEach((item) => {
        elemA.push(parseInt(...item.value))
    })
    let A = []
    for (let i=0; i<elemA.length/m; i++){
        A[i] = elemA.slice((i*m), (i*m)+m)
    }

    const itemsB = document.querySelectorAll('#matrix-column')
    const elemB = []
    itemsB.forEach((item) => {
        elemB.push(parseInt(...item.value))
    })
    let B = []
    for (let j=0; j<elemB.length; j++){
        B[j] = elemB.slice(j, j+1)
    }

    let C = []
    for (let k=0; k<m; k++){
        C[k]=0
        for (let p=0; p<m; p++){
            C[k]+=A[k][p]*B[p]
        }
    }
    c.style.display = "block"
    matrixName.innerHTML="<h3>Матрица C</h3>"
    let matrixResult = document.querySelector('#matrix-result')
    for (let p=0; p<C.length; p++){
        let matrixResultDiv = document.createElement('input')
        matrixResultDiv.id='matrix-column'
        matrixResultDiv.setAttribute('placeholder', C[p])
        matrixResult.appendChild(matrixResultDiv)
    }
    isCounted = true
}
createMatrix.addEventListener("click", createMatrixFunction)
getResult.addEventListener("click", getResultFunction)