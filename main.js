const taskForm = document.querySelector('#task-form');
const submitBtn = document.querySelector('#submit-button');
const deleteBtn = document.querySelectorAll('#delete-btn');
const taskList = document.querySelector('#task-list');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formValidation();
    // const name = taskForm.elements['task-name'].value;
    // const status = taskForm.elements['task-status'].value;
    // // console.log(taskForm.elements['task-status'].value);
    // const task = document.createElement('tr');

    // task.innerHTML = `
    // <td>${name}</td>
    // <td>${status == '0' ? '<span class="badge bg-secondary">In Progress</span>' : '<span class="badge bg-success">Complete</span>'}
    // </td>
    // <td>
    //     <div class="d-flex justify-content-start">
    //         <button type="button" class="btn btn-danger btn-sm me-2" id="delete-btn">
    //             <i class="fa fa-trash"></i>
    //         </button>
    //         <button type="button" class="btn btn-primary btn-sm">
    //             <i class="fa fa-edit"></i>
    //         </button>
    //     </div>
    // </td>
    // `;

    // taskList.append(task);
})

let formValidation = () => {
    const name = taskForm.elements['task-name'].value;
    if (name === "") {
      console.log("failure");
    //   msg.innerHTML = "Task cannot be blank";
    } else {
      console.log("success");
    //   msg.innerHTML = "";
    }
  };
  