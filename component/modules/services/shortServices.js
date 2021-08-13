import { Col, Container, Row } from "react-bootstrap"
import styles from '../../../styles/modules/services/Short.module.scss';
export const ShortServices = () => {
    return (
        <section className={styles.short}>
            <Container>
                <h2 className={styles.title}>Facilities & Services</h2>
                <Row>
                    <Col sm="6" md="4">
                        <h3 className={styles.subtitle}>Luxury Rooms</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </Col>
                    <Col sm="6" md="4">
                        <h3 className={styles.subtitle}>Fast & Free Wifi</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </Col>
                    <Col sm="6" md="4">
                        <h3 className={styles.subtitle}>Call Us 24/7</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </Col>
                    <Col sm="6" md="4">
                        <h3 className={styles.subtitle}>Travel Accomodation</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </Col>
                    <Col sm="6" md="4">
                        <h3 className={styles.subtitle}>Accepts Credit Card</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </Col>
                    <Col sm="6" md="4">
                        <h3 className={styles.subtitle}>Restaurant</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}