import { FC } from "react"
import { Layout } from "../../components/layout"
import { Link } from 'react-router-dom'

const Services: FC = () => {
    return(
        <Layout title="Services" className="services page">
            Esta es mi page Services.
            <Link to="/users">Ir a Users</Link>
        </Layout>
    )
}

export { Services }