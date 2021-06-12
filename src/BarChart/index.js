import React from 'react';
import {Bar} from 'react-chartjs-2';


export default function Barchart(props) {
  console.log(props);
  const state = {
    labels: props.Queno,
    datasets: [
      {
        label: 'Your time',
        backgroundColor: props.yourtimeColor,
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: props.yourTime
      },
      {
          label: 'Topper time',
          backgroundColor: 'black',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 1,
          data: props.topperTime
        }
    ]
  }

    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              fontSize:40
            },
            legend:{
              display:true,
              position:'right'
            },
            
          }}
        />
      </div>
    );
}