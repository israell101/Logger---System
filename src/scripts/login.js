const username = document.querySelector("#username-login")
const password = document.querySelector("#password-login");
const button = document.querySelector("#button-login");
const checbox = document.querySelector("#checkbox-login");

button.addEventListener("click", (event)=> {

    const usernameValue =  username.value;
    const passwordValue = password.value;

    if (usernameValue === "" || passwordValue === "") {
      event.preventDefault();

      alert("please fill in all the fields!!!");
      return;
    }

    else if (usernameValue !== "alex" || passwordValue !== "123"){
        event.preventDefault();
        alert("incorreto!")
        return;
    }

    alert("Acesso permitido!")
});