import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from "react"

type ContextType = {
    user: {}
    sessionToken: string
    setUser: Dispatch<SetStateAction<{}>>
    setSessionToken: Dispatch<SetStateAction<string>>
}

const AuthContext = createContext<ContextType>({
    user: {}, 
    sessionToken: "",
    setUser: () => {},
    setSessionToken: () => ""
})

type Props = {
    children: ReactNode
}

const AuthProvider: FC<Props> = ({children}) => {

    const [user, setUser] = useState({})
    const [sessionToken, setSessionToken] = useState("oiasd890d7fozxoc8g7")

    return(
        <AuthContext.Provider value={{user, sessionToken, setUser, setSessionToken}}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthProvider, AuthContext }