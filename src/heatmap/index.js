import React, { useEffect } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import './styles.css'

export default function PieChartb(props) {
  console.log(props)
  const options = {
    legend: {
      display: false,
      position: "right"
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };
  const pieOptions = {
    legend: {
      display: true,
      position: "right",
      legendCallback: function(chart) {
        console.log(chart);
        return [
          <ul>
            <li>z</li>
            <li>zzzz</li>
            <li>ppp</li>
            <li>adasda</li>
          </ul>
        ];
      }
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };
  
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: [],
    datasets: [
      {
        data: props.doughdata,
        backgroundColor: props.doughcolor,
        borderColor:"black",
        borderWidth:1,
        hoverBackgroundColor: "black"
      }
    ]
  };
  
  const pieData = {
    maintainAspectRatio: false,
    responsive: false,
    labels: [],
    datasets: [
      {
        data: props.piedata,
        backgroundColor: ["red", "green", "yellow"],
        hoverBackgroundColor: "black",
        borderColor:"black",
        borderWidth: 1
      }
    ]
  };
  
  let chartInstance = null;
  return (
    <div className="pieanddough">
      <div style={styles.relative}>
        <div className="dough">
        <Doughnut data={data} options={options} /></div>
        <div className="pie">
          <Pie
            data={pieData}
            options={pieOptions}
            ref={input => {
              chartInstance = input;
            }}
          />
        </div>
        <div id="legend" />
      </div>
    </div>
  );
}

const styles = {
  relative: {
    position: "relative"
  }
};