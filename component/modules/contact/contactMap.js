import React from 'react'
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/modules/contact/ContactMap.module.scss'
import { Badge, Card, OverlayTrigger } from 'react-bootstrap';

export const ContactMap = () => {
    const AnyReactComponent = () => {
        return (
            <OverlayTrigger
                placement="top"
                overlay={<Card>
                    <Card.Body>
                        <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                        <p>info@yourdomain.com</p>
                        <p>+91 19188778763274</p>
                    </Card.Body>
                </Card>}
                trigger="hover"
            >
                <Badge>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="6x" className={styles.marker} />
                </Badge>
            </OverlayTrigger>
        )
    }

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
                defaultCenter={{
                    lat: 24.5854,
                    lng: 73.7125
                }}
                defaultZoom={11}
                yesIWantToUseGoogleMapApiInternals
            >
                <AnyReactComponent
                    lat={24.5854}
                    lng={73.7125}
                />
            </GoogleMapReact>
        </div>
    )
}
