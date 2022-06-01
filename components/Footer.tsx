import styles from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <div>
                    <h3>Kontakt</h3>
                    <p>mail@gewissev.de</p>
                </div>
                <div>
                    <h3>Impressum</h3>
                    <p>Gewiss e.V.</p>
                    <p>Musterstraße 123 30171 Hannover</p>
                </div>
            </div>
        </footer>
    )
}

export { Footer }