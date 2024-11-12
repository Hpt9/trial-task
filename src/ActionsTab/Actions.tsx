import FilterTab from '@/ActionsTab/FilterTab/FilterTab'
import Total from './ProfileAndButtons/Total'

export default function Actions() {
  return (
    <div className='flex justify-between pt-12 pb-4 items-center'>
      <FilterTab/>
      <Total/>
    </div>
  )
}
