const productos = [
    {
        categoria:'Audio',
        marca :'JBL',
        modelo :'Parlante',
        precio : 8000,
        id:0,

    },
    {
        categoria:'electronica',
        marca :'Sony',
        modelo :'Parlante',
        precio : 8000,
        id:1

    },
    {
        categoria:'Audio',
        marca :'JBL',
        modelo :'Parlante',
        precio : 8000,
        id:2
    },

]
        





// Eventos
let ingresar = document.getElementById("ingresar");
let adminLogin = document.getElementById("adminLoginBtn");

function obtenerUserName (){
    const userName = document.getElementById("userName").value;
    
    const userNameStorage = JSON.stringify(userName);
    localStorage.setItem("Nombre de usuario", userNameStorage);
}


ingresar.addEventListener("click", (e) => {
console.log('func')
e.preventDefault()
    let welcomeMessage = document.getElementById("welcomeMessage");

   
    window.location.assign('./admin.html')
  

    const userNameString = localStorage.getItem("Nombre de usuario");
    const userNameUsable = JSON.parse(userNameString);
    
    obtenerUserName();
})


function showProducts(productos) {
let products = productos
console.log(products)
let container = document.getElementById('products')

products.map((elemento => {
    let showProduct = document.createElement('div')

    showProduct.innerHTML = `
    <div> 
    <h4>${elemento.categoria}</h4>
    <h3> ${elemento.marca}</h3>
    </div>

    `
container.appendChild(showProduct)
console.log(showProduct)
}))



}
showProducts(productos)