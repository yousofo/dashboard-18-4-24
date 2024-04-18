import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../app/themeSlice";

const Order = ({ data }) => {
  const theme = useSelector(selectTheme);
  return (
    <li
      className="flex gap-2 items-center h-min"
      
    >
      <img src="/media/marble-cake-thumb.jpg" className="h-20 w-24 object-cover" alt="" />
      <div>
        <h3 className="text-lg capitalize">{data.title}</h3>
        <p className="text-sm">{data.description}</p>
        <p className="text-sm" style={{ color: theme.themeColor }}>{data.date}</p>
      </div>
    </li>
  );
};

export default Order;
