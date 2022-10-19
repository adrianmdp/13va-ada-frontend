

const fx1 = (pos, callback) => {

    console.log(callback);

    switch(pos) {

        case 1: 
            callback(); 
            break;
        case 2:
            console.log('No pase por callback');
            break
        case 3:
            callback();
            callback();
            break;

        default:
            console.log("El caso es mayor a 3 o menor que 1");

    }

}


fx1(1, () => {

    const value1 = 123;
    const value2 = 432;

    const sum = value1 + value2;

    console.log("Soy la función fx2");

    return sum;

});

document.addEventListener('scroll', () => {
    
})