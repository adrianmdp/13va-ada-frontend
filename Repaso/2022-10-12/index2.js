// Callbacks

// const myFunction1 = () => {
//     return "Soy la función 1";
// }

// const myFunction3 = () => {
//     return "Soy la función 3";
// }

// const myFunction4 = () => {
//     return "Soy la función 4";
// }

// const myFunction2 = (callback) => {
//     return "Soy la funcion 2 " + callback();
// }

// const rta = myFunction2(myFunction3);

// console.log(rta);



const nombres = ["Adrián", "Sofi", "Mati", "Meli"];

const saludos = nombres.map(elem => {
    return "Hola, soy " + elem
})

// console.log(saludos);


const map = (array, callback) => {

    const rta = [];

    for(let i = 0; i < array.length; i++) {
        rta.push(callback(array[i]));
    }

    return rta;

}

const fxAux = (elem) => {
    return "Hola, mi nombre es " + elem
}

const mascotas = ["Perro", "Gato", "conejo"]

const saludos2 = map(mascotas, (elem) => {
    return "Hola, soy un " + elem
});

console.log(saludos2);