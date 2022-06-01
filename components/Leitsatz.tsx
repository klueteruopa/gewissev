import styles from '../styles/Leitsatz.module.scss'
import { LeitsatzItem } from './LeitsatzItem'

const marks = ["Selbstverwirklichung"];

const Leitsatz = () => {
    return (
        <div className={styles.leitsatz}>
            <LeitsatzItem highlights={marks} direction="left" text="Gewiss ist eine Vielfalt liebende Gemeinschaft, die einen Raum zur Selbstverwirklichung schaffen will." image="/faust.svg"/>
            <LeitsatzItem highlights={marks} direction="right" text="Wir wollen Strukturen schaffen, die Sicherheit stiftet und unterschiedliche Lebensumstände berücksichtigen." image="/struktur.svg"/>
            <LeitsatzItem highlights={marks} direction="left" text="Die Strukturen soll auch gegenüber sich ändernden Anforderungen durch gleichberechtigte Mitgestaltung offen bleiben. " image="/waage.svg"/>
            <LeitsatzItem highlights={marks} direction="right" text="Der achtsame Umgang mit unseren Mitmenschen, unserer Umwelt und uns selbst ist uns sehr wichtig." image="/blume.svg"/>
        </div>
    )
}

export { Leitsatz }