// Recuperamos el producto guardado en localStorage
let producto = JSON.parse(
    localStorage.getItem("producto")
);


// Mostramos los datos en el HTML

document.getElementById("imagen").src =
    producto.imagen;

document.getElementById("nombre").textContent =
    producto.nombre;

document.getElementById("precio").textContent =
    "Precio: $" + producto.precio;

document.getElementById("descripcion").textContent =
    producto.descripcion;