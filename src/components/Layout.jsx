import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../app/themeSlice";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

import { MdOutlineSpaceDashboard as i1 } from "react-icons/md";
import { IoWalletOutline as i2, IoMailOutline as i5 } from "react-icons/io5";
import { CiShoppingCart as i8, CiCoinInsert as i6 } from "react-icons/ci";
import { IoIosTrendingUp as i4 } from "react-icons/io";
import { GrTransaction as i7 } from "react-icons/gr";
import { TbRobotFace as i3} from "react-icons/tb";



const HomeLayout = ({ children }) => {
  const theme = useSelector(selectTheme);
  const items = [
    { title: "dashboard", icon: i1, link: "/" },
    { title: "Gemini AI", icon: i3, link: "/GeminiAI" },
    { title: "Crypto Wallet", icon: i2, link: "/Crypto-Wallet" },
    { title: "Tickers", icon: i4, link: "/Tickers" },
    { title: "Mail Box", icon: i5, link: "/Mail-Box" },
    { title: "Crypto Stats", icon: i6, link: "/Crypto-Stats" },
    { title: "Transactions", icon: i7, link: "/Transactions" },
  ];
  return (
    <>
      <Header />
      <main
        className="flex flex-1 transition-all"
        style={{ backgroundColor: theme.homeBG, color: theme.defaultTextColor }}
      >
        <NavBar items={items} />
        {children}
      </main>
    </>
  );
};

export default HomeLayout;
