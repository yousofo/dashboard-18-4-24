import React from "react";
import Ticket from "./Ticket";

const ticketsData = [
  { name: "Mayra Sibley", time: "09.08.2018 - 12:45" },
  { name: "Mimi Carreira", time: "09.08.2018 - 12:45" },
  { name: "Philip Nelms", time: "05.08.2018 - 10:20" },
  { name: "Terese Threadgill", time: "05.08.2018 - 09:12" },
  { name: "Kathryn Mengel", time: "01.08.2018 - 18:20" },
  { name: "Esperanza Lodge", time: "09.08.2018 - 12:45" },
  { name: "Laree Munsch", time: "05.08.2018 - 10:20" },
  { name: "Mimi Carreira", time: "05.08.2018 - 09:12" },
  { name: "Esperanza Lodge", time: "01.08.2018 - 18:20" },
];

const Tickets = () => {
  return (
    <ul className="flex flex-col gap-3 overflow-y-auto absolute w-full h-full custom-scrollbar custom-sb-1">
      {ticketsData.map((e, i) => (
        <Ticket key={i} name={e.name} time={e.time} />
      ))}
    </ul>
  );
};

export default Tickets;
