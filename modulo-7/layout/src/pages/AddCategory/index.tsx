import { FC, useState } from 'react'
import {Layout} from '../../components/layout'
import { addCategory } from '../../services/categories'

const AddCategory: FC = () => {

    const [catName, setCatName] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addCategory({ name: catName })
    }

    return (
        <Layout title='Crear categoría' className='page add-category'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input 
                        type="text" 
                        name='name' 
                        value={catName} 
                        onChange={e => setCatName(e.target.value)}
                    />
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </Layout>
    )

}

export { AddCategory }