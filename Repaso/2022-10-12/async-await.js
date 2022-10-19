
// const imprimir = () => {

//     return new Promise((resolve, reject) => {}

// }


// imprimir()
//     .then(() => {
//         // Pasa por acá en caso de éxito. Es xq la promesa ejecutó el resolve.
//     })
//     .catch(() => {
//         // Pasa por acá cuando no hubo éxito. Es xq la promesa ejecutó el reject.
//     })
//     .finally(() => {
//         // Pasa en ambos casos.
//     });

// let users = null;

// fetch('https://conectadas-1192e-default-rtdb.firebaseio.com/users.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.warn(error))
//     .finally(() => console.log("Por acá pasa siempre"));

let users = null;

const pedirCafe = async () => {

    const response = await fetch('https://conectadas-1192e-default-rtdb.firebaseio.com/users.json');
    const data = await response.json()
    return data;

}

const otraFuncion = async () => {
    const users = await pedirCafe();
    console.log(users);
}

otraFuncion();




