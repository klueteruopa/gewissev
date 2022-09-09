import styles from '../styles/Leitsatz.module.scss'
import { LeitsatzItem } from './LeitsatzItem'
import { items } from '../public/content/leitsaetze.json'

const marks = ["Selbstverwirklichung"];

const Leitsatz = () => {
    return (
        <div className={styles.leitsatz}>
            <h3>Unsere Leitsätze</h3>
            {items.map((item) => (
                <LeitsatzItem highlights={marks} key={item.id} direction= {item.direction} text={item.text} image={item.image} />
            ))}
        </div>
    )
}

export { Leitsatz }