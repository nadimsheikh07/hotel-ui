import React from 'react'
import { ListGroup } from 'react-bootstrap'
import styles from '../../../styles/modules/contact/ContactList.module.scss'
export const ContactList = () => {
    return (
        <ListGroup className={styles.group}>
            <ListGroup.Item className={styles.item}>203 Fake St. Mountain View, San Francisco, California, USA</ListGroup.Item>
            <ListGroup.Item className={styles.item}>+91 19188778763274</ListGroup.Item>
            <ListGroup.Item className={styles.item}>info@yourdomain.com</ListGroup.Item>
            <ListGroup.Item className={styles.item}>Monday — Friday 8:00am - 5:00pm</ListGroup.Item>
        </ListGroup>
    )
}
