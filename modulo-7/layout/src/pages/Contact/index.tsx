import { FC } from "react"
import { ContactForm } from "../../components/forms"
import { Layout } from "../../components/layout"

type Props = {
    page: string
    onChangePage: (value: string) => void
}

const Contact: FC<Props> = ( { page, onChangePage } ) => {

    return (
        <>
            <Layout title="Contacto" className="contact page" page={page} onChangePage={onChangePage}>

                <ContactForm />

                <div>
                    Div de prueba
                </div>

            </Layout>
        </>

    )

}

export { Contact }