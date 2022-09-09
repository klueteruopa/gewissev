import styles from '../styles/Layout.module.scss'
import { Nav } from './Nav'
import { Footer } from './Footer'

const Layout = ({ children } : any) => {

    
    return (
        <div className={styles.container}>
            <Nav/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export { Layout }