const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];

/*
    A partir del arreglo original, obtener los siguientes resultados:
    - indiceAmarillo: Indice de la ubicacion en el arreglo de 'Amarillo'
    - cantidadColoresConA: Cuantos colores hay en el arreglo con la letra 'a' (Mayuscula o minuscula)
    - arregloSinAzul: El arreglo original sin el valor 'Azul'
    - ordenadoPorCantidadLetras: El arreglo orginal ordenado de forma ascendente por la cantidad de letras en su nombre.
    - arregloConNuevoColorInicio: El arreglo original con un nuevo color al inicio del mismo.
    - arregloConNuevoColorFin: El arreglo original con un nuevo color al final del mismo.

    Reemplazar este comentario con su codigo.
 */

indiceAmarillo = original.indexOf('Amarillo')
cantidadColoresConA = original.filter(tienenA => tienenA.toLowerCase().includes('a')).length
arregloSinAzul = original.filter(blue => blue !== 'Azul')
ordenadoPorCantidadLetras = [...original].sort((a, b) => a.length - b.length);
arregloConNuevoColorInicio = ['Violeta', ...original]
arregloConNuevoColorFin = [...original, 'Rosa']




console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul);
console.log(ordenadoPorCantidadLetras);
console.log(arregloConNuevoColorInicio);
console.log(arregloConNuevoColorFin);