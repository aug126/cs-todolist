var btnAjout = document.getElementById("add-task");
var inputTask = document.getElementById("task");
var todoList = document.getElementById("list");

var addTask = () => {
  let newTask = document.createElement('li');
  newTask.innerHTML =
    '<div class="bg-body">\
      <span> ' + inputTask.value + ' </span>\
      <div>\
        <button class="btn m-1"><i class="fas fa-check-circle"></i></button>\
        <button class="btn m-1"><i class="fas fa-edit"></i></button>\
        <button class="btn m-1"><i class="fas fa-trash-alt"></i></button>\
      </div>\
      </div>'
  console.log(newTask);
  todoList.insertBefore(newTask, todoList.firstElementChild);
  inputTask.value = "";
};

btnAjout.addEventListener("click", addTask);