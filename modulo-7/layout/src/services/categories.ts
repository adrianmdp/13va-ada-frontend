import {Category} from '../types'

const getCategories = () => {


}

export const addCategory = (payload: any) => {

    const options = {
        method: "POST",
        body: JSON.stringify(payload)
    }

    fetch("https://todoapp-13ava-default-rtdb.firebaseio.com/categories.json", options)

}

const getCategory = (id: string) => {

} 

const updateCategory = (id:string, payload: any) => {

}

const removeCategory = (id: string) => {
    
}