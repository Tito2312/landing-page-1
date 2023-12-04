const btnLogin = document.getElementById("btn-login")
const loginForm = document.querySelector(".login-form")

btnLogin.addEventListener("click", visibleForm)

function visibleForm(){
    if(loginForm.style.display === "none"){
        console.log(true);
        loginForm.style.display = "flex"
    }else{
        loginForm.style.display = "flex"
        console.log(false);
    }
}