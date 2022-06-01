import styles from '../styles/Welcome.module.scss'

const Welcome = () => {
    return (
    <div className={styles.wrapper}>
        <div className={styles.welcome}>
            <div className={styles.left}>
                <img alt="hallo" src="/jung2.svg"/>
                <img alt="hallo" src="/jung1.svg"/>
                <img alt="hallo" src="/jung3.svg"/>
                <img alt="hallo" src="/alt2.svg"/>
            </div>
            <div className={styles.middle}>
                <h1><span>Ge</span>nerationen<br/><span>w</span>ohnen<br/><span>i</span>m <span>S</span>chlos<span>s</span></h1>
                <h2><span>Gewiss e.V.</span></h2>
            </div>
            <div className={styles.right}>
                <img alt="hallo" src="/alt1.svg"/>
                <img alt="hallo" src="/schloss.svg"/>
                <img alt="hallo" src="/jung4.svg"/>
            </div>
        </div>
    </div>
    )
}

export { Welcome }