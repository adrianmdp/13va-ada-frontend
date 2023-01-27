import { createContext, FC, ReactNode, useState } from "react"

type ContextType = {
    isModalOpen: boolean
    mostrarModal: () => void
    cerrarModal: () => void
}

const ModalContext = createContext<ContextType>({
    isModalOpen: false, 
    mostrarModal: () => {}, 
    cerrarModal: () => {}
})

type Props = {
    children: ReactNode
}

const ModalProvider: FC<Props> = ({children}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const mostrarModal = () => {
        setIsModalOpen(true)
    }

    const cerrarModal = () => {
        setIsModalOpen(false)
    }

    return(
        <ModalContext.Provider value={{ isModalOpen, mostrarModal, cerrarModal}}>
            {children}

            { isModalOpen && 
                <div className="modal">
                    <div className="modal-header">
                        Header del modal
                    </div> 
                    <div className="modal-body">
                        Body del modal
                    </div>
                    <div className="footer-body">
                        Footer del modal
                    </div>
                </div>
            } 
        </ModalContext.Provider>
    )

}

export { ModalProvider, ModalContext }