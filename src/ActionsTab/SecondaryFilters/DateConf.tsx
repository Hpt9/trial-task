import { Button } from "@/components/ui/button"
import React from 'react'
import StatusIcon from '../../assets/f7_status.svg'
import CalendarIcon from '../../assets/stash_data-date-duotone.svg'

export default function DateConf() {
    return (
        <div className='dateConf_btns flex gap-x-1 items-center'>
            <Button className="flex items-center gap-x-2 bg-transparen relative top-px hover:bg-gray-100">
                <img src={StatusIcon} alt="" />
                <span>Status</span>
            </Button>
            <Button className="flex items-center gap-x-2 bg-transparent relative top-px hover:bg-gray-100">
                <img src={CalendarIcon} alt="" />
                <span>Tarix</span>
            </Button>
        </div>
    )
}
