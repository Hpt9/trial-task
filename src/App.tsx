import Actions from './ActionsTab/Actions'
import ExportBtns from './ActionsTab/ExportPart/ExportBtns'
import ViewOptions from './ActionsTab/SecondaryFilters/ViewOptions'
import './App.css'
import ShowedTable from './DataTable/ShowedTable'
import { useEffect } from 'react';

import MainSideBar from './SideBar/MainSideBar'

import useThemeStore from './store/useDarkModeStore'; // Adjust the path

function App() {
  const { darkMode, toggleDarkMode } = useThemeStore();

  // Sync Zustand state with the DOM
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);
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
