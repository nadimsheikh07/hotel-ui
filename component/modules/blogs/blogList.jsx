import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../../../styles/modules/blogs/BlogList.module.scss';
import { useSelector } from 'react-redux';

export const BlogList = () => {
  const blogs = useSelector(state => state.blogs.data)
  return (
    <ListGroup className={styles.group}>
      {blogs && blogs.map((blog, index) => {
        return (
          <ListGroup.Item key={`blogFooter${index}`} className={styles.item}>
            <Row>
              <Col md={2}>
                <Image width="100" height="100" src={blog.image} alt={blog.title} />
              </Col>
              <Col md={10}>
                <h5 className={styles.title}>{blog.title}</h5>
                <p>{blog.description}</p>
              </Col>
            </Row>
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
};
