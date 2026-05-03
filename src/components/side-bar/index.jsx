import { Styles } from './styles'
import { NavLink } from 'react-router-dom'
// import NavItem from "../side-bar/item";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';


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
                    <NavItem to="/Home" title="الصفحة الرئيسية" icon={<HomeIcon sx={{ fontSize: 30 }} />} expanded={expanded} />
                    <NavItem to="/dashboard" title="لوحة التحكم" icon={<DashboardIcon sx={{ fontSize: 30 }} />} expanded={expanded} />
                </nav>
            </div>




        </Styles>
    )
}

export default SideBar
