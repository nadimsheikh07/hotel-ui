import React from "react"
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
const WebHeader = () => {

    let listener = null
    const [scrollState, setScrollState] = React.useState("top")

    React.useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        listener = document.addEventListener("scroll", _e => {
            var scrolled = document.scrollingElement.scrollTop
            console.warn('scrollState', scrollState)
            if (scrolled >= 120) {
                if (scrollState !== "down") {
                    setScrollState("down")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])

    return (
        <Navbar bg={scrollState == "top" ? "light" : "dark"} variant={scrollState == "top" ? "light" : "dark"} expand="lg" fixed="top" >
            <Container fluid>
                <Navbar.Brand href="#home">{process.env.NEXT_PUBLIC_APP_NAME}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Link href="/" passHref>
                            <Nav.Link >Home</Nav.Link>
                        </Link>
                        <Link href="/rooms" passHref>
                            <Nav.Link>Rooms</Nav.Link>
                        </Link>
                        <Link href="/services" passHref>
                            <Nav.Link>Services</Nav.Link>
                        </Link>
                        <Link href="/about" passHref>
                            <Nav.Link>About</Nav.Link>
                        </Link>
                        <Link href="/blogs" passHref>
                            <Nav.Link>Blogs</Nav.Link>
                        </Link>
                        <Link href="/contact" passHref>
                            <Nav.Link>Contact</Nav.Link>
                        </Link>
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