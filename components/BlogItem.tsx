import styles from '../styles/BlogItem.module.scss'
import { items } from '../public/content/news.json'

type BlogItemProps = {
    id: number
}


const BlogItem = (props: BlogItemProps) => {

    const content = items.find(x => x.id === props.id);

    return (
        <>
        <div className={styles.blogItem}>
            {content == null ? (
                null
            ) : (
                <div className={styles.content}>
                    <p>{content.datum}</p>
                    <h3>{content.ueberschrift}</h3>
                    <p>{content.teaser}</p>
                    {content.text.map((item) => (
                        <div key={item.content}>
                            { item.typ === 'header' ? (
                                <h4>{item.content}</h4>
                            ) : (
                                <p>{item.content}</p>
                            )
                            }
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    )
}

export { BlogItem }