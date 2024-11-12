import './SideBar.scss'
import { SidebarWithBurgerMenu } from './SideBar'
import SALESSVG from '../assets/carbon_sales-ops.svg'
import PLAN from '../assets/grommet-icons_plan.svg'
import SALESREPORT from '../assets/icon-park-outline_sales-report.svg'
import COMP from '../assets/mdi_company.svg'
import CHART from '../assets/teenyicons_gantt-chart-solid.svg'
import FOLDER from '../assets/icon-park-outline_folder-quality.svg'

export default function MainSideBar() {
    var img_array= [SALESSVG,PLAN,SALESREPORT,COMP,CHART,FOLDER]
  return (
    <div>
        <div className='mini_sideBar flex flex-col'>
            <SidebarWithBurgerMenu/>
            <div className='mini_childs flex flex-col gap-5 w-full'>
                {
                    img_array.map((img,index)=>(
                        <div key={index+"a"} className='tab_buttons flex justify-center w-full py-0.5 hover:cursor-pointer transition-all'>
                            <img src={img} alt="button_photo" />
                        </div>
                    ))
                }
            </div>
            
        </div>
    </div>
  )
}
