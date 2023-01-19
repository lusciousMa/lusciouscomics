import { Link } from 'react-router-dom';
import styles from './homePage.module.css';
import { ContextFunction } from '../Context/contextProvider';

function HomePage() {
    const obj = ContextFunction();
    const { allImages } = obj;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to={'/'} className={styles.link}>Home</Link>
            </div>

            <div className={styles.imagesContainerFlex}>
                <div className={styles.imagesContainer}>
                    {
                        allImages.map((item, index) => (
                            <Link to={`/${item.id}`} key={index} className={styles.childContainer}>
                                <img src={item.images[0]} className={styles.childImage}>{ }</img>
                                <div className={styles.childText}>{item.name}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage;