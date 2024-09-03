"use strict";

const form = document.getElementById("form");
const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");
const addBtn = document.getElementById("add_btn");

function addTask() {
  if (inputBox.value === "") {
    alert("You have to write something❕");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (wura) {
    if (wura.target.tagName === "LI") {
      wura.target.classList.toggle("checked");
      saveData();
    } else if (wura.target.tagName === "SPAN") {
      wura.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

addBtn.addEventListener("click", function (wura) {
  wura.preventDefault();
  addTask();
});
