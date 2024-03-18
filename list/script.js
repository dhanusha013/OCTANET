function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const todoList = document.getElementById('todo-list');
        const taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        todoList.appendChild(taskElement);

        // Clear input after adding task
        taskInput.value = '';
    }
}

function removeTask(button) {
    const taskElement = button.parentNode;
    const todoList = document.getElementById('todo-list');
    todoList.removeChild(taskElement);
}