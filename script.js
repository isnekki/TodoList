const form = document.querySelector('form')

const addTodoHandler = (e) => {
    e.preventDefault()
    const todoInput = document.querySelector('.todoInput')
    if (todoInput.value === null || todoInput.value === '') return
    let todoList = document.querySelector('.todoList')
    if (todoList === null) {
        const todoContainer = document.querySelector('.todoContainer')
        const newTodoList = document.createElement('ul')
        newTodoList.className = 'todoList'
        todoContainer.appendChild(newTodoList)
        todoList = newTodoList
    }
    const todo = document.createElement('li')
    const todoText = document.createElement('h2')
    todo.className = 'todo'
    // todo.id = todoList.children.length
    todo.addEventListener('click', completeTodoHandler)
    todo.addEventListener('contextmenu', deleteTodoHandler)
    todoText.className = 'todoText'
    todoText.textContent = todoInput.value
    todo.appendChild(todoText)
    todoList.appendChild(todo)
    todoInput.value = ''
}

const completeTodoHandler = (e) => {
    const todo = e.srcElement.parentNode
    todo.classList.add('finished')
}

const deleteTodoHandler = (e) => {
    e.preventDefault()
    const todoList = document.querySelector('.todoList')
    const todo = e.srcElement.parentNode
    todoList.removeChild(todo)
}

form.addEventListener('submit', addTodoHandler)