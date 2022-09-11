import styles from '../styles/Layout.module.scss'

const Layout = ({ children } : any) => {

    
    return (
        <div className={styles.container}>
            <main>
                {children}
            </main>
        </div>
    )
}

export { Layout }