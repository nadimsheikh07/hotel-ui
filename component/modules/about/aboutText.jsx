import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../../styles/modules/about/AboutText.module.scss';
export const AboutText = ({ title, details }) => (
    <section className={styles.section}>
        <Container>
            <Row>
                <Col md={6}>
                    <h2>{title}</h2>
                </Col>
                <Col md={6}>
                    {details && details.map((detail) => {
                        return (
                            <p>{detail}</p>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    </section>
);
