import { Link, useParams } from 'react-router-dom';
import styles from './child.module.css';
import { ContextFunction } from '../Context/contextProvider';
import { useState } from 'react';

function Child() {
    const { id } = useParams();

    const obj = ContextFunction();
    const { allImages } = obj;

    let defaultImages = [];

    allImages.forEach((item, index) => {
        let firstID = item.id.toString();
        let secondID = id.toString();
        if (firstID === secondID) {
            defaultImages = item.images;
        }
    });

    const [childImages] = useState(defaultImages);

    return (
        <div>
            <div className={styles.header}>
                <Link to={'/'} className={styles.link}>Home</Link>
            </div>

            <div className={styles.imagesContainer}>
                {
                    childImages.map((item, index) => (
                        <div key={index} className={styles.childContainer}>
                            <img src={item} className={styles.childImage}></img>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Child;