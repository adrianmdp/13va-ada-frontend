import { FC } from "react"
import { Layout } from "../../components/layout"

type Props = {
    page: string
    onChangePage: (value: string) => void
}


const Services: FC<Props> = ( { page, onChangePage } ) => {
    return(
        <Layout title="Services" className="services page" page={page} onChangePage={onChangePage}>
            Esta es mi page Services.
        </Layout>
    )
}

export { Services }