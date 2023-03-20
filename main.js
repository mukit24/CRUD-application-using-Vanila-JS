const taskForm = document.querySelector('#task-form');
const submitBtn = document.querySelector('#submit-button');
const deleteBtn = document.querySelectorAll('#delete-btn');
const taskList = document.querySelector('#task-list');
const errorMsg = document.querySelector('#error-msg');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formValidation();
})

let formValidation = () => {
  const name = taskForm.elements['task-name'].value;
  const status = taskForm.elements['task-status'].value;

  if (name === "") {
    console.log("failure");
    errorMsg.innerHTML = "Task name cannot be blank";
  } else {
    console.log("success");
    errorMsg.innerHTML = "";
    taskForm.reset();
    createTask(name, status);
  }
};

let createTask = (name, status) => {
  const task = document.createElement('tr');

  task.innerHTML = `
    <td id="data-name">${name}</td>
    <td>${status == '0' ? '<span class="badge bg-secondary">In Progress</span>' : '<span class="badge bg-success">Complete</span>'}
    </td>
    <td>
        <div class="d-flex justify-content-start">
            <button type="button" class="btn btn-danger btn-sm me-2" onClick="deleteTask(this)">
                <i class="fa fa-trash"></i>
            </button>
            <button type="button" class="btn btn-primary btn-sm"
            onClick="editTask(this)">
                <i class="fa fa-edit"></i>
            </button>
        </div>
    </td>
    `;
  taskList.append(task);
}

let deleteTask = (e) => {
  e.closest('tr').remove();
}

let editTask = (e) => {
  taskForm.elements['task-name'].value = e.closest('tr').querySelector('#data-name').innerText;
  e.closest('tr').remove();
}
