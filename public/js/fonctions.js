var inputError = (input) => {
  if (input.value == "")
    return true;
  return false;
}

var takeOffError = () => {
  event.currentTarget.closest("form").classList.remove("error");
}

var goOut = (task, list) => {
  if (list.classList.contains(task.className))
    return ;
  task.classList.add("go-out");
  task.style.height = 0;
  setTimeout(() => {
    task.classList.remove("go-out");
    task.classList.add("out");
  },700);
}

export {inputError, takeOffError, goOut}