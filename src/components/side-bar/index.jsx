import React, { useState } from 'react'
import { Styles } from './styles'
import { Link } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';


const SideBar = () => {
    const [show, setshow] = useState(false)

    return (
        <Styles>

            <div  className={show ? "sidebar1" : "sidebar"} >
                <div className="main" onClick={() => setshow(!show)}>
            <MenuIcon/>
                </div>
                <ul>
                    <li>
                       
                        {show && <Link to="/">Home</Link>}
                         <div className='icon'><HomeIcon sx={{ fontSize: 40 }} /></div>
                    </li>
                    <li>
                          {show && <Link to="/dashboard">Dashboard</Link>}
                        <d className='icon'><DashboardIcon/></d>
                     
                    </li>
                </ul>
            </div>
        </Styles>
    )
}

export default SideBar
