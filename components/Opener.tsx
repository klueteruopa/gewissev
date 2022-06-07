import styles from '../styles/Opener.module.scss'

const Opener = () => {

    return (
        <div className={styles.opener}>
            <div>
                <div className={styles.text}>
                    <p>Wir sind der Verein <span>Gewiss e.V.</span></p>
                    <p>Wir gestalten ein Projekt zum <span>Wohnen</span>, <span>Leben</span> und <span>Arbeiten.</span></p>
                    <p>Und das in <span>Henneckenrode</span> in der Region Hildesheim.</p>
                </div>
                <div className={styles.map}>
                    {/* <img alt="Standort vom Schloss Henneckenrode" src="/schloss-map.svg"/> */}
                </div>
            </div>
        </div>
    )
}

export { Opener }