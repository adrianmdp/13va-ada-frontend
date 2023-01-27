import { useState } from "react"
import { Modal } from "../../components"
import { useModal } from "../../hooks"


const Users = () => {

    const {isOpen, openModal, closeModal} = useModal()

    return(
        <>
            <div>Estoy en Users</div>

            <button>Cambiar estado test</button>

            <button onClick={openModal}>Abrir modal</button>

            <Modal show={isOpen} onClose={closeModal} title="Modal en Users" />

        </>
    )

}

export { Users }