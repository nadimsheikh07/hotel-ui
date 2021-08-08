import { Col, Container, ListGroup, Row } from "react-bootstrap"

const WebFooter = () => {
    return (
        <section className="footer">
            <Container>
                <Row>
                    <Col>
                        <h6>
                            About Us
                        </h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt.</p>
                    </Col>
                    <Col>
                        <h6>
                            Blogs
                        </h6>
                    </Col>
                    <Col>
                        <h6>
                            Contact Info
                        </h6>
                        <ListGroup>
                            <ListGroup.Item>203 Fake St. Mountain View, San Francisco, California, USA</ListGroup.Item>
                            <ListGroup.Item>+91 19188778763274</ListGroup.Item>
                            <ListGroup.Item>info@yourdomain.com</ListGroup.Item>
                            <ListGroup.Item>Monday — Friday 8:00am - 5:00pm</ListGroup.Item>
                        </ListGroup>
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