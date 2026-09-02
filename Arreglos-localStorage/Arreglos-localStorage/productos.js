let productos = [
    {
        id: 1,
        nombre: "Notebook",
        precio: 500000,
        descripcion: "Notebook para estudio y trabajo",
        imagen: "img/notebook.jpg"
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 15000,
        descripcion: "Mouse inalámbrico",
        imagen: "img/mouse.jpg"
    },
    {
        id: 3,
        nombre: "Teclado",
        precio: 25000,
        descripcion: "Teclado USB",
        imagen: "img/teclado.jpg"
    }

    
];

// Buscamos el div del HTML
let lista = document.getElementById("listaProductos");

// Recorremos el arreglo de productos
for (let i = 0; i < productos.length; i++) {

    lista.innerHTML += `
        <div>

            <img src="${productos[i].imagen}" width="200">

            <h2>${productos[i].nombre}</h2>

            <p>Precio: $${productos[i].precio}</p>

            <button onclick="verDetalle(${productos[i].id})">
                Ver detalle
            </button>

            <hr>

        </div>
    `;
}


// Función que recibe el id del producto seleccionado
function verDetalle(id) {

    let productoSeleccionado;

    // Recorremos el arreglo buscando el producto
    for (let i = 0; i < productos.length; i++) {

        if (productos[i].id === id) {
            productoSeleccionado = productos[i];
        }
    }

    // Guardamos el producto seleccionado en localStorage
    localStorage.setItem(
        "producto",
        JSON.stringify(productoSeleccionado)
    );

    // Nos dirigimos al segundo HTML
    window.location.href = "detalle.html";
}