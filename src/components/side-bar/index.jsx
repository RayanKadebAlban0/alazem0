import { Styles } from './styles'
import { NavLink } from 'react-router-dom'
// import NavItem from "../side-bar/item";
// import HomeIcon from '@mui/icons-material/Home';
// import GroupIcon from '@mui/icons-material/Group';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
// import EqualizerIcon from '@mui/icons-material/Equalizer';
// import AssignmentIcon from '@mui/icons-material/Assignment';

// import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import { routs } from '../../router';


const NavItem = ({ to, title, icon, expanded }) => (
    <NavLink
        to={to}
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
    >
        <div className="icon-wrapper">{icon}</div>
        {expanded && <span className="label">{title}</span>}
    </NavLink>
);


const SideBar = ({ expanded, onToggle }) => {

    return (
        <Styles expanded={expanded}>

            <div  >
                <div className="main" onClick={onToggle}>
                    <MenuIcon />
                </div>
                <nav>
                    {routs.filter(route => !route.hideInSidebar)
                        .map((route) => (
                            <NavItem
                                key={route.path}
                                to={route.path}
                                title={route.title}
                                icon={route.icon}
                                expanded={expanded}
                            />
                        ))}

                </nav>
            </div>




        </Styles>
    )
}

export default SideBar
