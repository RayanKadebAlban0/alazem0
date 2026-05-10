// import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import LogoPhoto from "../logo-photo/index.jsx";
import { Styles } from './styles';
import PhotoProfile from "../photo-profile/index.jsx";
// import notification from "../../assets/images/notification.svg";
// import setting from "../../assets/images/setting.svg";
import search from "../../assets/images/search.svg"



const NavbarComponent = () => {
  return (
    <Styles>
      <nav className="nav">
        <div className="brand-section">
          <div className="LogoPhoto"><LogoPhoto /></div>
          <span className="logo">ALAZEM</span>
          <div className="search-box">
            <img src={search} alt="search" className="search-photo" />
            <input type="text" placeholder="ابحث عن نشاط" />
          </div>
        </div>

        <div className="nav-actions">
          {/* <div className="note-setting">
            <div className="notification">
              <img src={notification} alt="notification" />
            </div>
            <div className="setting">
              <img src={setting} alt="setting" />
            </div>
          </div> */}


          <div className="user-section"> <h5>Rayan</h5></div>
          <div className="icon-btn"> <PhotoProfile /></div>
        </div>




      </nav>
    </Styles>
  );
};
export default NavbarComponent;