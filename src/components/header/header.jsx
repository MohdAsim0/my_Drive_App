import driveImg from "../../media/g-drive-logo.png";
import profileImg from "../../media/profile.png"
// import logoutImg from "../../media/logout.png"

import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import '../../styles/Header.css'

function header({userPhoto,signOutGoogle}) {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={driveImg} alt="" />
        <span>Drive</span>
      </div>
      <div className="header_searchContainer">
        <div className="header_searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search in Drive" />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header_icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <button className="button-1" onClick={signOutGoogle}>logout</button>
        {userPhoto === userPhoto ? <img src={userPhoto}  /> : <img src={profileImg} alt />}
      </div>
    </div>
  );
}

export default header;
