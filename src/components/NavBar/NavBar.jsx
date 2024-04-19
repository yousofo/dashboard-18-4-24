import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../app/themeSlice";
import Item from "./Item";
import { selectStatus } from "../../app/statusSlice";

const NavBar = ({ items }) => {
  const theme = useSelector(selectTheme);
  const barStatus = useSelector(selectStatus);

   console.log("navbar rendered");
  return (
    <nav
      style={{
        backgroundColor: theme.componentBG,
        // width: `${!barStatus ? "0" : "120px"}`,
        // minWidth: `${!barStatus ? "0" : "120px"}`,
        // maxWidth: `${!barStatus ? "0" : "120px"}`,
        // transition: "width 0.3s",
      }}
      className={`fixed w-0 ${barStatus && "active"} shadow-2xl flex-1 drop-shadow-2xl 
       overflow-hidden sm:sticky 
      h-[calc(100vh-72px)] top-[72px] sm:h-[calc(100vh-104px)] sm:top-[104px] flex z-10 flex-col font-semibold`}
    >
      <ul className="flex flex-col items-center w-max p-2 sm:p-4  overflow-hidden">
        {items?.map((e, i) => (
          <Item title={e.title} link={e.link} key={i} Icon={e.icon} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
