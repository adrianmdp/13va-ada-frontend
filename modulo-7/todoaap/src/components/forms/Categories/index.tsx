import { FC, useContext, useState } from "react"
import { AlertContext } from "../../../contexts"
import { defaultValues, FormsFields } from "./defaultValues"

type Props = {
    onSearch: (params: FormsFields) => void
}

const FormCategories: FC<Props> = ({ onSearch }) => {

    const [fields, setFileds] = useState(defaultValues)

    const { showAlert } = useContext(AlertContext)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        onSearch(fields)

        showAlert(<>Se creó la categoría con éxito</>)
    }

    return(

        <form action="mb-5" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="">Text</label>
                <input 
                    type="text" 
                    name="text" 
                    className="form-control" 
                    value={fields.text}
                    onChange={e => setFileds(prevState => ({ ...prevState, text: e.target.value }))} 
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="">Color</label>
                <input 
                    type="text" 
                    name="color" 
                    className="form-control" 
                    value={fields.color} 
                    onChange={e => setFileds(prevState => ({ ...prevState, color: e.target.value }))}
                />
            </div>
            <button className="btn btn-primary" type="submit">Filtrar</button>
        </form>

    )

}

export { FormCategories }