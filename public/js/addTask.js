import {
  inputError,
  takeOffError,
  goOut
} from './fonctions.js'

var submitForm = document.querySelector("form.form-inline");
var inputTask = document.getElementById("input-task");
var todoList = document.getElementById("list");

var addTask = () => {
  if (inputError(inputTask)) {
    inputTask.closest("form").classList.add("error");
    return;
  }
  takeOffError(inputTask);
  newLi(inputTask.value, "todo");
  inputTask.value = ""
};

export var newLi = (text, state) => {
  let newTask = document.createElement('li');
  newTask.className = state;
  newTask.innerHTML =
    `<div class="">
  <span> ` + text + ` </span>
  <span> <input class="form-control" value="` + text + `"> </span>
  <div>
  <button class="btn m-1"><i class="fas fa-check-circle"></i></button>
  <button class="btn m-1"><i class="fas fa-edit"></i></button>
  <button class="btn m-1"><i class="fas fa-trash-alt"></i></button>
  </div>
  </div>`
  todoList.insertBefore(newTask, todoList.firstElementChild);
  // __Init prop css pour transition
  newTask.dataset.height = parseInt(window.getComputedStyle(newTask).height);
  newTask.style.height = newTask.dataset.height + "px";
  listenBtn(newTask);
}

var listenBtn = (newTask) => {
  var buttons = newTask.getElementsByTagName('button');
  buttons[0].addEventListener("click", () => validTask(newTask));
  buttons[1].addEventListener("click", () => editTask(newTask));
  buttons[2].addEventListener("click", () => deleteTask(newTask));
  newTask.querySelector("input").addEventListener("keypress", () => {
    if (event.keyCode == 13) editTask(newTask);
  })
}

var validTask = (task) => {
  if (task.classList.contains("valided-task"))
    task.classList.replace("valided-task", "todo")
  else {
    task.classList.add("valided-task");
    task.classList.remove("todo");
    task.classList.remove("deleted-task");
    goOut(task, list);
  }
}
var editTask = (task) => {
  var input = task.querySelector("input");
  task.classList.toggle("editing-task");
  var icon = task.querySelector('button:nth-of-type(2)>i');
  icon.classList.toggle("fa-save");
  icon.classList.toggle("fa-edit");
  list.classList.toggle("editing");
  if (task.classList.contains("editing-task")) {
    input.focus();
    input.selectionEnd = 1000;
  } else {
    task.querySelector("span:nth-of-type(1)").innerText = input.value;
  }
  inputTask.disabled = !inputTask.disabled;
}

var deleteTask = (task) => {
  if (task.classList.contains("deleted-task"))
    task.classList.replace("deleted-task", "todo");
  else {
    task.classList.add("deleted-task");
    task.classList.remove("todo");
    task.classList.remove("valided-task");
    goOut(task, list);
  }

  // task.style.height = "0"; // permet la transition au delete
  // task.style.padding = "0";
  // task.style.opacity = "0";
}

// écouteurs d'événement
submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(event);
});

inputTask.addEventListener("focus", () => takeOffError(event));