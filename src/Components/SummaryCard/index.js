import styles from './card.module.css';
import {Link} from 'react-router-dom';


export default function SummaryCard({data}){
    return(
        <div className={styles.cardBody}>
            <Link className={styles.title} to={'/posts/' + data._id}><h3 className={styles.title}>{data.title}</h3></Link>
            <div className={styles.desc}>
            <h4 className={styles.quisine}>Cuisine: {data.cuisine}</h4>
            <h4 className={styles.dish}>Dish: {data.dish}</h4>
            </div>
            <section className={styles.sum}>
            <p className={styles.summary}>{data.summary}</p>
            <p className={styles.rating}>Overall: {data.rating}/5</p>
            </section>
        </div>
    )
}