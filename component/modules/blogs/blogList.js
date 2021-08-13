import React from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import Image from 'next/image'

export const BlogList = () => {
    return (
        <section className="blogList">
            <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col md={2}>
                            <Image width="100" height="100" src="/images/banner1.png" alt="blog 1" />
                        </Col>
                        <Col md={10}>
                            <h5>Title</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col md={2}>
                            <Image width="100" height="100" src="/images/banner1.png" alt="blog 1" />
                        </Col>
                        <Col md={10}>
                            <h5>Title</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque</p>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </section>
    )
}
