const email = document.querySelector("#email");
const firstName = document.querySelector("#first-name");
const message = document.querySelector("#message");
const signInButton = document.querySelector("#signInBtn");
const signUpButton = document.querySelector("#signUpBtn");
const registrationForm = document.querySelector("#reg-form");

const usersFromStorage = JSON.parse(localStorage.getItem("users"));
let users = usersFromStorage ? usersFromStorage : [];
const usersNumFromStorage = JSON.parse(localStorage.getItem("Number of users"));
let usersNum = usersFromStorage ? usersFromStorage : [];

signInButton.addEventListener("click", enterFunc);
function enterFunc() {
  for (let i of users) {
    if (i.name === firstName.value && i.email === email.value) {
      window.location.href = "./main.html";
      return;
    }
  }
  message.classList.remove("hidden");
  message.classList.add("inline-block");
}

signUpButton.addEventListener("click", () => {
  window.location.href = "./registration.html";
});
