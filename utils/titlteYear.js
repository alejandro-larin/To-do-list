const date = new Date();

const title = document.getElementById("title");
const year = date.getFullYear();

title.textContent += ` ${year}`;
