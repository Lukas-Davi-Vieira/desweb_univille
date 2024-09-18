// Seleção de elementos da DOM
const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task-input');
const addTaskBtn = document.getElementById('add-task-btn');

let draggedItem = null;

// Adicionei uma nova tarefa à lista
addTaskBtn.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  
  if (taskText) {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.classList.add('todo-item');
    newTask.setAttribute('draggable', 'true');
    todoList.appendChild(newTask);
    addDragAndDropListeners(newTask);
    newTaskInput.value = ''; // Limpa o campo de entrada
  }
});

// Função para adicionar eventos de drag and drop
function addDragAndDropListeners(item) {
  item.addEventListener('dragstart', function () {
    draggedItem = item;
    setTimeout(() => {
      item.classList.add('dragging');
    }, 0);
  });

  item.addEventListener('dragend', function () {
    setTimeout(() => {
      draggedItem = null;
      item.classList.remove('dragging');
    }, 0);
  });

  item.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  item.addEventListener('drop', function () {
    if (draggedItem) {
      todoList.insertBefore(draggedItem, item);
    }
  });
}

// Função para reorganizar tarefas com drag and drop
todoList.addEventListener('dragover', function (e) {
  e.preventDefault();
  const afterElement = getDragAfterElement(todoList, e.clientY);
  if (draggedItem && afterElement) {
    todoList.insertBefore(draggedItem, afterElement);
  }
});

// Retorna o elemento que está abaixo do item arrastado
function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.todo-item:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}
