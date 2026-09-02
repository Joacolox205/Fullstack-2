let productos = [
    {
        id: 1,
        nombre: "Notebook",
        precio: 500000,
        descripcion: "Notebook para estudios y trabajo",
        imagen: "Imagenes/notebook.jpg"
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 15000,
        descripcion: "Mouse inalambrico",
        imagen: "Imagenes/mouse.jpg"
    },
    {
        id: 3,
        nombre: "Teclado",
        precio: 25000,
        descripcion: "Teclado USB",
        imagen: "Imagenes/teclado.jpg"
    }


];

// Buscamos el div del html
let lista = document.getElementById("lista-productos");

// Recorremos el arreglo de productos
for (let i = 0; i < productos.length; i++) {

    lista.innerHTML += `
        <div>

            <img src="${productos[i].imagen}" width="200">

            <h2>${productos[i].nombre}</h2>

            <p>Precio: $${productos[i].precio}</p>

            <button onclick="verDetalles(${productos[i].id})">
                Ver detalle
            </button>

            <hr>
            
        </div>
    `;
}


// Función para ver los detalles del producto
function verDetalles(id) {
    
    let productoSeleccionado;

    // Recorremos el arreglo buscando el producto
    for (let i = 0; i < productos.length; i++) {

        if (productos[i].id === id) {
            productoSeleccionado = productos[i];
            
        }
    }
    // Mostramos los detalles del producto
    localStorage.setItem(
        "producto",
        JSON.stringify(productoSeleccionado)
    );

    // Nos dirigimos al segundo HTML
    window.location.href = "detalle.html";
}