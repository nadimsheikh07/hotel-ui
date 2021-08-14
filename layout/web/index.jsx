import WebFooter from "./footer"
import WebHeader from "./header"

const WebLayout = ({ children }) => {
    return (
        <section>
            <WebHeader />
            {children}
            <WebFooter />
        </section>
    )
}

export default WebLayout