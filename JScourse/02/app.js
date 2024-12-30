const inputElement = document.getElementById("title")
const createBtn = document.getElementById("create")
const listElement = document.getElementById("list")


const notes = [
    {
        title: 'Create plan',
        completed: false
    },
    {
        title: 'Play footbal',
        completed: true
    }
]

function render(){
    listElement.innerHTML = ""
    if (notes.length === 0) {
        listElement.innerHTML = '<p>No elements</p>'
    }
    for (let i=0; i<notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i],i))
    }
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0){
        return alert("Write smth in input!")
    }
    const newNote = {
        title: inputElement.value,
        completed: false
    }
    notes.push(newNote)
    render()
    inputElement.value = ""
}

listElement.onclick = function (event) { // принимает элемент по которому идет клик
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove'){
            notes.splice(index, 1)
        }
        render()
    }
}

function getNoteTemplate(note, index){
    return `
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${note.completed ? 'text-decoration-line-through' : ''}" data-index="${index}">${note.title}</span>
          <span>
            <span class="btn btn-small
             btn-${note.completed ? 'warning' : 'success'}"
             data-type="toggle"
             data-index="${index}">&check;</span>
            <span class="btn btn-small
             btn-danger"
             data-type="remove"
             data-index="${index}"
             >&times;</span>
          </span>
        </li>
    `
}

