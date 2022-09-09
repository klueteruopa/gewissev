import styles from '../styles/header/Nav.module.scss'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href='/'>Start</Link></li>
                <li><Link href='/news'>News</Link></li>
            </ul>
        </nav>
    )
}

export { Nav }