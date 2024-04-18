import React from "react";
import Order from "./Order";

const ordersData = [
  {
    title: "marble cake",
    description: "Wedding cake with flowers Macarons and blueberries",
    date: "16.04.2024",
    status: "on hold",
  },
  {
    title: "fat rascal",
    description: "Cheesecake with chocolate cookies and Cream biscuits",
    date: "17.04.2024",
    status: "processed",
  },
  {
    title: "chocolate cake",
    description: "Homemade cheesecake with fresh berries and mint",
    date: "18.04.2024",
    status: "processed",
  },
  {
    title: "goose breast",
    description: "Chocolate cake with berries",
    date: "19.04.2024",
    status: "processed",
  },
  {
    title: "petit gateau",
    description: "Chocolate cake with mascarpone",
    date: "20.04.2024",
    status: "on hold",
  },
  {
    title: "Salzburger Nockerl",
    description: "Wedding cake decorated with donuts and wild berries",
    date: "21.04.2024",
    status: "processed",
  },
  {
    title: "Salzburger Nockerl",
    description: "Wedding cake decorated with donuts and wild berries",
    date: "21.04.2024",
    status: "processed",
  },
  {
    title: "Salzburger Nockerl",
    description: "Wedding cake decorated with donuts and wild berries",
    date: "21.04.2024",
    status: "processed",
  },
];

const OrderList = () => {
  return (
    <ul className="flex gap-4 flex-col flex-1 overflow-y-auto absolute w-full h-full custom-scrollbar custom-sb-1">
      {ordersData.map((e, i) => (
        <Order key={i} data={e} />
      ))}
    </ul>
  );
};

export default OrderList;
