// Eventos
let ingresar = document.getElementById("ingresar");
let adminLogin = document.getElementById("adminLoginBtn");
const userName = document.getElementById("userName");


ingresar.addEventListener("click", () => {

    let welcomeMessage = document.getElementById("welcomeMessage");

    welcomeMessage.innerHTML = "<h3>Hola Administrador. Para comenzar a operar, presiona OK</h3>";

    adminLogin.innerHTML = "<a href='./admin.html'>OK</a>";
})
