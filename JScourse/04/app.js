// const car = {
//     model: 'BMW',
//     year: 2006,
// }
// const json = JSON.stringify(car)
// const parsed = JSON.parse(json)
// console.log(json, parsed)

const list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = [] // большими буквами, потому что не меняется

filter.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user)=>{
        return user.name.toLowerCase().includes(value)
    })
    render(filteredUsers)
})

async function start() {
    list.innerHTML = "Loading..."
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const info = await response.json()
        setTimeout(() => {
            USERS = info
            render(info)
        }, 1000)

    } catch (error) {
        list.style.color = "red"
        list.innerHTML = error.message
    }
}

function render(users = []) {
    if (users.length===0){
        list.innerHTML="No found user"
    } else {
        const html = users.map(toHTML).join("")
        list.innerHTML = html
    }
}

function toHTML(user) {
    return `
        <li class="list-group-item">${user.name}</li>
    `
}

start()