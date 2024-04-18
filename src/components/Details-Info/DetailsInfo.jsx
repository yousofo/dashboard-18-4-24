import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../app/themeSlice";

const DetailsInfo = ({ name, count,Icon,show }) => {
  const theme = useSelector(selectTheme);

  return (
    <div
      style={{ backgroundColor: theme.componentBG, color: theme.themeColor }}
      className={`flex-1 flex-col items-center rounded p-2 py-8 text-center flex justify-between gap-2 ${show&& "hidden md:flex"}`}
    >
      <Icon className="text-4xl"/>
      <p style={{ color: theme.defaultTextColor }} className="text-sm">{name}</p>
      <h3 className="text-3xl">{count}</h3>
    </div>
  );
};

export default DetailsInfo;
