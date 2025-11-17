const username = document.querySelector("#username-login");
const password = document.querySelector("#password-login");
const button = document.querySelector("#button-login");
const checbox = document.querySelector("#checkbox-login");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const usernameValue = username.value;
  const passwordValue = password.value;

  if (usernameValue === "" || passwordValue === "") {
    alert("please fill in all the fields!!!");
    return;
  } 

  const usernameSession = sessionStorage.getItem("username")
  const passwordSession = sessionStorage.getItem("password")

  if(usernameValue !== usernameSession || passwordValue !== passwordSession) {
     alert("Incorrect username or password")
     return;
  }

  alert("Acesso permitido!");

  window.location.href = "./home.html"
});

checbox.addEventListener("change", ()=>{
   const type = password.getAttribute('type')
   
   if(type !== 'password'){
     password.setAttribute('type', 'password');
     return
   }

    password.setAttribute("type", "text");
});