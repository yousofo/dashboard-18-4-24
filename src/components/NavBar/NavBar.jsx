import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../app/themeSlice";
import Item from "./Item";

const NavBar = ({ items }) => {
  const theme = useSelector(selectTheme);
  console.log("navbar rendered");
  return (
    //h-[calc(100vh-102px)]
    <nav
      style={{ backgroundColor: theme.componentBG }}
      className={`sticky h-[calc(100vh-72px)] top-[72px] lg:h-[calc(100vh-104px)] sm:top-[104px] w-fit flex z-10 flex-col font-semibold`}
    >
      <ul className="flex flex-col items-center w-max p-1 sm:p-4  overflow-hidden">
        {items?.map((e, i) => (
          <Item title={e.title} link={e.link} key={i} Icon={e.icon} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
