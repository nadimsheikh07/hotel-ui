import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

const WebHeader = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top" >
            <Container fluid>
                <Navbar.Brand href="#home">{process.env.NEXT_PUBLIC_APP_NAME}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Rooms</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#logout">Register</NavDropdown.Item>
                            <NavDropdown.Item href="#logout">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#logout">My Account</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default WebHeader