// ADD NEW TODO
const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemsEl = document.querySelectorAll(".todo__item");
const doneItemEl = document.querySelectorAll(".done");
function addTodo() {
  todoInputEl.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      let newListItem = createListItem(todoInputEl.value);
        // todoListEl.appendChild(newListItem);
        todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
        todoInputEl.value = "";
    }
  })
}

function createListItem(text) {
  const newListElement = document.createElement("li");
  newListElement.textContent = text;
  newListElement.setAttribute("class", "todo__item");
  return newListElement;
}
addTodo();


// DELELTE WHAT'S DONE
// function toggleDone() {
//   for (let elem of todoItemsEl) {
//     elem.addEventListener("click", function() {
//       elem.classList.toggle("done");
//     })
//   }
// }

function toggleDone () {
  todoListEl.addEventListener("click", function (event) {
    if (event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("done");
    }
  })
}
toggleDone();
function toggleUndone() {
  todoListEl.addEventListener("click", function (event) {
    if (event.target.classList.contains("done") && event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("undone");
    }
  })
}

// MORE FUNCTIONALITIES
// - Only scroll the list
// - Add the "X" to mark as done
// - Bring the done to the end of the list
// - Add audio