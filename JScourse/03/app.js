const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

let mode = "full"

function setMode(modeName){
    return function () {
        mode = modeName
    }
}

fullBtn.onclick = setMode("full")
dateBtn.onclick = setMode("date")
timeBtn.onclick = setMode("time")

setInterval(()=>{
    output.textContent = format(mode)
}, 1000)

function format(mode){
    const now = new Date()
    switch (mode){
        case "time":
            return now.toLocaleTimeString()
        case "date":
            return now.toLocaleDateString()
        case "full":
            return now.toLocaleDateString() + ", " + now.toLocaleTimeString()
    }
}

