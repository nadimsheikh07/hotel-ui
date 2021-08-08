
import { Button, Col, Container, Row } from "react-bootstrap"
import { Parallax } from 'react-parallax';
const HomeParallax = () => {
    return (
        <Parallax className="home-parallax" blur={1} bgImage="/images/banner1.png" bgImageAlt="the cat" strength={100}>
            <Container>
                <Row>
                    <Col>
                        <h2>Quality accommodation that exceeds the expectations</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt.</p>
                        <Button>Learn More</Button>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </Parallax>
    )
}

export default HomeParallax