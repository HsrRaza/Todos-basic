
var add = document.querySelector('#add');
var inp = document.querySelector('#todo-input');
var todoList = document.querySelector('#todo-List');
var todos = JSON.parse(localStorage.getItem('todos')) || []; 

function renderTodos() {
    todoList.innerHTML = ''; 
    todos.forEach((todo, index) => {
        var li = document.createElement('li');
        li.classList.add('list');
        li.dataset.index = index; 

        var span = document.createElement('span');
        span.textContent = todo.text;

        var btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.classList.add('delete-btn');

        li.appendChild(span);
        li.appendChild(btn);
        todoList.appendChild(li);
    });
}

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}


add.addEventListener('click', function () {
    if (inp.value.trim() === '') return; 

    
    todos.push({ text: inp.value.trim() });
    inp.value = '';

    saveToLocalStorage(); 
    renderTodos(); 
});

// Delete a task using event delegation
todoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        var li = e.target.parentElement; 
        var index = li.dataset.index; 
        todos.splice(index, 1); 
        saveToLocalStorage(); 
        renderTodos(); 
    
    }
});

window.addEventListener('load', function () {
    renderTodos();
});

    
    



    



         

