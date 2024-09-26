import React, { useEffect, useState } from "react";
import Logo from "../../assets/person.png";
import { adminSidebarData } from "../../Data/Data";
import { UilSignout } from "@iconscout/react-unicons";

const AdminSidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <div className="logo">
        <img src={Logo} alt="" />
        <span>Admin</span>
      </div>

      <div className="menu">
        {adminSidebarData.map((items, index) => {
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
          <UilSignout  />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
