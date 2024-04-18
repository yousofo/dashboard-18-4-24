import React from "react";
import Log from "./Log";

const logsData = [
  { message: "14 products added", time: "12:55" },
  { message: "New sale: Napoleonshat", time: "12:44" },
  { message: "New sale: Cremeschnitte", time: "12:30" },
  { message: "New sale: Soufflé", time: "10:40" },
  { message: "2 categories added", time: "10:20" },
  { message: "New sale: Chocolate Cake	", time: "09:28" },
  { message: "New sale: Magdalena	", time: "09:25" },
  { message: "New sale: Fat Rascal	", time: "09:20" },
  { message: "New sale: Parkin	", time: "09:10" },
];

const Logs = () => {
  return (
    <ul className="flex flex-col gap-3 text-sm ">
      {logsData.map((e, i) => (
        <Log key={i} message={e.message} time={e.time} />
      ))}
    </ul>
  );
};

export default Logs;
