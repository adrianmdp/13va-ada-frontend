const ContactForm = () => {

    return(
        <form action="">
            <div>
                <label htmlFor="">Email</label>
                <input type="email" />
            </div>
            <div>
                <label htmlFor="">Asunto</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Mensaje</label>
                <textarea></textarea>
            </div>

            <button type="submit">Enviar</button>
        </form>
    )

}

export { ContactForm }