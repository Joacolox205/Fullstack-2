// Recuperamos el producto guardado en el localStorage
let producto = JSON.parse(
    localStorage.getItem("producto")
);


// Mostramos los datos en el html

document.getElementById("imagen").src =
   producto.imagen;

document.getElementById("nombre").textContent =
   producto.nombre;

document.getElementById("descripcion").textContent =
   producto.descripcion;

document.getElementById("precio").textContent =
   "Precio: $" + producto.precio;