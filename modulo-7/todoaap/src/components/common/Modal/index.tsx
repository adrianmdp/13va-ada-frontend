import { FC, ReactNode } from "react"
import { Modal as ModalBst, Button } from "react-bootstrap"

type Props = {
    children?: ReactNode
    show: boolean
    onClose: () => void
    onSave?: () => void
    onSuccess?: () => void
    title: string | ReactNode
}

const Modal: FC<Props> = ({ children, show, title, onClose, onSave, onSuccess }) => {

    return(
        <ModalBst show={show} onHide={onClose}>
            <ModalBst.Header closeButton>
                <ModalBst.Title>{title}</ModalBst.Title>
            </ModalBst.Header>

            {
                children &&
                    <ModalBst.Body>
                        {children}
                    </ModalBst.Body>
            }

            <ModalBst.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                { 
                    onSave && 
                        <Button variant="primary" onClick={onSave}>Save changes</Button>
                }
                {
                    onSuccess && 
                        <Button variant="primary" onClick={onSuccess}>Aceptar</Button>
                }
            </ModalBst.Footer>
        </ModalBst>
    )

}

export { Modal }