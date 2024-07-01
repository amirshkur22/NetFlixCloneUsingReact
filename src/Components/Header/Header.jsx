/* eslint-disable no-unused-vars */
import React from "react";
import "./header.css";
import netflixLogo from "../../Images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="headerOuterWrapper">
      <div className="headerInnerWrapper">
        <div className="headerLeft">
          <ul>
            <li>
              <a href="/">
                <img src={netflixLogo} alt="" width={150} />
              </a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">TVShow</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">Mylists</a>
            </li>
            <li>
              <a href="#">Browse by Languages</a>
            </li>
          </ul>
        </div>
        <div className="headerRight">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>

            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
