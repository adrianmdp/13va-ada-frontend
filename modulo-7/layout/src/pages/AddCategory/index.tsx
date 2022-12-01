import { FC, useState } from 'react'
import {Layout} from '../../components/layout'
import { addCategory } from '../../services/categories'

type Props = {
    page: string
    onChangePage: (value: string) => void
}

const AddCategory: FC<Props> = ({page, onChangePage}) => {

    const [catName, setCatName] = useState("")

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addCategory({ name: catName })
    }

    return (
        <Layout title='Crear categoría' onChangePage={onChangePage} page={page}>
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