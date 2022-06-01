import styles from '../styles/header/Nav.module.scss'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href='/'>Projekt</Link></li>
                <li><Link href='/verein'>Verein</Link></li>
                <li><Link href='/schloss'>Schloss</Link></li>
                <li><Link href='/news'>News</Link></li>
                <li><Link href='/news'>Mitmachen</Link></li>
            </ul>
        </nav>
    )
}

export { Nav }