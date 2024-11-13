import Actions from './ActionsTab/Actions'
import ExportBtns from './ActionsTab/ExportPart/ExportBtns'
import ViewOptions from './ActionsTab/SecondaryFilters/ViewOptions'
import './App.css'
import ShowedTable from './DataTable/ShowedTable'

import MainSideBar from './SideBar/MainSideBar'

function App() {
  console.log("aoo")
  return (
    <div className=' app_div flex'>
      <MainSideBar/>
      <div className='flex flex-col gap-y-3 ml-2.5'>
        <Actions/>
        <ViewOptions/>
        <ExportBtns/>
        <ShowedTable/>
      </div>
    </div>
  )
}

export default App
