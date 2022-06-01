import styles from '../styles/Video.module.scss'
import { useState } from 'react';

const Video = () => {

    return (
        <div className={styles.video}>
            <div>
                <video controls preload="none" poster="/thumbnail.jpg">
                    <source src="/video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export { Video }