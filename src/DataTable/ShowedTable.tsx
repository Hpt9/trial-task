import ProgressTable from './ProgressTable'
import './Table.scss'
import { data } from '@/data'
import { ScrollArea,ScrollBar } from "@/components/ui/scroll-area"

export default function ShowedTable() {
    console.log(data)
  return (
    <ScrollArea className='flex w-full'>
        <ProgressTable/>
        <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
