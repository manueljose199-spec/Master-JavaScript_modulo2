let listaDeCompras = [];

//Función para agregar un producto al final de la lista

const agregarProducto = (producto) => {
    // Verificar si el producto ya existe
    if (listaDeCompras.includes(producto)) {
        console.log(`El producto "${producto}" ya está en la lista!!`);
    } else {
        // Agregar el producto al final del arreglo
        listaDeCompras.push(producto);
        console.log(`Producto agregado: ${producto}`);
    }
};