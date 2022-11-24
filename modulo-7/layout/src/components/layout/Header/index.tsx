import { FC } from "react"
import { Menu } from "../Menu"

type Props = {
    page: string
    onChangePage: (value: string) => void
}

const Header: FC<Props> = ({ page, onChangePage }) => {

    return (
        <header className="main-header">
            <div className="container">
                <Menu page={page} onChangePage={onChangePage} />
            </div>
        </header>
    )

}

export { Header } 