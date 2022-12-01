const category = {
    name: "Compras",
}

const user = {
    name: "Adrián",
    lastname: "Solimano",
    email: "adrian@ada.com",
    password: "asdf1234",
    birthdate: "1983-04-13"
}

const task = {
    title: "Comprar repuesto para la heladera.",
    description: "Lorem Ipsum",
    date: "2022-12-05",
    category: "-NIA5pS6gZJ6vUiqggnv",
    status: "pending"
}

fetch("https://todoapp-13ava-default-rtdb.firebaseio.com/tasks.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })


// const options = {
//     method: "POST",
//     body: JSON.stringify(task)
// }

// fetch("https://todoapp-13ava-default-rtdb.firebaseio.com/categories.json", options)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })

// fetch("https://todoapp-13ava-default-rtdb.firebaseio.com/tasks.json", options)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })