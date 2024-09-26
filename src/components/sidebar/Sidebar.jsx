import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/person.png";
import { SidebarData } from "../../Data/Data.jsx";
import { UilSignout } from "@iconscout/react-unicons";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <span></span>
      </div>
      {/* menus */}

      <div className="menu">
        {SidebarData.map((items, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <items.icon />
              <span>{items.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
