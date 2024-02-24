document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const label = document.createElement('label');
      label.textContent = taskText;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-btn';
  
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      deleteButton.addEventListener('click', function() {
        li.remove();
      });
  
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          label.classList.add('completed');
        } else {
          label.classList.remove('completed');
        }
      });
    }
  });