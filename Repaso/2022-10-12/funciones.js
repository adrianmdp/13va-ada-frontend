

const name = "Adrian";
const param1 = "Sofi";
let param3 = "";

function myFunction(param1, param2) {
    // Funcion que puede reotrar o no algun valor
    
    // console.log(name); // Esto va a imprimir Adrián
    // console.log(param1); // Esto va a imprimir asd
    param3 = "Hola mundo";
}

const myArrowFunction = (param1 = "Hola mundo") => {
    return param1
    // Funcion que puede reotrar o no algún valor y recibe un param con valor por defecto.
}

myFunction("asd", 123);

// console.log(param1);
// console.log(param3);

myArrowFunction();
myArrowFunction("asd");

const myArrowFunction2 = (nombre, edad) => {

}

myArrowFunction2(39, "Adrián"); // Mal
myArrowFunction2("Adrián", 39); // Bien

console.log(myArrowFunction("Ahora tiene otro valor"));