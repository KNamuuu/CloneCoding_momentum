const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");

let toDos = [];

const TODOS_KEY = "todos";

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";

  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };

  paintToDo(newToDoObj);
  toDos.push(newToDoObj);

  saveToDos(toDos);
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.appendChild(span);
  li.appendChild(button);
  li.id = newTodo.id;

  span.innerText = newTodo.text;

  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  button.id = "removeButton";

  todoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();

  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);
