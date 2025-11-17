const username = document.querySelector("#username");
const new_password = document.querySelector("#new-password");
const confirm_password = document.querySelector("#confirm-register");
const button = document.querySelector("#button-confirm");

button.addEventListener("click", (event) =>{
    event.preventDefault();

    const userName = username.value;
    const newPassword = new_password.value;
    const ConfirmPassword = confirm_password.value;

    if(userName == "" || newPassword == "" || ConfirmPassword ==""){
       alert("please fill in all the fields!!!");
    }

    else{

        const usernameSession = sessionStorage.getItem("username")

      if(userName !== usernameSession){
             alert("Usuario não existe!")
      }

      else{
          if(newPassword !== ConfirmPassword){
          alert("Passwords are not the same.")
          return;
    }
         sessionStorage.setItem("password", ConfirmPassword)
    }
      }

      
   
})