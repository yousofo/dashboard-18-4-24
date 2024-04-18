import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectTheme } from "../../app/themeSlice";

const Item = ({ link, title, Icon }) => {
  const theme = useSelector(selectTheme)
  return (
    <li className="relative w-full py-3 sm:py-4">
      <NavLink
        to={`${link}`}
        className="flex flex-col items-center justify-center gap-1.5"
      >
        {<Icon className={`text-2xl sm:text-4xl`} />}
        <p className="capitalize hidden sm:block text-xs sm:text-sm text-center">{title}</p>
      </NavLink>
      <span style={{backgroundColor:`${theme.borderColor}`,height:"1px"}} className="absolute block w-48 bottom-0 -left-10"></span>
    </li>
  );
};

export default Item;
