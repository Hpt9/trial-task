import './Total.scss'
import Buttons from './Buttons'
import Profile from './Profile'

export default function Total() {
  return (
    <div className='flex gap-x-3 items-center'>
        <Buttons/>
        <Profile/>
    </div>
  )
}
