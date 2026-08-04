document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener('click', addTask);

    function addTask() {
        const text = taskInput.value.trim();
        if (text === '') return;

        const li = document.createElement('li');
        li.textContent = text;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Completar';
        completeBtn.style.padding = '6px 12px';
        completeBtn.style.fontSize = '0.8rem';
        
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(completeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});
