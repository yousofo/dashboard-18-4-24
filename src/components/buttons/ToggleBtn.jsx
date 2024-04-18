import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode, selectTheme } from "../../app/themeSlice";

const ToggleBtn = () => {
  const [mode, setMode] = useState(false);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  function handleClick() {
    setMode(!mode);
    dispatch(mode ? darkMode() : lightMode());
  }
  return (
    <div
      style={{ backgroundColor: theme.homeBG }}
      onClick={handleClick}
      className={`w-10 relative h-6 rounded-xl cursor-pointer toggle-btn ${
        mode && "toggle-btn-active"
      }`}
    >
      <div
        style={{ backgroundColor: theme.themeColor }}
        className="w-4 h-4 rounded-full absolute left-1 top-1"
      ></div>
    </div>
  );
};

export default ToggleBtn;
