import {
  goOut,
} from "./fonctions.js";

var filtreBtns = document.querySelectorAll('#filtre>button');
var list = document.getElementById("list");

export var changeFiltre = async (filtre) => {
  document.querySelector('button[data-filtre="' + filtre + '"]').classList.toggle('btn-primary');
  if (list.classList.contains(filtre)) {
    list.classList.remove(filtre);
    var leaveList = Array.from(list.querySelectorAll('.' + filtre))
    console.log(leaveList);
    leaveList.forEach((li) => {
      goOut(li, list);
    })
  } else {
    list.classList.add(filtre);
    var outLi = Array.from(list.querySelectorAll("." + filtre + ".out"))
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

Array.from(filtreBtns).forEach((btn) => {
  btn.addEventListener("click", (event) => {
    var filtre = event.target.dataset.filtre;
    changeFiltre(filtre);
  });
})