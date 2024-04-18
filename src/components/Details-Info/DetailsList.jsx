import React from "react";
import DetailsInfo from "./DetailsInfo";
import { FaComments, FaTasks } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { GrPowerCycle } from "react-icons/gr";

const DetailsList = () => {
  return (
    <div className="flex gap-3 sm:gap-6">
      <DetailsInfo name="Pending Orders" Icon={LuAlarmClock} count={18} />
      <DetailsInfo name="Completed Orders" Icon={FaTasks} count={12} />
      <DetailsInfo name="Refund Requests" show={true} Icon={GrPowerCycle} count={15} />
      <DetailsInfo name="New Comments" show={true} Icon={FaComments} count={22} />
    </div>
  );
};

export default DetailsList;
