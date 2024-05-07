import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../app/themeSlice";

const ComponentWrapper = ({ title, children }) => {
  const theme = useSelector(selectTheme);
  return (
    <div
      className="w-full transition-all p-3 sm:p-6 rounded flex-1 h-full flex flex-col justify-between relative theme-component"
      style={{ backgroundColor: theme.componentBG }}
    >
      {title && <h3 className="capitalize  mb-4 text-lg">{title}</h3>}
      <div className="flex-1 w-full flex flex-col relative min-h-[200px]">{children}</div>
    </div>
  );
};

export default ComponentWrapper;
