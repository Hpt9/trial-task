import ProgressTable from './ProgressTable'
import './Table.scss'
import { data } from '@/data'
export default function ShowedTable() {
    console.log(data)
  return (
    <div className='flex overflow-x-scroll'>
        <ProgressTable/>
    </div>
  )
}
