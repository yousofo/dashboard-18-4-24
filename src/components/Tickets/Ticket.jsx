import React from "react";

const Ticket = ({ name, time }) => {
  return (
    <li className="flex items-center gap-3 border-b border-b-gray-700 pb-3">
      <img className="w-10 rounded-full" src="/media/ticker-img.jpg" alt="" />
      <div>
        <p className="capitalize">{name}</p>
        <span className="opacity-80">{time}</span>
      </div>
    </li>
  );
};

export default Ticket;
