import React from 'react';
import { Col, Row } from 'react-bootstrap';

export const ContactInfo = () => (
  <div>
    <h1>Contact us</h1>
    <p>We are open for any suggestion or just to have a chat</p>
    <Row>
      <Col md={4}>
        <h2>ADDRESS:</h2>
        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
      </Col>
      <Col md={4}>
        <h2>EMAIL:</h2>
        <p>info@yourdomain.com</p>
      </Col>
      <Col md={4}>
        <h2>PHONE:</h2>
        <p>+91 19188778763274</p>
      </Col>
    </Row>
  </div>
);
