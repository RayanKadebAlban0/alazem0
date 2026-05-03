// import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import LogoPhoto from "../logo-photo/index.jsx";
import { Styles } from './styles';
import PhotoProfile from "../photo-profile/index.jsx";


const NavbarComponent = () => {
  return (
    <Styles>
      <nav className="nav">
        <div className="brand-section">
          <div className="LogoPhoto"><LogoPhoto /></div>
          <span className="logo">ALAZEM</span>
        </div>

        <div className="nav-actions">
          <div className="search-box">
            {/* <FaSearch /> */}
            <input type="text" placeholder="Search..." />
          </div>

          <div className="user-section">
            {/* <FaUserCircle /> */}
            <div>
              <h5>Rayan</h5>
            </div>

            <div className="icon-btn">
              <PhotoProfile />
            </div>


          </div>
        </div>
      </nav>
    </Styles>
  );
};
export default NavbarComponent;