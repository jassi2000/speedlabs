import React from 'react'
import data from "./data.json"
import Heatmap from "../heatmap"
import Barchart from '../BarChart';

export default function Bothchart(){
    console.log(data);
    let i=0;
    let j=0;
    let k=0;
    let l=0;
    let doughdata=[];
    let Array1=[];
    let Array2=[];
    let Array3=[];
    let Array1color=[];
    let Array2color=[];
    let Array3color=[];
    let ArrayallColor=[];

    let Barchartyourtime=[];
    let Barchartyourtimecolor=[];
    let Barcharttoppertime=[];
    let Quesno =[];
    for(i=0;i<data.length;i++){
        Barchartyourtime[i] = data[i]['your-time'];
        Barcharttoppertime[i] = data[i]['topper-time'];
        if(data[i].Correct === "yes"){
           Array1[l] = data[i];
           if(Array1[l].Quetype === "Easy")
           {
               Array1color[l] = "cyan";
           }
           else if(Array1[l].Quetype === "Medium")
           {
               Array1color[l] = "lightgreen";
           }
           else{
               Array1color[l] = "lightpink";
           }
           l++;
        }
        else if(data[i].Correct === "no"){
            Array2[j] = data[i];
            if(Array2[j].Quetype === "Easy")
           {
               Array2color[j] = "cyan";
           }
           else if(Array2[j].Quetype === "Medium")
           {
               Array2color[j] = "lightgreen";
           }
           else{
               Array2color[j] = "lightpink";
           }
           j++;
        }
        else{
            Array3[k] = data[i];
            if(Array3[k].Quetype === "Easy")
            {
                Array3color[k] = "cyan";
            }
            else if(Array3[k].Quetype === "Medium")
            {
                Array3color[k] = "lightgreen";
            }
            else{
                Array3color[k] = "lightpink";
            }
            k++;
        }
        if(data[i].Quetype === "Easy")
           {
               Barchartyourtimecolor[i] = "cyan";
           }
           else if(data[i].Quetype === "Medium")
           {
            Barchartyourtimecolor[i] = "lightgreen";
           }
           else{
            Barchartyourtimecolor[i] = "lightpink";
           }
        doughdata[i] = 1;
        Quesno[i] = data[i].Queno;
    }
    ArrayallColor = Array1color.concat(Array2color).concat(Array3color);
    console.log(Array1, Array2,Array3)

    return(
        <div>
            <Heatmap piedata={[Array1.length,Array2.length,Array3.length]} doughcolor={ArrayallColor} doughdata={doughdata}/>
            <Barchart Queno ={Quesno} yourTime={Barchartyourtime} yourtimeColor={Barchartyourtimecolor} topperTime={Barcharttoppertime}/>
        </div>
    )
}