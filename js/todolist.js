//Global Variables
const addTaskButton = document.getElementById('add-task-button');
const addTaskInput = document.getElementById('add-task-input');
const taskList = document.getElementById('task-list');

/* -------------------
    Add Task Function
---------------------- */

//Event handeler
function addTaskButtonAction() {
    console.log('add task button action started')

    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');

    span.innerText = addTaskInput.value;

    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    checkbox.classList.add('me-2')

    li.classList.add('list-group-item');
    li.appendChild(checkbox);
    li.appendChild(span)

    ul.classList.add('list-group')
    ul.appendChild(li)

    taskList.appendChild(ul)

    // clear input field
    addTaskInput.value = ''

}

//Event listener

addTaskButton.addEventListener('click', function () {
    console.log('add task button clicked')
    addTaskButtonAction();
});


addTaskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        console.log('enter key pressed')
        addTaskButtonAction();
    }
});