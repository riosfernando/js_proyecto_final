const productos = [


]
   
function Producto(categoria, marca, modelo, precio,id) {
    this.categoria = categoria;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.id= id
};

function addProduct(categoria,marca,modelo,precio,id){
    const producto1 = new Producto(categoria,marca,modelo,precio,id);
    productos.push(producto1);
    const peopleTable = document.getElementById ('productstable');
    const productoHTML = document.createElement('tr')
    productos.map((empleado,idx) => {
        console.log(empleado, 'soy emp')
        productoHTML.innerHTML = `
        <th scope="col">${empleado.id}</th>
        <td>${empleado.categoria}</td>
        <td>${empleado.marca}</td>
        <td>${empleado.modelo}</td>
        <td>${empleado.precio}</td>
      
        <td><div>
        <button
                  id="editBtn_${empleado.id}"
                  type="button"
                 
                  >
                  Editar
                  </button>
                  <button
                 
                  type="button"
                  >
                  Borrar
                  </button>
              </div></td>
          `;
          peopleTable.appendChild(productoHTML);
    });

}

let registerProduct = document.getElementById("productRegister");

registerProduct.addEventListener("click", (e) => {
    e.preventDefault()
    const productoNuevo = []
       
    let categoria = document.getElementById("productType").value;
    let marca = document.getElementById("productBrand").value;
    let modelo = document.getElementById("productModel").value;
    let precio = document.getElementById("productPrice").value;
    let id = productos.length + 1
    addProduct(categoria,marca,modelo,precio, id)

    console.log(productoNuevo.length);
})

let indexBtn = document.getElementById("indexBtn");

indexBtn.addEventListener("click", (e) => {
    e.preventDefault()

    window.location.assign('./index.html')
});


/* Borrar producto*/
function deleteProduct(event) {
    const btn = event.target;
    const id = btn.id.split("_")[1];
    food = food.filter((plate) => plate.id != id);
    updateFoodTable();
  }

/*Editar producto*/
  function editProduct(event) {
    const btn = event.target;
    const id = btn.id.split("_")[1];
    const plato = food.filter((plate) => plate.id == id)[0];
    foodForm.foodName.value = plato.name;
    foodForm.foodLink.value = plato.link;
    foodForm.foodPrice.value = plato.price;
    foodForm["idPlate"] = plato.id;
    console.dir(foodForm);
  }