import { Bar } from "react-chartjs-2";
import React from "react";
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default function BarChart({ chartData }) {

    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: 'false',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
        scales: {
            x: {
            grid: {
                display: false,
              },
            ticks: {
                display: false,
            },
            },
            y: {
            grid: {
                display: false,
              },
            ticks: {
                display: false,
            },
            },
          },
        },
    };

    var keys = chartData.map((i) => {
        return i[0];
    });
    var values = chartData.map((i) => {
        return Number(i[1]*100);
    });
  
    // console.log(values)
    const data = {
        labels:keys,
        datasets: [
            {
            label: '%',
            data: values,
            backgroundColor: 'rgba(0, 245, 110, 0.2)',
            borderColor: 'rgba(0, 245, 110, 1)',
            borderWidth: 2,
            },
        ],
    }

  return (
    <div className="w-full h-fit">
      <Bar
        className="w-full h-fit"
        data={data}
        options={options}
      />
    </div>
  );
};