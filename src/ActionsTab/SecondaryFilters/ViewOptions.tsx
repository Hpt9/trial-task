import React from 'react'
import Constructional from './Constructional'
import DateConf from './DateConf'

export default function ViewOptions() {
  return (
    <div className='flex justify-between items-center w-full' style={{borderBottom:"1px solid rgba(237, 237, 237, 1)",borderRadius:"8px"}}>
        <Constructional/>
        <DateConf/>
    </div>
  )
}
