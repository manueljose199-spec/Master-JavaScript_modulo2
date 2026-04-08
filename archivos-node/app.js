// Importando el módulo fs (File System)
const { error } = require('console'); // Forma tradicional de importar modulo
const fs = require('fs');

// import fs from 'fs'; 

// Verificando si un archivo existe
const filePath = './example.txt';
console.log(filePath) //Vemos la ruta 

if (fs.existsSync(filePath)) { // Indica que nuestra funcion es sincrona 
console.log('El archivo existe!');
} else {
console.log('El archivo no existe :(');
}

console.log('-----------------')
// Leer el contenido de un archivo 
fs.readFile('./Ejemplo.txt', 'utf8', (error, contenido) => {
    if(error){
        console.error('Ocurrio un error al LEER el archivo:', error);
        return; // Con return detenemos esta funcion
    }
    //Si no existio ningun error 
    console.log('---Contenido del archivo---')
    console.log(contenido);
})

console.log('-----------------')
// Escribir un archivo si no existe, o cambiar el contenido de uno existente 
// writeFile remplaza el contenido anterior (es util pero peligroso)
fs.writeFile('./example.txt', 'Hola, Node.js esto fue escrito desde app.js WOOOW', (error) =>{
    if(error){
        console.error('Ocurrio un error al ESCRIBIR el archivo:', error);
        return; // Con return detenemos esta funcion
    }
    //Si no existio ningun error 
    console.log('El archivo fue ESCRITO correctamente');
})

console.log('-----------------')
// Agregar contenido 
fs.appendFile('./example.txt', '\nEsta es una nueva linea que se agrego a nuestro archivo!', (error) => {
    
    if(error){
        console.error('Ocurrio un error al AGREGAR contenido al archivo:', error);
        return; // Con return detenemos esta funcion
    }
    //Si no existio ningun error 
    console.log('El contenido fue AGREGADO correctamente');

})

// Esta funcion es util para: logs, bitacoras, historiales o algun archivo que crezca con el tiempo.

// Elimar un archivo
fs.unlink('./Ejemplo.txt', (error) => {
    if(error){
        console.error('Ocurrio un error al ELIMINAR el archivo:', error);
        return; // Con return detenemos esta funcion
    }
    //Si no existio ningun error 
    console.log('El archivo fue ELIMINADO correctamente');

})