import { Outlet } from 'react-router-dom'

const Admin = () => {

    return (
        <>
            <nav>
                admin user navigation
            </nav>
            <Outlet />
        </>
    )

}

export { Admin }