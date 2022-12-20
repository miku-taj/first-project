const createAccButton = document.querySelector("#createAccBtn");
const firstName = document.querySelector("#first-name");
const email = document.querySelector("#email");
const heading = document.querySelector("#heading");
const form = document.querySelector("#reg-form");
const goToSignInBtn = document.querySelector("#goToSignIn");

const usersFromStorage = JSON.parse(localStorage.getItem("users"));
let users = usersFromStorage ? usersFromStorage : [];

createAccButton.addEventListener("click", createAcc);
function createAcc() {
  users.push({
    name: firstName.value,
    email: email.value,
  });
  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));
  heading.textContent = "Account created successfully";
  createAccButton.classList.add("hidden");
  form.classList.add("hidden");
  goToSignInBtn.classList.remove("hidden");
}

goToSignInBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
});
