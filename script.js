const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Add event listeners

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  console.log("drag start");
}

function dragEnd() {
  console.log("drag end");
}

function dragOver() {
  console.log("drag ove");
}

function dragEnter() {
  console.log("drag enter");
}

function dragLeave() {
  console.log("drag leave");
}

function dragDrop() {
  console.log("drag drop");
}
