import WebFooter from "./footer"
import WebHeader from "./header"

const WebLayout = ({ children }) => {
    return (
        <div>
            <WebHeader />
            {children}
            <WebFooter />
        </div>
    )
}

export default WebLayout