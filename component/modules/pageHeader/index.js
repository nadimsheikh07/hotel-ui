import { Container } from "react-bootstrap"
import { Parallax } from 'react-parallax';
import styles from "../../../styles/header/Breadcrumb.module.scss"
const PageHeader = ({ title, subtitle }) => {
    return (
        <Parallax className={styles.section} blur={1} bgImage="/images/banner1.png" bgImageAlt={title} strength={10}>
            <Container className={styles.container}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </Container>
        </Parallax>
    )
}
export default PageHeader