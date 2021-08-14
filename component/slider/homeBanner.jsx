import Image from 'next/image'
import { Button, Carousel } from "react-bootstrap"
import useWindowDimensions from '../../hooks/useWindowDimensions';
import styles from '../../styles/slider/Home.module.scss';
export const HomeBanner = () => {
    const { height, width } = useWindowDimensions();
    return (
        <section className={styles.homebanner}>
            <Carousel variant="light" fade>
                <Carousel.Item className={styles.carouselitem}>
                    <Image
                        className="d-block w-100"
                        src="/images/banner1.png"
                        alt="First slide"
                        height={height}
                        width={width}
                    />
                    <Carousel.Caption className={styles.carouselcaption}>
                        <h5>Enjoy a Luxury Experience</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant="primary" className={styles.btn}>Take Tour</Button>
                        <Button variant="light" className={styles.btn}>View More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={styles.carouselitem}>
                    <Image
                        className="d-block w-100"
                        src="/images/banner2.png"
                        alt="Second slide"
                        height={height}
                        width={width}

                    />
                    <Carousel.Caption className={styles.carouselcaption}>
                        <h5>Food & Drinks</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button variant="primary" className={styles.btn}>Take Tour</Button>
                        <Button variant="light" className={styles.btn}>View More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}