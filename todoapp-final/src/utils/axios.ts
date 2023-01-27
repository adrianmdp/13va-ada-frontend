import axios from 'axios'

const api = axios.create({
    baseURL: 'https://todoapp-13ava-default-rtdb.firebaseio.com/',
    params: {
        api_key: "prueba-api-key",
        prueba: "prueba-2"
    }
})


export { api }