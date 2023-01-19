import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
const SideMenu = () => {
  return (
    <div className="sidemenu-container">
      <HomeIcon style={{ cursor: "pointer" }} />
      <SettingsSuggestIcon style={{ marginTop: 15, cursor: "pointer" }} />
    </div>
  );
};

export default SideMenu;
