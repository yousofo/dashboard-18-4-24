import React from "react";
import TitleInfo from "../components/Title-Info/TitleInfo.jsx";
import { useSelector } from "react-redux";
import { selectStatus } from "../app/statusSlice.js";

const PageWrapper = ({ title, children }) => {
  const navBarStatus = useSelector(selectStatus);

  return (
    <div
      className={`${
        navBarStatus && "nav-active"
      } p-3 home sm:py-8 sm:px-10 mx-auto xl:!max-w-full w-full flex-1 flex flex-col gap-8`}
    >
      <TitleInfo title={title} />
      {children}
    </div>
  );
};

export default PageWrapper;
