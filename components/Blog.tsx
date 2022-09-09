import styles from '../styles/Blog.module.scss'
// import { BlogItem } from './BlogItem'
import { items } from '../public/content/news.json'

//console.log(items);

const Blog = () => {
    return (
        <div className={styles.blog}>
            <h3>Neuigkeiten</h3>
            {items.slice(0).reverse().map((item) => (
                <div key={item.datum}>
                    <p>{item.datum}</p>
                    <h2>{item.ueberschrift}</h2>
                    <p>{item.teaser}</p>
                    <span>weiter lesen</span>
                </div>
            ))}
        </div>
    )
}

export { Blog }