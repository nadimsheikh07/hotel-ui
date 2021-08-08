import Image from 'next/image'
import { Button, Carousel } from "react-bootstrap"
import useWindowDimensions from '../../hooks/useWindowDimensions';

const HomeBanner = () => {
    const { height, width } = useWindowDimensions();
    console.warn('height', height)
    console.warn('width', width)
    return (
        <section className="home-banner">
            <Carousel variant="light" fade>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="/images/banner1.png"
                        alt="First slide"
                        height={height}
                        width={width}


                    />
                    <Carousel.Caption>
                        <h5>Enjoy a Luxury Experience</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button>View More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="/images/banner2.png"
                        alt="Second slide"
                        height={height}
                        width={width}

                    />
                    <Carousel.Caption>
                        <h5>Food & Drinks</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button>View More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default HomeBanner