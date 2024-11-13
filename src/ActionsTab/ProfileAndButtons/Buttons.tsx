import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react';
import RefreshIcon from '../../assets/Vector (32).svg'
import Excel from '../../assets/vscode-icons_file-type-excel.svg'
export default function Buttons() {
  return (
    <div className='actions_btn flex gap-x-2'>
        <Button className="hover:bg-blue-gray-100 p-3">
            <img src={RefreshIcon} alt="" />
        </Button>
        <Button className='flex items-center gap-x-2'>
            <span>Layihə əlavə et</span>
            <Plus />
        </Button>
        <Button className='flex items-center hover:bg-blue-gray-100'>
            <img src={Excel} alt="" />
            <span>Upload.xlsx</span>
        </Button>
    </div>
  )
}
