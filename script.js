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
function createComponentInputinputParagraph(name) {
  const inputParagraph = document.createElement("input");

  inputParagraph.value = name;
  inputParagraph.disabled = true;

  const inputParagraphId = (inputParagraph.id = `inputParagraphId-${id}`);

  return inputParagraph;
}

function createComponentCheckbox() {
  const checkBox = document.createElement("input");

  checkBox.type = "checkbox";
  const checkBoxId = (checkBox.id = `checkBoxId-${id}`);

  return checkBox;
}

function createComponentButtonEdit(inputParagraphId) {
  const editingCommponent = () => {
    const inputId = document.getElementById(inputParagraphId);
    inputId.disabled = false;
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

  const inputParagraph = createComponentInputinputParagraph(nameTask.value);
  const checkBox = createComponentCheckbox();
  const buttonEdit = createComponentButtonEdit(`inputParagraphId-${id}`);
  const buttonDelete = createComponentButtonDelete(taskBoxId);

  taskBox.appendChild(checkBox);
  taskBox.appendChild(inputParagraph);
  taskBox.appendChild(buttonEdit);
  taskBox.appendChild(buttonDelete);

  return taskBox;
}
