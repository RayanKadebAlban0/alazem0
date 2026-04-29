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

            <div className={show ? "sidebar"  : "sidebar1"} >
                <div className="main" onClick={() => setshow(!show)}>
                    <MenuIcon />

                    <ul>
                        <li>
                            <div className='icon'><HomeIcon sx={{ fontSize: 40 }} /></div>
                            {!show && <Link to="/">الصفحة الرئيسية</Link>}

                        </li>
                        <li>
                            <d className='icon'><DashboardIcon /></d>
                            {!show && <Link to="/dashboard">لوحة التحكم</Link>}


                        </li>
                    </ul>
                </div>
            </div>
        </Styles>
    )
}

export default SideBar
