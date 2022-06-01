import styles from '../styles/header/Header.module.scss'
import { Logo } from './Logo'
import { Nav } from './Nav'
import { ToggleNav } from './ToggleNav'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <Nav/>
            <ToggleNav/>
        </header>
    )
}

export { Header }