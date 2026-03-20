function encontrarInvitados(invitados) {
    // empezamos en la primera posición
    let i = 0;

    // el segundo puntero empieza en el siguiente elemento
    let j = 1;

    // mientras no lleguemos al final del arreglo
    while (j < invitados.length) {

        // agarramos la primera letra de cada nombre
        let letra1 = invitados[i][0].toLowerCase();
        let letra2 = invitados[j][0].toLowerCase();

        // si las letras son iguales
        if (letra1 === letra2) {
            // regresamos los dos nombres
            return [invitados[i], invitados[j]];
        }

        // avanzamos ambos punteros
        i++;
        j++;
    }

    // si no encontramos nada
    return null;
}


// ejemplo
let invitados = ["Ana", "Andrés", "Carlos", "Cecilia", "Luis"];

let resultado = encontrarInvitados(invitados);

console.log(resultado);