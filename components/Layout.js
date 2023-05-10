//core components from react
import { Fragment } from "react"

//custom components
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => {
    return <Fragment>
        <Header />

        <main>
            {children}
        </main>
        <Footer />
    </Fragment>
}
export default Layout