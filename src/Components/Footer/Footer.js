import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styles from './footer.module.css';

export default function Footer(){
    const [advice, setAdvice] = useState('');

    const getAdvice = async () => {
        try {
            const res = await fetch('https://api.adviceslip.com/advice');
            const data = await res.json();
            console.log(data)
            setAdvice(data.slip.advice);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAdvice();
    },[])
    
    return(
        <div className={styles.footerbody} >
            <a className={styles.donate} target="_blank" rel="noreferrer" href="paypal.me/erincarver926">Donate</a>
            <h5 className={styles.footertext}>Your Advice: {advice}</h5>
            <Link className={styles.aboutme} to='/about-the-author'>About The Author</Link>
        </div>
    )
}