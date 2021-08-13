
import { Button, Col, Container, Row } from "react-bootstrap"
import { Parallax } from 'react-parallax';
import styles from '../../../styles/modules/parallax/Home.module.scss';
const HomeParallax = () => {
    return (
        <Parallax className={styles.homeparallax} blur={1} bgImage="/images/banner1.png" bgImageAlt="the cat" strength={100}>
            <Container>
                <Row>
                    <Col>
                        <h2 className={styles.title}>Quality accommodation that exceeds the expectations</h2>
                        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt.</p>
                        <Button className={styles.btn}>Learn More</Button>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </Parallax>
    )
}

export default HomeParallax