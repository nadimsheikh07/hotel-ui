import WebHeader from "./header"

const WebLayout = ({ children }) => {
    return (
        <div>
            <WebHeader />
            {children}
        </div>
    )
}

export default WebLayout