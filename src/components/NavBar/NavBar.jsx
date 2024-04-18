import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../app/themeSlice";
import Item from "./Item";
import { selectStatus } from "../../app/statusSlice";

const NavBar = ({ items }) => {
  const theme = useSelector(selectTheme);
  const barStatus = useSelector(selectStatus);
  // const [active, setActive] = useState(false);

   console.log("navbar rendered");
  return (
    <nav
      style={{
        backgroundColor: theme.componentBG,
        // transform: `translate(${barStatus ? "0" : "-100%"},0)`,
        width: `${barStatus ? "0" : "120px"}`,
        transition: "0.3s",
      }}
      className={`fixed shadow-2xl drop-shadow-2xl max-w-fit overflow-hidden sm:sticky sm:-translate-x-0 h-[calc(100vh-72px)] top-[72px] sm:h-[calc(100vh-104px)] sm:top-[104px] w-fit flex z-10 flex-col font-semibold`}
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
