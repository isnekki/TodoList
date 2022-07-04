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
    todoText.className = 'todoText'
    todoText.textContent = todoInput.value
    todo.appendChild(todoText)
    todoList.appendChild(todo)
    todoInput.value = ''
}

form.addEventListener('submit', addTodoHandler)