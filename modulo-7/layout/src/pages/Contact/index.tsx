import { ContactForm } from "../../components/forms"
import { Layout } from "../../components/layout"

const Contact = () => {

    return (
        <>
            <Layout title="Contacto" className="contact page">

                <ContactForm />

                <div>
                    Div de prueba
                </div>

                

            </Layout>
        </>

    )

}

export { Contact }