document.addEventListener('DOMContentLoaded', function () {
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');
  const newTaskInput = document.getElementById('new-task');

  // Function to add new task to the list
  addBtn.addEventListener('click', function () {
    const taskDescription = newTaskInput.value.trim();
    if (taskDescription !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" id="task${taskList.children.length + 1}">
        <label for="task${taskList.children.length + 1}">${taskDescription}</label>
        <span class="task-details">Deadline: To be determined | Priority: Medium | Label: New</span>
        <button class="delete-btn">Delete</button>
      `;
      taskList.appendChild(li);
      newTaskInput.value = '';
    }
  });

  // Function to delete task when delete button is clicked
  taskList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
      e.target.parentElement.remove();
    }
  });
});
