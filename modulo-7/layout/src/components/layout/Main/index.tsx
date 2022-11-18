import { FC, ReactNode } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"

type Props = {
    children: ReactNode
    title: string
    className: string
}

const Main: FC<Props> = ({ children, title, className }) => {

    return (
        <>
            <Header />
            <main className={className}>
                <h1>{title}</h1>
                {children}
            </main>
            <Footer />
        </>
    )

}

export { Main }