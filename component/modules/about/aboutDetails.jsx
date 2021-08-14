import Image from 'next/image';
import React from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import styles from '../../../styles/modules/about/About.module.scss';

export const AboutDetails = () => (
  <Container className={styles.section}>
    <Row>
      <Col>
        <Image width="600" height="400" src="/images/banner1.png" alt="blog 1" />
      </Col>
      <Col>
        <h2>About Us</h2>
        <h1>We are Hotel Booking Agency</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <Button className={styles.btn}>Book your room now</Button>
      </Col>
    </Row>
  </Container>
);
