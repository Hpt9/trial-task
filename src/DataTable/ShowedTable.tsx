import ProgressTable from './ProgressTable'
import './Table.scss'
import { ScrollArea,ScrollBar } from "@/components/ui/scroll-area"
import DetailsTable from './DetailsTable'
import useViewStore from '@/store/useViewStore'
import PlanTable from './PlanTable'


export default function ShowedTable() {
    const { view } = useViewStore();
    let TableComponent;
    if (view === 'progress') {
        TableComponent = <ProgressTable />;
    } else if (view === 'details') {
        TableComponent = <DetailsTable />;
    } else if (view === 'plan') {
        TableComponent = <PlanTable />;
    } else {
        TableComponent = null; // Handle the case where view doesn't match any option
    }
  return (
    <div className='flex w-full' style={{overflowX:"auto"}}>
        {TableComponent}
    </div>
  )
}
