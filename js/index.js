// Eventos
let ingresar = document.getElementById("ingresar");
let adminLogin = document.getElementById("adminLoginBtn");

function obtenerUserName (){
    const userName = document.getElementById("userName").value;
    
    const userNameStorage = JSON.stringify(userName);
    localStorage.setItem("Nombre de usuario", userNameStorage);
}


ingresar.addEventListener("click", () => {

    let welcomeMessage = document.getElementById("welcomeMessage");

    welcomeMessage.innerHTML = "<h3>Hola Administrador. Para comenzar a operar, presiona OK</h3>";

    adminLogin.innerHTML = "<a href='./admin.html'>OK</a>";

    const userNameString = localStorage.getItem("Nombre de usuario");
    const userNameUsable = JSON.parse(userNameString);
    
    obtenerUserName();
})