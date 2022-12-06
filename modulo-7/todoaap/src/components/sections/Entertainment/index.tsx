import { Link, Outlet } from "react-router-dom"

const Entertainment = () => {

    return (
        <>
            <nav>
                <Link to="/entertainment/movies">Cine</Link> -
                <a href="!#">Teatro</a> -
                <Link to="/entertainment/shows">Shows</Link>
            </nav>
            <Outlet />
        </>
    )

}

export { Entertainment }