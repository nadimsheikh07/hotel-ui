import { Col, Container, Row } from 'react-bootstrap'
import { ContactForm, ContactInfo, ContactMap } from '../component/modules/contact'
import { PageHeader } from '../component/modules/header'
import withWebLayout from '../layout/web/withWebLayout'
import styles from "../styles/pages/Contact.module.scss"
const Contact = () => {
  return (
    <section>
      <PageHeader title="Contact us" />
      <Container className={styles.container}>
        <Row>
          <Col md={6}>
            <ContactInfo />
            <ContactForm />
          </Col>
          <Col md={6}>
            <ContactMap />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default withWebLayout(Contact)