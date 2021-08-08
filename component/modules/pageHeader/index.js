import { Container } from "react-bootstrap"
import { Parallax } from 'react-parallax';
const PageHeader = ({ title }) => {
    return (
        <Parallax className="page-header" blur={1} bgImage="/images/banner1.png" bgImageAlt={title} strength={10}>
            <Container>
                <h2>{title}</h2>
                <p>subtitle</p>
            </Container>
        </Parallax>
    )
}
export default PageHeader