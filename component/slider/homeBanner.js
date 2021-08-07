import Image from 'next/image'
import { Carousel } from "react-bootstrap"
import useWindowDimensions from '../../hooks/useWindowDimensions';

const HomeBanner = () => {
    const height = 600
    const { width } = useWindowDimensions();
    console.warn('width', width)
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/8D1A9232.JPG"
                    alt="First slide"
                    height={height}
                    width={width}


                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/8D1A9233.JPG"
                    alt="Second slide"
                    height={height}
                    width={width}

                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="/images/8D1A9237.JPG"
                    alt="Third slide"
                    height={height}
                    width={width}

                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeBanner