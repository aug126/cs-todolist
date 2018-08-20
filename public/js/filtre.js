import { goOut } from "./fonctions.js";

var filtreBtns = document.querySelectorAll('#filtre>button');
var list = document.getElementById("list");

var changeFiltre = async (event) => {
  var btn = event.target;
  var filtreClass = btn.dataset.filtre;
  btn.classList.toggle('btn-primary');
  if (list.classList.contains(filtreClass))
  {
    list.classList.remove(filtreClass);
    var leaveList = Array.from(list.querySelectorAll('.' + filtreClass))
    leaveList.forEach((li) => {
      goOut(li, list);
    })
  } else {
    list.classList.add(filtreClass);
    var outLi = Array.from(list.querySelectorAll("." + filtreClass + ".out"))
    outLi.forEach((li) => {
      li.classList.add("go-in");
      li.classList.remove("out");
      setTimeout(() => {
        li.style.height = li.dataset.height + "px";
        li.classList.remove("go-in");
      }, 100)
    })
  }
}

Array.from(filtreBtns).forEach( (btn) => {
  btn.addEventListener("click", () => changeFiltre(event))
})