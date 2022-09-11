import styles from '../styles/Blog.module.scss'
import { items } from '../public/content/news.json'
import { BlogItem } from './BlogItem'
import { useState, useEffect } from 'react'

const Blog = () => {

    const [activeItem, setActiveItem] = useState<number>(0);
    const [showNewsItem, setShowNewsItem] = useState<boolean>(false);

    
    function openNewsItem(id: number) {
        setActiveItem(id);
        setShowNewsItem(true);
    }

    function closeNewsItem() {
        setActiveItem(0);
        setShowNewsItem(false);
    }

    /*
    useEffect(() => {
        if (showNewsItem) {
            console.log("show");
        }
    }, [showNewsItem]);
    */

    return (
        <>
        <div className={styles.blog}>
            {showNewsItem ? (
                <>
                    <div className={styles.close} onClick={() => closeNewsItem()}>X</div>
                    <BlogItem id={activeItem} />
                </>
            ) : (
                <>
                <h3>Neuigkeiten</h3>
                {items.slice(0).reverse().map((item) => (
                    <div className={styles.blogItem} key={item.datum} onClick={() => openNewsItem(item.id)}>
                        <p>{item.datum}</p>
                        <h2>{item.ueberschrift}</h2>
                        <p>{item.teaser}</p>
                        <span>(...)</span>
                    </div>
                ))}
                </>
            )}
        </div>
        </>
    )
}

export { Blog }