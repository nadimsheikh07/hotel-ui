import React from 'react';
import { Card, Container } from 'react-bootstrap';

import styles from '../../../styles/modules/testimonial/ClientTestimonial.module.scss';

import SwiperCore, {
    Navigation, Pagination, A11y,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export const ClientTestimonial = () => (
    <div className={styles.section}>
        <Container>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/images/banner2.png" />
                        <Card.Body>
                            <Card.Title>Jhon Deo</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/images/banner2.png" />
                        <Card.Body>
                            <Card.Title>Jhon Deo</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/images/banner2.png" />
                        <Card.Body>
                            <Card.Title>Jhon Deo</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/images/banner2.png" />
                        <Card.Body>
                            <Card.Title>Jhon Deo</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <Card.Img variant="top" src="/images/banner2.png" />
                        <Card.Body>
                            <Card.Title>Jhon Deo</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>

            </Swiper>
        </Container>
    </div>
);
