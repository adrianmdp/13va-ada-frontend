import { createContext, FC, ReactNode, useState } from "react"
import { Alert } from "react-bootstrap"

const AlertContext = createContext({
    isOpen: false,
    showAlert: (content: ReactNode) => null,
    closeAlert: () => null
})

type Props = {
    children: ReactNode
}

const AlertProvider: FC<Props> = ({children}) => {

    const [isOpen, setIsOpen] = useState(true)
    const [content, setContent] = useState<ReactNode>(<></>)

    const showAlert = (content: ReactNode) => {
        setContent(content)
        setIsOpen(true)
    }

    const closeAlert = () => {
        setIsOpen(false)
    }

    return (
        <AlertContext.Provider value={{isOpen, showAlert, closeAlert}}>
            {children}

            {   
                isOpen &&
                    <Alert variant="primary">
                       {content}
                    </Alert>
            }
        </AlertContext.Provider>
    )

}

export { AlertProvider, AlertContext }