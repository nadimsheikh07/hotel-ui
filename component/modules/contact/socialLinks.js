import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

import styles from '../../../styles/modules/contact/SocialLinks.module.scss'
export const SocialLinks = () => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon className={styles.icon} icon={faTwitterSquare} size="2x" />
            <FontAwesomeIcon className={styles.icon} icon={faFacebookSquare} size="2x" />
            <FontAwesomeIcon className={styles.icon} icon={faInstagramSquare} size="2x" />
            <FontAwesomeIcon className={styles.icon} icon={faYoutubeSquare} size="2x" />
        </div>
    )
}
