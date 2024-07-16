document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', function() {
        const todoText = todoInput.value.trim();

        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.innerHTML = `
                <span>${todoText}</span>
                <button class="delete-btn">Delete</button>
            `;
            todoList.appendChild(todoItem);
            todoInput.value = '';

            // Add delete functionality
            const deleteBtn = todoItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function() {
                todoItem.remove();
            });
        }
    });

    // Press Enter to add task
    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addBtn.click();
        }
    });
});
