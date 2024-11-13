import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SALESSVG from '../assets/carbon_sales-ops.svg'
import PLAN from '../assets/grommet-icons_plan.svg'
import SALESREPORT from '../assets/icon-park-outline_sales-report.svg'
import COMP from '../assets/mdi_company.svg'
import CHART from '../assets/teenyicons_gantt-chart-solid.svg'
import FOLDER from '../assets/icon-park-outline_folder-quality.svg'
import DotMenu from '../assets/mage_dots-menu.svg'
import RepData from '../assets/carbon_report-data.svg'
import Frame from '../assets/Frame427320129.svg'
import GovLine from '../assets/mingcute_government-line.svg'


export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
 
  const handleOpen = (value:any) => {
    setOpen(open === value ? 0 : value);
  };
 
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
 
  return (
    <div>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <img className="h-10 w-10 stroke-3" src={DotMenu}/>
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="side-bar">
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src={DotMenu}
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray" className="flex justify-between w-full">
              <p className='text-sm'>Menu</p>
              {isDrawerOpen && (
                <XMarkIcon className="h-7 w-7 stroke-2 hover:cursor-pointer" onClick={closeDrawer}/>
              )
            }
            </Typography>
          </div>
          <div className="menu_search_parent">
            <div className="p-2 flex menu_search items-center gap-x-3 px-2">
              <MagnifyingGlassIcon className="h-5 w-5" />
              <input type="text" className="menu_search_input" placeholder="Search"/>
            </div>
          </div>
          <List>
          <ListItem>
              <ListItemPrefix>
                <img src={SALESSVG} alt="sales_photo" />
              </ListItemPrefix>
              <div>
                <p className='text-sm'>Satınalma İcmalı</p>
                <span className="circle flex"></span>
              </div>
            </ListItem>
            <Accordion
            onMouseLeave={()=> handleOpen(3)}
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  style={{borderRadius:"16px"}}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <img src={PLAN} alt="" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    <p  className='text-sm'>Planlama</p>
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <img src={Frame} alt="frame_photo" />
                    </ListItemPrefix>
                    <p  className='text-xs'>Master Schedule</p>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <img src={GovLine} alt="gov_photo" />
                    </ListItemPrefix>
                    <p className="text-xs">Dövlət qürumları ilə iş</p>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <img src={RepData} alt="" />
                    </ListItemPrefix>
                    <p className="text-xs">Hesabat</p>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <ListItem>
              <ListItemPrefix>
                <img src={SALESREPORT} alt="report_photo" />
              </ListItemPrefix>
              <p className="text-sm">Maliyyə</p>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <img src={COMP} alt="company_photo" />
              </ListItemPrefix>
              <p className="text-sm">Şirkət Məlumatları</p>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <img src={CHART} alt="chart_photo" />
              </ListItemPrefix>
              <p className="text-sm">İş qrafiki</p> 
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <img src={FOLDER} alt="folder_photo" />
              </ListItemPrefix>
              <p className="text-sm">Keyfiyyət</p>
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </div>
  );
}