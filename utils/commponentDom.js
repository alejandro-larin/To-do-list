import { id } from "../script.js";

//  -------------#InputParagraph-------------
function createComponentInputParagraph(nameValue) {
  const inputParagraph = document.createElement("input");

  inputParagraph.value = nameValue;
  inputParagraph.disabled = true;

  const inputParagraphId = (inputParagraph.id = `inputParagraphId-${id}`);
  const inputParagraphClass =
    (inputParagraph.className = `input-paragraph-${id} input-paragraph `);

  return {
    inputParagraph: inputParagraph,
    inputParagraphId: inputParagraphId,
    inputParagraphClass: inputParagraphClass,
  };
}
//  -------------#CheckBox-------------
function createComponentCheckbox(ComponentId) {
  const toggleUnderline = () => {
    const inputId = document.getElementById(ComponentId);
    if (checkBox.checked) {
      inputId.classList.add("through-line");
    } else {
      inputId.classList.remove("through-line");
    }
  };
  const checkBox = document.createElement("input");

  checkBox.type = "checkbox";
  checkBox.onchange = toggleUnderline;
  const checkBoxId = (checkBox.id = `checkBoxId-${id}`);

  return { checkBox: checkBox, checkBoxId: checkBoxId };
}
//  -------------#Edit-------------
function createComponentButtonEdit(ComponentId) {
  const editingCommponent = () => {
    const inputId = document.getElementById(ComponentId);

    if (buttonEdit.textContent === "EDIT") {
      inputId.disabled = false;
      inputId.style.color = "#ba1a4a";
      buttonEdit.textContent = "SAVE";
    } else {
      inputId.style.color = "#eee";
      inputId.disabled = true;
      buttonEdit.textContent = "EDIT";
    }
  };

  const buttonEdit = document.createElement("button");
  buttonEdit.textContent = "EDIT";
  buttonEdit.type = "button";
  buttonEdit.onclick = editingCommponent;

  const buttonEditId = (buttonEdit.id = `buttonEditId-${id}`);
  const buttonEditClass =
    (buttonEdit.className = `btn-edit-${id} btn-edit btn-commponent `);

  return {
    buttonEdit: buttonEdit,
    buttonEditId: buttonEditId,
    buttonEditClass: buttonEditClass,
  };
}
//  -------------#Delete-------------
function createComponentButtonDelete(ComponentId) {
  const deleteCommponent = () => {
    const boxId = document.getElementById(ComponentId);

    MessageUser.Dialog({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      confirmButtonText: "Yes, delete it!",
      successTitle: "Deleted!",
      successText: "Your task has been deleted.",
    })
      .then((result) => {
        if (result == true) {
          boxId.remove();
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const buttonDelete = document.createElement("button");
  buttonDelete.type = "button";
  buttonDelete.textContent = "DELETE";
  buttonDelete.onclick = deleteCommponent;

  const buttonDeleteId = (buttonDelete.id = `buttonDeleteId-${id}`);
  const buttonDeleteClass =
    (buttonDelete.className = ` btn-delete-${id} btn-delete btn-commponent`);

  return {
    buttonDelete: buttonDelete,
    buttonDeleteId: buttonDeleteId,
    buttonDeleteClass: buttonDeleteClass,
  };
}
//  -------------#Box-------------
export function createComponentBoxList(nameTaskValue) {
  const taskBox = document.createElement("div");

  taskBox.style.display = "flex";

  const taskBoxClass = (taskBox.className = `box-task-${id} box-task `);
  const taskBoxId = (taskBox.id = `taskBoxId-${id}`);

  const { inputParagraph, inputParagraphId } =
    createComponentInputParagraph(nameTaskValue);
  const { checkBox } = createComponentCheckbox(inputParagraphId);
  const { buttonEdit } = createComponentButtonEdit(inputParagraphId);
  const { buttonDelete } = createComponentButtonDelete(taskBoxId);

  taskBox.appendChild(inputParagraph);
  taskBox.appendChild(buttonEdit);
  taskBox.appendChild(buttonDelete);

  return { taskBox: taskBox, taskBoxId: taskBoxId, taskBoxClass: taskBoxClass };
}
