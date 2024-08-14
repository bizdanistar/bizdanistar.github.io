const todoList = [
  {
    id: 1,
    taskName: "Buy Grocery",
    status: true,
  },
  {
    id: 2,
    taskName: "Send Email",
    status: false,
  },
  {
    id: 3,
    taskName: "Bake a Cake",
    status: true,
  },
  {
    id: 4,
    taskName: "Complete Project Report",
    status: false,
  },
  {
    id: 5,
    taskName: "Call the Electrician",
    status: true,
  },
  {
    id: 6,
    taskName: "Book Doctor's Appointment",
    status: false,
  },

];
const div = document.querySelector('.task');

const displayList = function() {
  div.innerHTML = ''; // Clear the list before displaying to avoid duplication
  todoList.forEach((element, index) => {
    let todo = 
    `<div class='task1'>
    <div>
      <p>${element.id}</p>
      </div>
      <div>
      <p>${element.taskName}</p>
      </div>
      <div>
      <p>${element.status ? "✅" : "❌"}</p>
      </div>
      <div>
      <button class="remove" data-index="${index}">Remove <i class="fa-solid fa-trash"></i></button>
      </div>
    </div>`;
    div.insertAdjacentHTML('beforeend', todo);
  });

  const removeButtons = document.querySelectorAll('.remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index'); // Get the index of the task
      todoList.splice(index, 1); // Remove the task from the list
      displayList(); // Re-render the list
    });
  });
};

displayList();


const addBtn = document.querySelector('.addtaskBtn')
const addtaskInput = document.getElementById('addtaskInput')
const check = document.getElementById('check')

const addEvent = function(){
  addBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let newId = todoList.length +1;
    let arr = {
      id: newId,
      taskName: addtaskInput.value,
      status: check.checked, 
    };
    
    todoList.push(arr);
    displayList(); 
    console.log(arr);
   
  });
};

addEvent();







