import { FC, ReactNode } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Main } from "../Main"

type Props = {
    children: ReactNode
    title: string
    className: string
    page: string
    onChangePage: (value: string) => void
}

const Layout: FC<Props> = ({ children, title, className, page, onChangePage }) => {

    return(
        <>
            <div>Estoy en Layout</div>
            <Header page={page} onChangePage={onChangePage} />
            <Main title={title} className={className}>
                {children}
            </Main>
            <Footer />
        </>
    )

}

export { Layout }