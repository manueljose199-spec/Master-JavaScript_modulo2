function buscarRegalo(gifts, giftName, index = 0) {
    // Caso base: llegamos al final y no encontramos el regalo
    if (index === gifts.length) {
        return `El regalo "${giftName}" no está en la lista`;
    }

    // Caso base: encontramos el regalo
    if (gifts[index] === giftName) {
        return `El regalo "${giftName}" está en la posición ${index}`;
    }

    // Llamada recursiva (avanzamos al siguiente índice)
    return buscarRegalo(gifts, giftName, index + 1);
}

// Ejemplo de uso
const regalos = ["carro", "muñeca", "lego", "pelota"];

console.log(buscarRegalo(regalos, "lego"));
console.log(buscarRegalo(regalos, "bicicleta"));