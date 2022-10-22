
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

// let users = null;

// const pedirCafe = async () => {

//     const response = await fetch('https://conectadas-1192e-default-rtdb.firebaseio.com/users.json');
//     const data = await response.json()
//     return data;

// }

// const otraFuncion = async () => {
//     const users = await pedirCafe();
//     console.log(users);
// }

// otraFuncion();



const users = [
    {
        name: "Adrián",
        email: "asd@asd.com"
    },
    {
        name: "Sofi",
        email: "zxc@zxc.com"
    }
];

users2 = {
    status: "error",
    message: "No se pudo obtener los usuarios"
}   

console.log("Mostrar 1er mje");

console.log(users2[0].name);

console.log("Mostrar 2do mje");


ABM
Alta, baja, modificación, Leer

CRUD
Create, Read, Update, Delete

POST, PUT, DELETE, GET, (PATCH)


"miapi.com/users" POST --> Agrega un user
"miapi.com/users" GET --> Obtiene un user
"miapi.com/users" PUT/PATCH --> Actualiza un user
"miapi.com/users" DELETE --> Elimina un user

"miapi.com/pets"
"miapi.com/vehicles"
"miapi.com/categories"




"https://conectadas-1192e-default-rtdb.firebaseio.com/users/123/"