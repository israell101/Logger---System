const name = document.querySelector("#name-register");
const username = document.querySelector("#username-register");
const password = document.querySelector("#password-register");
const button = document.querySelector("#button-register");
const checkbox = document.querySelector("#checkbox-register");

button.addEventListener("click", (event)=>{
    const nameValue = name.value;
    const usernameValue = username.value;
    const passwordValue = password.value;

    if (nameValue === "" || usernameValue === "" || passwordValue === "") {
      event.preventDefault();

      alert("please fill in all the fields!!!");
      return;
    }

    sessionStorage.setItem("name", nameValue)
    sessionStorage.setItem("username", usernameValue)
    sessionStorage.setItem("password", passwordValue)
})