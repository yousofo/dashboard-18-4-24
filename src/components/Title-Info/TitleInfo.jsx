import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../app/themeSlice";

const TitleInfo = ({title}) => {
  const theme = useSelector(selectTheme);

  return (
    <section
      style={{ borderBottom: `1px solid ${theme.borderColor}` }}
      className="flex items-end gap-3.5 pb-3"
    >
      <h2 className="text-2xl">Dashboard</h2>
      <p className="text-sm pb-0.5">
        Demo | <span>{title}</span>
      </p>
    </section>
  );
};

export default TitleInfo;
