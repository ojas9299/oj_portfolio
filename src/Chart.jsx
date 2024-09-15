import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset } from "./dataser";

const chartSetting = {
  xAxis: [
    {
      label: "SKILLS",
    },
  ],
<<<<<<< HEAD
  width: 450,
=======
  width: 400,
>>>>>>> origin/main

  height: 450,
};

const valueFormatter = (value) => `${value}% Use Case`;

export default function BasicPie() {
  return (
    <>
<<<<<<< HEAD
      <div className="overflow-hidden lg:flex mb-32 rounded-3xl  lg:mx-20 mx-10 py-10 chart-bg">
=======
      <div className=" overflow-hidden lg:flex mb-32 rounded-3xl  lg:mx-20 mx-4 sm:mx-10 py-10 chart-bg">
>>>>>>> origin/main
        <div className=" lg:mx-6 lg:px-32 lg:py-20 mb-24 rounded-full ">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 3, label: "Frontend", color: "#e65100" },
                  { id: 1, value: 4, label: "Backend", color: "#ffd600" },
                  { id: 2, value: 2, label: "DataBases", color: "#81c683" },
                  { id: 3, value: 1, label: "Cloud", color: "#02aebe" },
                ],
              },
            ]}
<<<<<<< HEAD
            width={400}
            height={200}
          />
        </div>
        <div className=" lg:block mx-6 lg:mx-10 rounded-xl ">
=======
            width={370}
            height={200}
          />
        </div>
        <div className=" lg:block mx-2 sm:mx-6 lg:mx-10 rounded-xl px-4">
>>>>>>> origin/main
          <BarChart
            dataset={dataset}
            yAxis={[
              {
                scaleType: "band",
                dataKey: "language",
              },
            ]}
            series={[
              { dataKey: "usage", label: "Language Usage", valueFormatter },
            ]}
            layout="horizontal"
            grid={{ vertical: true }}
            {...chartSetting}
          />
        </div>
      </div>
    </>
  );
}
