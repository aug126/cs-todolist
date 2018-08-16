var btnAjout = document.getElementById("add-task");
var inputTask = document.getElementById("task");
var todoList = document.getElementById("list");

var addTask = () => {
  let newTask = document.createElement('li');
  newTask.innerText = inputTask.value;
  todoList.insertBefore(newTask, todoList.firstElementChild);
  inputTask.value = "";
};

btnAjout.addEventListener("click", addTask);