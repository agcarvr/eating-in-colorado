import {v4 as uuid} from 'uuid';
import SummaryCard from '../SummaryCard'

export default function Home({data}){
    return(
        <div>
        {data.map((post) =>{
            return(
            <SummaryCard key={uuid()} data={post} />
          )})}
        </div>
    )
}