const loginForm = document.getElementById("loginForm");
const loginInput = document.getElementById("loginInput");
const greeting = document.getElementById("greeting");
const logoutButton = document.getElementById("logoutButton");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const hours = time.getHours();

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  if (hours > 6 && hours < 12)
    greeting.innerText = `Good morning, ${username}.`;
  else if (hours > 12 && hours < 18)
    greeting.innerText = `Good afternoon, ${username}.`;
  else if (hours > 18 && hours < 22)
    greeting.innerText = `Good evening, ${username}.`;
  else greeting.innerText = `Good night, ${username}.`;

  logoutButton.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
}

function clickLogoutButton() {
  localStorage.removeItem("username");
  window.location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}

logoutButton.addEventListener("click", clickLogoutButton);
