function encontrarMaximo(arr) {
    // Caso base: si solo hay un elemento
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mitad = Math.floor(arr.length / 2);
    const izquierda = arr.slice(0, mitad);
    const derecha = arr.slice(mitad);

    // Conquistar (resolver recursivamente)
    const maxIzq = encontrarMaximo(izquierda);
    const maxDer = encontrarMaximo(derecha);

    // Combinar (comparar ambos máximos)
    return maxIzq > maxDer ? maxIzq : maxDer;
}

// Ejemplo
const numeros = [5, 3, 8, 2, 10, 1];

console.log("El número máximo es:", encontrarMaximo(numeros));