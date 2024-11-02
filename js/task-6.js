function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector(`input[type="number"]`);
const create = document.querySelector(`button[data-create]`);
const destroy = document.querySelector(`button[data-destroy]`);
const box = document.querySelector("#boxes");

let boxSize = 30;

create.addEventListener("click", handleCreate);
destroy.addEventListener("click", destroyBoxes);

function handleCreate(event) {
  event.preventDefault();
  if (Number(input.value) < 0 || Number(input.value) > 100) {
    return;
  }
  createBoxes(+input.value);

  input.value = "";
}

function destroyBoxes(event) {
  box.innerHTML = "";
  input.value = "";
  boxSize = 30;
}

function createBoxes(amount) {
  box.innerHTML = "";
  boxSize = 30;
  const array = [];
  for (let index = 0; index < amount; index++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    array.push(newBox);

    boxSize += 10;
  }
  box.append(...array);
}
