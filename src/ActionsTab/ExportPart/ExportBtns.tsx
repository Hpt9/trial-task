import { Button } from "@/components/ui/button"
import './ExportBtns.scss'
import ExcelIcon from '../../assets/vscode-icons_file-type-excel.svg'
import AdobeIcon from '../../assets/vscode-icons_file-type-pdf2.svg';
export default function () {
    return (
        <div className='flex justify-between items-center'>
            <div className="review flex items-center gap-x-2">
                <Button className="flex items-center gap-x-1 bg-white relative hover:bg-gray-100 p-1.5">
                    <span className="circle flex"></span>
                    <span>Icmala</span>
                </Button>
                <Button className="flex items-center gap-x-1 bg-white relative hover:bg-gray-100  p-1.5">
                    <span className="circle flex"></span>
                    <span>Tam</span>
                </Button>
            </div>
            <div className="exports flex items-center gap-x-2">
                <Button className="flex items-center gap-x-1 bg-white relative hover:bg-gray-100  p-1.5">
                    <img src={ExcelIcon} alt="" />
                    <span>Export xlsx</span>
                </Button>
                <Button className="flex items-center gap-x-1 bg-white relative hover:bg-gray-100  p-1.5">
                    <img src={AdobeIcon} alt="" />
                    <span>Export PDF</span>
                </Button>
            </div>
        </div>
    )
}
