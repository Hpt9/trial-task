import ProgressTable from './ProgressTable'
import './Table.scss'
import { data } from '@/data'
import { ScrollArea,ScrollBar } from "@/components/ui/scroll-area"
import DetailsTable from './DetailsTable'
import useViewStore from '@/store/useViewStore'

export default function ShowedTable() {
    const { view } = useViewStore();
  return (
    <ScrollArea className='flex w-full'>
        {view==="progress"? <ProgressTable/>:<DetailsTable/>}
        <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
