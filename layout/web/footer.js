import { Col, Container, Row } from "react-bootstrap"
import { BlogList } from "../../component/modules/blogs"
import { ContactList, SocialLinks } from "../../component/modules/contact"
const WebFooter = () => {
    return (
        <section className="footer">
            <Container>
                <Row>
                    <Col md={4}>
                        <h6>
                            About Us
                        </h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt.</p>

                        <SocialLinks />
                    </Col>
                    <Col md={4}>
                        <h6>
                            Blogs
                        </h6>

                        <BlogList />
                    </Col>
                    <Col md={4}>
                        <h6>
                            Contact Info
                        </h6>
                        <ContactList />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Copyright ©2021 All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WebFooter