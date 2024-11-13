import { useState } from "react";
import { Button } from "@/components/ui/button";
import './ExportBtns.scss';
import ExcelIcon from '../../assets/vscode-icons_file-type-excel.svg';
import AdobeIcon from '../../assets/vscode-icons_file-type-pdf2.svg';

export default function ExportButtons() {
    const [activeButton, setActiveButton] = useState<string>('');

    return (
        <div className='flex justify-between items-center'>
            <div className="review flex items-center gap-x-2">
                <Button
                    className={`flex items-center gap-x-1 bg-white relative hover:bg-gray-100 p-1.5 ${
                        activeButton === "icmal" ? "active_review_button" : ""
                    }`}
                    onClick={() => setActiveButton("icmal")}
                >
                    <span className="circle flex"></span>
                    <span>Icmal</span>
                </Button>
                <Button
                    className={`flex items-center gap-x-1 bg-white relative hover:bg-gray-100 p-1.5 ${
                        activeButton === "tam" ? "active_review_button" : ""
                    }`}
                    onClick={() => setActiveButton("tam")}
                >
                    <span className="circle flex"></span>
                    <span>Tam</span>
                </Button>
            </div>
            <div className="exports flex items-center gap-x-2">
                <Button className="flex items-center gap-x-1 bg-white relative hover:bg-gray-100 p-1.5">
                    <img src={ExcelIcon} alt="Excel Icon" />
                    <span>Export xlsx</span>
                </Button>
                <Button className="flex items-center gap-x-1 bg-white relative hover:bg-gray-100 p-1.5">
                    <img src={AdobeIcon} alt="PDF Icon" />
                    <span>Export PDF</span>
                </Button>
            </div>
        </div>
    );
}
