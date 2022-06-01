import styles from '../styles/Layout.module.scss'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = ({ children } : any) => {

    
    return (
        <div className={styles.container}>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export { Layout }