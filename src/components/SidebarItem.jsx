import React from 'react'
import '../styles/SideBarItem.css'

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const SidebarItem = ({ arrow, icon, label }) => {
    return (
        <div className='sidebarItem'>
            <div className="sidebarItem__arrow">
                {arrow && (<ArrowRightIcon />)}
            </div>
            
            <div className='sidebarItem__main'>
                 {icon}
                <p>{label}</p>
            </div>
        </div>

    )
}

export default SidebarItem