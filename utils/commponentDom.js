import { id } from "../script.js";

//  -------------#InputParagraph-------------
function createComponentInputParagraph(nameValue) {
  const inputParagraph = document.createElement("input");

  inputParagraph.value = nameValue;
  inputParagraph.disabled = true;

  const inputParagraphId = (inputParagraph.id = `inputParagraphId-${id}`);
  const inputParagraphClass =
    (inputParagraph.className = `input-paragraph input-paragraph-${id}`);

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
  const buttonEditClass =
    (buttonEdit.className = `btn-commponent btn-edit btn-edit-${id}`);

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
  buttonDelete.textContent = "Delete";
  buttonDelete.onclick = deleteCommponent;

  const buttonDeleteId = (buttonDelete.id = `buttonDeleteId-${id}`);
  const buttonDeleteClass =
    (buttonDelete.className = `btn-commponent btn-delete btn-delete-${id}`);

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

  const taskBoxClass = (taskBox.className = `box-task box-task-${id}`);
  const taskBoxId = (taskBox.id = `taskBoxId-${id}`);

  const { inputParagraph, inputParagraphId } =
    createComponentInputParagraph(nameTaskValue);
  const { checkBox } = createComponentCheckbox(inputParagraphId);
  const { buttonEdit } = createComponentButtonEdit(inputParagraphId);
  const { buttonDelete } = createComponentButtonDelete(taskBoxId);

  taskBox.appendChild(checkBox);
  taskBox.appendChild(inputParagraph);
  taskBox.appendChild(buttonEdit);
  taskBox.appendChild(buttonDelete);

  return { taskBox: taskBox, taskBoxId: taskBoxId, taskBoxClass: taskBoxClass };
}
