var submitForm = document.querySelector("form.form-inline");
var inputTask = document.getElementById("input-task");
var todoList = document.getElementById("list");

var addTask = () => {
  let newTask = document.createElement('li');
  // __initiation des prop cc pour la transition
  let taskHeight;
  newTask.style.position = "absolute";
  newTask.style.visibility = "hidden";
  newTask.style.opacity = "0";
  newTask.style.padding = "0";
  // __fin transition
  newTask.innerHTML =
    '<div class="">\
  <span> ' + inputTask.value + ' </span>\
  <div>\
  <button class="btn m-1"><i class="fas fa-check-circle"></i></button>\
  <button class="btn m-1"><i class="fas fa-edit"></i></button>\
  <button class="btn m-1"><i class="fas fa-trash-alt"></i></button>\
  </div>\
  </div>'
  todoList.insertBefore(newTask, todoList.firstElementChild);
  // __Init prop css pour transition
  taskHeight = parseInt(window.getComputedStyle(newTask).height) + 10 + "px" // permet la transition à l'entrée et au delete;
  newTask.style.height = "0";
  newTask.style.position = "static";
  newTask.style.visibility = "visible";
  setTimeout(() => {
    newTask.style.opacity = "1";
    newTask.style.height = taskHeight;
    newTask.style.padding = "0.25rem 0";
  }, 10);
  // __fin transition
  inputTask.value = ""
  listenBtn(newTask);
};

var listenBtn = (newTask) => {
  var buttons = newTask.getElementsByTagName('button');
  buttons[0].addEventListener("click", () => validTask(newTask));
  buttons[1].addEventListener("click", () => editTask(newTask));
  buttons[2].addEventListener("click", () => deleteTask(newTask));
}

var validTask = (task) => {
  if (task.className)
    task.className = ""
  else
    task.className = "valided-task";
}

var editTask = () => {}

var deleteTask = (task) => {
  task.className = "deleted-task";
  task.style.height = "0"; // permet la transition au delete
  task.style.padding = "0";
  task.style.opacity = "0";
}

// écouteurs d'événement
submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(event);
});