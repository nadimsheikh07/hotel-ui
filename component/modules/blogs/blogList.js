import React from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import Image from 'next/image'
import styles from '../../../styles/modules/blogs/BlogList.module.scss'
export const BlogList = () => {
    return (
        <ListGroup className={styles.group}>
            <ListGroup.Item className={styles.item}>
                <Row>
                    <Col md={2}>
                        <Image width="100" height="100" src="/images/banner1.png" alt="blog 1" />
                    </Col>
                    <Col md={10}>
                        <h5 className={styles.title}>Title</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque</p>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item className={styles.item}>
                <Row>
                    <Col md={2}>
                        <Image width="100" height="100" src="/images/banner1.png" alt="blog 1" />
                    </Col>
                    <Col md={10}>
                        <h5 className={styles.title}>Title</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque</p>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    )
}
