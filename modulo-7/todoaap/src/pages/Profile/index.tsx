import { FormCategories, Modal } from "../../components"
import { UsersForm } from "../../components/forms/Users"
import { useModal } from "../../hooks"

const Profile = () => {

    const {isOpen, closeModal, openModal} = useModal()

    return(
        <div>
            Estoy en Profile

            <button onClick={openModal}>Abrir modal</button>

            <Modal show={isOpen} title="Hola mundo" onClose={closeModal} onSuccess={() => {}}>
                <FormCategories onSearch={() => {}} />
            </Modal>
        </div>
    )

}

export { Profile }