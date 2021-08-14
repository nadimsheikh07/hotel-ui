import React from "react"
import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import styles from '../../styles/layout/web/Header.module.scss'
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
        <Navbar className={scrollState == "top" ? styles.navbarlight : styles.navbardark} expand="lg" fixed="top" >
            <Container fluid>
                <Navbar.Brand className={styles.navbarbrand}>{process.env.NEXT_PUBLIC_APP_NAME}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <Link href="/" passHref>
                            <Nav.Link className={styles.navlink}>Home</Nav.Link>
                        </Link>
                        <Link href="/rooms" passHref>
                            <Nav.Link className={styles.navlink}>Rooms</Nav.Link>
                        </Link>
                        <Link href="/services" passHref>
                            <Nav.Link className={styles.navlink}>Services</Nav.Link>
                        </Link>
                        <Link href="/about" passHref>
                            <Nav.Link className={styles.navlink}>About</Nav.Link>
                        </Link>
                        <Link href="/blogs" passHref>
                            <Nav.Link className={styles.navlink}>Blogs</Nav.Link>
                        </Link>
                        <Link href="/contact" passHref>
                            <Nav.Link className={styles.navlink}>Contact</Nav.Link>
                        </Link>
                        <NavDropdown align="end" className={styles.dropdowntoggle} title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item className={styles.dropdownitem} href="#logout">Register</NavDropdown.Item>
                            <NavDropdown.Item className={styles.dropdownitem} href="#logout">Login</NavDropdown.Item>
                            <NavDropdown.Item className={styles.dropdownitem} href="#logout">My Account</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={styles.dropdownitem} href="#logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default WebHeader