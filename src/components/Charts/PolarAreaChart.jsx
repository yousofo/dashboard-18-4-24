import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [6, 6.5, 5.5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function PolarAreaChart() {
  let charRef = useRef(null);

  useEffect(() => {
    let myListener2 = window.addEventListener("resize", () => {
      charRef.current?.resize(10000, 10000);
    });
    return () => {
      removeEventListener("resize", myListener2);
    };
  }, []);
  return <PolarArea ref={charRef} className="max-w-72 max-h-96 m-auto" data={data} />;
}
