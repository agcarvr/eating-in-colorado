import {v4 as uuid} from 'uuid';
import SummaryCard from '../SummaryCard';
import styles from './home.module.css';

export default function Home({data}){
    return(
        <div className={styles.homebody}>
        {data.map((post) =>{
            return(
            <SummaryCard key={uuid()} data={post} />
          )})}
        </div>
    )
}