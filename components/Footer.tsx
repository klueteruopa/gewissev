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
                    <p>Julian Franken (1. Vorsitzender)<br/>
                    E-Mail: julian@gewiss-ev.eu<br/>
                    Tel.: 0177 9412704</p>
                    <p>Anna Knetsch (2. Vorsitzende)</p>
                    <p>Vera Lemke (Schriftführerin)</p>
                    <p>Dorothee Kochskämper (Kassenwärtin)</p>
                    <p><b>Registergericht:</b> Amtsgericht Hildesheim</p>
                    <p><b>Registernummer:</b> 201512</p>
                </div>
            </div>
        </footer>
    )
}

export { Footer }
