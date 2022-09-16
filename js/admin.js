//Me falta crear la función para mandar el objeto creado al localStorage

let registerProduct = document.getElementById("productRegister");

registerProduct.addEventListener("click", () => {
    const productoNuevo = []
    function Producto(categoria, marca, modelo, precio) {
        this.categoria = categoria;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    };
    
    let categoria = document.getElementById("productType").value;
    let marca = document.getElementById("productBrand").value;
    let modelo = document.getElementById("productModel").value;
    let precio = document.getElementById("productPrice").value;
    
    const producto1 = new Producto(categoria,marca,modelo,precio);
    productoNuevo.push(producto1)
    alert("El producto ingresado es " +JSON.stringify(producto1));
})