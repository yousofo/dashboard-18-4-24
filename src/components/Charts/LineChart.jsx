import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  maintainAspectRatio: false,
  // onResize: function (e, size) {
  //   e?.prototype?.reset();
  // },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 4, 5, 3, 6, 4, 5],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
export default function LineChart() {
  let charRef = useRef(null);

  useEffect(() => {
    let myListener = window.addEventListener("resize", () => {
      charRef.current?.resize(300, 300);
    });
    return () => {
      removeEventListener("resize", myListener);
    };
  }, []);
  return (
    <Line ref={charRef} className="w-full" options={options} data={data} />
  );
}
