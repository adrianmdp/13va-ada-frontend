

// const name = "Adrián";
// const lastname = "Solimano";


// const myFunction = (name, lastname) => {

//     return "Hola, mi nombre es " + name + " y mi apellido es " + lastname;

// }

// const saludo = myFunction("Sofi", "Ferrer");

const nombres = ["Adrián", "Sofi", "Mati", "Meli"];

for(let i = 0; i < nombres.length; i++) {

}

// nombres.forEach(nombre => {

//     console.log(`Hola, soy ${nombre}`);

// });

const person1 = {
    id: 012,
    name: "Adrian",
    email: "adrian@ada.com",
    isAdmin: false,
    operation: (op) => {
        console.log(`Se realizó la operación ${op}`)
    },
    friends: [
        123,
        234,
        345
    ]
}


const person2 = {
    id: 890,
    name: "Sofi",
    email: "sofi@ada.com",
    isAdmin: true,
    operation: (op) => {
        console.log(`Se realizó la operación ${op}`)
    },
    friends: [
        123,
        234,
        345
    ]
}

for(prop in person2) {
    console.log(prop, person2[prop]);
}

// console.log("Prop computada", person2["i" + "d"], person2["id"], person2.id);

// console.log(person.friends)

// person.operation("caminar");
// person.operation("comer");
// person.operation("dormir");

const personas = [person1, person2];

// console.log(personas[1].email);






