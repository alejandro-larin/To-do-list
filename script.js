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

    if (buttonEdit.textContent === "Edit") {
      inputId.disabled = false;
      buttonEdit.textContent = "Save";
    } else {
      inputId.disabled = true;
      buttonEdit.textContent = "Edit";
    }
  };

  const buttonEdit = document.createElement("button");
  buttonEdit.textContent = "Edit";
  buttonEdit.type = "button";
  buttonEdit.onclick = editingCommponent;

  const buttonEditId = (buttonEdit.id = `buttonEditId-${id}`);
  // const buttonDeleteClass =
  //   (buttonDelete.className = `btn-commponent btn-delete   btn-delete-${id}`);

  return buttonEdit;
}

function createComponentButtonDelete(taskBoxId) {
  const deleteCommponent = () => {
    const boxId = document.getElementById(taskBoxId);
    boxId.remove();
  };

  const buttonDelete = document.createElement("button");
  buttonDelete.type = "button";
  buttonDelete.textContent = "Delete";
  buttonDelete.onclick = deleteCommponent;

  const buttonDeleteId = (buttonDelete.id = `buttonDeleteId-${id}`);
  const buttonDeleteClass =
    (buttonDelete.className = `btn-commponent btn-delete   btn-delete-${id}`);

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
