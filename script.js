import { createComponentBoxList } from "./utils/commponentDom.js";

const nameTask = document.getElementById("nameTask");
const container = document.getElementById("container-task");
const btnAdd = document.getElementById("btnAdd");

export let id = 0;

btnAdd.addEventListener("click", () => {
  const { taskBox } = createComponentBoxList(nameTask.value);
  container.appendChild(taskBox);
  id++;

  MessageUser.Successful("Your task has been successfully added");
});
