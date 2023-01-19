import React, { useState } from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { BottomNavigation } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../../Assets/img/ethereum.png";

const Header = () => {
  const [value, setValue] = useState(0);
  let navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" width={40} />
        <h3>Ethereum Private Network Management GUI</h3>
      </div>
      <div className="submenu-container">
        <div className="sub-btn-container">
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ height: 40, backgroundColor: "#e0e6e8" }}
          >
            <BottomNavigationAction
              label="Private"
              onClick={() => navigate("/")}
            />
            <BottomNavigationAction
              label="Clients"
              onClick={() => navigate("/setting")}
            />
          </BottomNavigation>
        </div>
        {/* <div className="table-sort-container">
          <FormatListBulletedIcon />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
