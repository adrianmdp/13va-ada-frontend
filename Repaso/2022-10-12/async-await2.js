 const mapToArray = (object) => {
    const array = [];
  
    for (const elem in object) {
      array.push({
        ...object[elem],
        id: elem,
      });
    }
    return array;
  };

// 'https://conectadas-1192e-default-rtdb.firebaseio.com/users.json'


// GET
// fetch('https://conectadas-1192e-default-rtdb.firebaseio.com/users.json')
//     .then((response) => {
//         // El código que se va a ejecutar cuando la request sea exitosa
//         // La data no esta disponible.
//         response.json()
//             .then((data) => {
//                 // Es el código que va a ejecutar las sentencias con 
//                 // la data disponible

//                 console.log(data)
//             });
//     })
//     .catch(() => {
//         // El código que se va a ejecutar cuando la request NO sea exitosa

//     });


fetch('https://conectadas-1192e-default-rtdb.firebaseio.com/users.json')
    .then(response => response.json())
    .then(data => {
        const users = mapToArray(data);
        const table = document.getElementById('tbl-users');
        const tableBody = table.querySelector('tbody');

        users.forEach(user => {
            const tr = document.createElement('tr');
            for(prop in user) {
                const td = document.createElement('td');
                const text = document.createTextNode(user[prop]);
                td.appendChild(text);
                tr.appendChild(td);
            }
            tableBody.appendChild(tr);
        })

    })
    .catch();

const user = {
  avatar: "Imagen",
  birthdate: new Date("2022-10-10"),
  city: "Mar del Plata",
  country: "Argentina",
}

// const obj = {
//   method: "POST",
//   body: JSON.stringify({ ...user, name: "Adrián"})
// }

const obj = {
  method: "DELETE",
}


fetch('https://conectadas-1192e-default-rtdb.firebaseio.com/users/-NEmsFhLVn7K-Y3CuNRU.json', obj)
  .then(response => response.json())
  .then(data => console.log(data));
    