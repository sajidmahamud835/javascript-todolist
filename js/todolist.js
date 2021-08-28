/*------------------------
     Global Variables
------------------------- */

//selcetor variables
const addTaskButton = document.getElementById('add-task-button');
const addTaskInput = document.getElementById('add-task-input');
const taskList = document.getElementById('task-list');
const inputCheckboxs = document.getElementsByClassName('far');

//statics variables


/* -------------------
    Add Task Function
---------------------- */

//Event handeler
function addTask() {
    console.log('add task button action started')

    //creates ui, li, input and span tag
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const checkbox = document.createElement('i');
    const span = document.createElement('span');

    span.innerText = addTaskInput.value; // puts the inputed value in the span tag.

    //set attribue for the input tag and make it a checkbox.
    checkbox.setAttribute("class", "far fa-check-square");
    checkbox.classList.add('me-2')


    li.classList.add('list-group-item'); //adds a class name.
    li.appendChild(checkbox); //appending its child elements.
    li.appendChild(span)

    ul.classList.add('list-group')
    ul.appendChild(li)

    taskList.appendChild(ul)

    // clear input field
    addTaskInput.value = ''

    //call event listener after adding each task
    eventListener()

}

//Event listener

addTaskButton.addEventListener('click', function () {
    console.log('add task button clicked')
    addTask();
});


addTaskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        console.log('enter key pressed')
        addTask();
    }
});


/* -------------------
    Done Task Funciton
---------------------- */

console.log(inputCheckboxs[0]);


//Eevent listener
function eventListener() {
    for (inputCheckbox of inputCheckboxs) {
        inputCheckbox.addEventListener('click', function (event) {

            console.log('checkbox checked');
            event.target.classList.add('fas')
            event.target.parentNode.classList.add('disabled');

        });
    }
}

