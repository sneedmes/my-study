const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const time = document.querySelector("#time")

const target = new Date("2025-02-01T01:59:00")

function render(){
    const currentDate = new Date()
    const left = target - currentDate
    const leftDays = Math.floor(left / (1000 * 60 * 60 * 24));
    const leftHours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const leftMinutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    const leftSeconds = Math.floor((left % (1000 * 60)) / 1000);

    days.innerHTML=leftDays
    hours.innerHTML=leftHours
    minutes.innerHTML=leftMinutes
    seconds.innerHTML=leftSeconds

    if (left < 0){
        clearInterval(interval)
        time.innerHTML="Timeout!"
    }
}
const interval = setInterval(render, 1000)

