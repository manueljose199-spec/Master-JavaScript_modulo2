function obtenerPalabraMasLarga(texto) {

    //Convertimos texto a arreglo de palabras
    let palabras = texto.split(' ');

    let longestWord = '';

    console.log('--- Sliding Window en palabras ---');

    // recorremis las palabras 
    for (let i = 0; i < palabras.length; i++) {

        let palabraActual = palabras[i];

        console.log(`Palabra actual: ${palabraActual}`);

        // comparamos la longitudes de las palabras
        if (palabraActual.length > longestWord.length) {
            longestWord = palabraActual;
            console.log(`Nueva palabra más larga: ${longestWord}`);
        }

        console.log("____");
    }

    // y nos aparece
    return longestWord;
}


let texto = "practica de campus sliding window en javascript ";

let resultado = obtenerPalabraMasLarga(texto);

console.log("Palabra más larga:", resultado);