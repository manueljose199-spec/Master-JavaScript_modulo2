// Arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Abrigo", precio: 1500, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Lapices", precio: 50, categoria: "Educación" },
    { nombre: "Guantes", precio: 20, categoria: "Ropa" },
    { nombre: "iPod", precio: 99, categoria: "Electrónica" },
];

// Encadenamiento de metodos 
const resultado = productos 
// Filter
.filter(producto => producto.precio < 100) // productos que cuesten menos de 100 
// Sort
.sort((a,b) => a.nombre.localeCompare(b.nombre)) // localeCompare compara strings correctamente y ordenamos alfabeticamente
// Map 
.map(producto => producto.nombre); // Devuelve solo el nombre del producto

console.log('Resultados de usar los metodos Filter, Sort y Map')
console.log(resultado)