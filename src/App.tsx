import Actions from './ActionsTab/Actions'
import './App.css'
import FilterTab from './FilterTab/FilterTab'

import MainSideBar from './SideBar/MainSideBar'

function App() {

  return (
    <div className=' app_div flex'>
      <MainSideBar/>
      <div className='flex justify-between px-3 py-12'>
          <FilterTab/>
          <Actions/>
      </div>
    </div>
  )
}

export default App
