import { FC } from "react"
import { Layout } from "../../components/layout"

type Props = {
    page: string
    onChangePage: (value: string) => void
}


const Dashboard: FC<Props> = ( { page, onChangePage } ) => {
    return(
        <Layout title="Dashboard" className="dashboard page" page={page} onChangePage={onChangePage}>
            Este es el dashboard
        </Layout>
    )

}

export { Dashboard }