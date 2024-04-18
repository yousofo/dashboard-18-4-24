import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../app/themeSlice";
import ToggleBtn from "../buttons/ToggleBtn";
import { switchStatus } from "../../app/statusSlice";
/*
  homeBG: "#1d1a1d",
  themeColor: "#7e4877",
  defaultTextColor: "#8f8f8f",
  componentBG: "#242224",
*/
const Header = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  console.log("header rendered");

  const style1 = {
    backgroundColor: theme.componentBG,
    color: theme.defaultTextColor,
  };
  const style2 = {
    backgroundColor: theme.homeBG,
    color: theme.defaultTextColor,
  };
  return (
    <header
      style={style1}
      className={`flex sticky top-0 z-50 items-center p-4 gap-2 sm:p-8 text-sm justify-between shadow`}
    >
      <div className="interact flex items-center gap-2">
        <AiOutlineBars
          onClick={() => dispatch(switchStatus())}
          className="text-2xl cursor-pointer sm:me-9"
        />
        <div
          style={style2}
          className="header-search-input flex items-center py-2 px-4 rounded-2xl"
        >
          <input
            className="bg-transparent w-[100px] sm:w-[160px]"
            type="search"
            placeholder="Search"
            name=""
            id=""
          />
          <FaMagnifyingGlass />
        </div>
        <div className="header-language-select rounded-2xl overflow-hidden hidden sm:block">
          <select
            style={style2}
            className="py-2 px-4 bg-transparent focus:outline-none cursor-pointer"
          >
            <option value="english">English</option>
            <option value="arabic">Arabic</option>
          </select>
        </div>
        <a
          href="#"
          style={{
            color: theme.themeColor,
            border: `1px solid ${theme.themeColor}`,
          }}
          className={`py-2 px-4 border rounded-2xl hidden sm:block`}
        >
          Buy
        </a>
      </div>
      <div className="logo hidden xl:flex  justify-center items-center absolute left-0 right-0 mx-auto h-14  w-32">
        <div className="rounded-full h-full w-14 overflow-hidden">
          <img className="h-full" src="/media/bugsbunny.png" alt="" />
        </div>
        <h2 className="text-white font-bold text-2xl">DEMO</h2>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ToggleBtn />
        <div className="flex items-center gap-2 text-sm">
          <img
            src="/media/ticker-img.jpg"
            className="w-10 rounded-full "
            alt=""
          />
          <p className="text-gray-300 w-min sm:w-fit">Youssef Nabil</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
