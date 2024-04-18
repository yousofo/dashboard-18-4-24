import React, { useEffect, useRef, useState } from "react";
import { MdOutlineInsertChartOutlined as MdIcon } from "react-icons/md";
import { FaChevronDown as FaIcon } from "react-icons/fa";

const Item = ({ single, title, children }) => {
  const [isActive, setIsActive] = useState(false);
  const navBtn = useRef(null);
  useEffect(() => {
    navBtn.current.addEventListener("click", () => {
      setIsActive((e) => !e);
    });
    return () => {
      navBtn.current.removeEventListener("click");
    };
  }, []);
  return (
    <li className="overflow-hidden">
      <button
        ref={navBtn}
        className="flex w-full rounded-md p-2 hover:bg-gray-500 items-center justify-between text-md cursor-pointer"
      >
        <span className="flex items-center">
          <MdIcon className={`text-3xl me-1`} />
          {title}
        </span>
        <FaIcon
          className={`${!isActive && "!rotate-180"} transition-all rotate-0 `}
        />
      </button>
      <ul
        className={`${
          !isActive && "!max-h-0 !opacity-0"
        } opacity-100 my-1 max-h-80 ps-4 transition-all`}
      >
        {children}
      </ul>
    </li>
  );
};

export default Item;
