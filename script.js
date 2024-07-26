const nameTask = document.getElementById("nameTask");
const container = document.getElementById("container");
const btnSend = document.getElementById("btnSend");
let id = 0;
btnSend.addEventListener("click", () => {
  const BoxLisTask = createComponentBoxList();
  container.appendChild(BoxLisTask);

  id++;
});

// Creating commponents for html Dom
function createComponentParagraph(name) {
  const paragraph = document.createElement("p");
  const text = document.createTextNode(name);

  paragraph.appendChild(text);
  const paragraphId = (paragraph.id = `paragraphId-${id}`);

  return paragraph;
}

function createComponentCheckbox() {
  const checkBox = document.createElement("input");

  checkBox.type = "checkbox";
  const checkBoxId = (checkBox.id = `checkBoxId-${id}`);

  return checkBox;
}

function createComponentButtonEdit(taskBoxId) {
  const editingCommponent = () => {
    console.log(buttonEditId);
  };

  const buttonEdit = document.createElement("button");
  const text = document.createTextNode("Edit");

  buttonEdit.type = "button";
  buttonEdit.appendChild(text);
  buttonEdit.onclick = editingCommponent;
  const buttonEditId = (buttonEdit.id = `buttonEditId-${id}`);

  return buttonEdit;
}

function createComponentButtonDelete(taskBoxId) {
  const deleteCommponent = () => {
    const boxId = document.getElementById(taskBoxId);
    boxId.remove();
  };

  const buttonDelete = document.createElement("button");
  const text = document.createTextNode("Delete");

  buttonDelete.type = "button";
  buttonDelete.appendChild(text);
  buttonDelete.onclick = deleteCommponent;

  const buttonDeleteId = (buttonDelete.id = `buttonDeleteId-${id}`);

  return buttonDelete;
}

function createComponentBoxList() {
  const taskBox = document.createElement("div");

  taskBox.style.display = "flex";
  taskBox.className = `box task-${id}`;
  const taskBoxId = (taskBox.id = `taskBoxId-${id}`);

  const paragraph = createComponentParagraph(nameTask.value);
  const checkBox = createComponentCheckbox();
  const buttonEdit = createComponentButtonEdit(taskBoxId);
  const buttonDelete = createComponentButtonDelete(taskBoxId);

  taskBox.appendChild(checkBox);
  taskBox.appendChild(paragraph);
  taskBox.appendChild(buttonEdit);
  taskBox.appendChild(buttonDelete);

  return taskBox;
}
