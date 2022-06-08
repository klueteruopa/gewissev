import styles from '../styles/LeitsatzItem.module.scss'

interface ContainerProps {
    highlights: string[];
    direction: string;
    text: string;
    image: string;
}

const LeitsatzItem = ({ highlights, direction, text, image }: ContainerProps) => {
    
    var classList = styles.leitsatzItem;
    direction === "right" ? classList += " " + styles.right : null;

    return (
        <div className={classList}>
            <div className={styles.text}>
                <p>{text}</p>
            </div>
            <div className={styles.image}>
                <div>
                    <img alt="Leitsatz Icon" src={image}/>
                </div>
            </div>
        </div>
    )
}

export { LeitsatzItem }