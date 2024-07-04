import AddIcon from '@mui/icons-material/Add';
import Calender from '../media/google-calender.svg'
import Keep from '../media/google-keep.png'
import Tasks from '../media/google-tasks.png'


import '../styles/SideIcons.css'

function SideIcons() {
  return (
    <div className='sideIcons'>

      <div className='sideIcons__top'>
           <img src={Calender} alt='calender'
           />
           <img src={Keep} alt='google-keeps'/>
           <img src={Tasks} alt='google tasks'/>
      </div>
      <hr/> 
      <div className='sideIcons__plusIcon'>
        <AddIcon />
      </div>
    </div>
  )
}

export default SideIcons