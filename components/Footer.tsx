import styles from '../styles/Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <div>
                    <h3>Kontakt</h3>
                    <p>info@gewiss-ev.eu</p>
                </div>
                <div>
                    <h3>Impressum</h3>
                    <p>Gewiss - Generationen wohnen im Schloss e.V., Hildesheim</p>
                    <p>Bischhof-Gerhard-Str. 11, 31139 Hildesheim</p>
                    <h4>Gemeinschaftlich Vertretungsberechtigt:</h4>
                    <p>Vera Lemke (1. Vorsitzende)<br/>
                    E-Mail: vera@gewiss-ev.eu<br/>
                    Tel.: 01573 2272892</p>
                    <p><b>Registergericht:</b> Amtsgericht Hildesheim</p>
                    <p><b>Registernummer:</b> 201512</p>
                </div>
            </div>
        </footer>
    )
}

export { Footer }
