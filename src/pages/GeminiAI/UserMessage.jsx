import React from "react";

const UserMessage = ({ message = "" }) => {
  return (
    <li className="flex gap-2 sm:gap-4">
      <img src="/media/ticker-img.jpg" alt="" className="w-10 h-10 rounded-full" />
      <div className="pt-1.5">{message}</div>
    </li>
  );
};

export default UserMessage;
