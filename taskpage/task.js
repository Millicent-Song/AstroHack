function addTask() {
    // acessing the input element with id = "taskInput"
    const taskInput = document.getElementById('taskInput');
    // accessig the unordered list element with id = "taskList"
    const taskList = document.getElementById('taskList');

    // checking if the input is not empty
    if (taskInput.value.trim() !== "") {
        // creating a list item element to hold the task
        const li = document.createElement('li');

        // creating a checkbox element 
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function() {
            if (checkbox.checked) {
                taskList.removeChild(li);
            }
        };

        // creating a "span" element ot hold task text
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        // appending the checkbox and task text to the list item
        li.appendChild(checkbox);
        li.appendChild(taskText);

        // appending the list item to the task list
        taskList.appendChild(li);
        // clearing the input field for the next task
        taskInput.value = "";
    }
}