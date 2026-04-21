import {data} from "../core/data.js";

let chart;

function loadChart(){

  let bulan = new Array(12).fill(0);

  data.forEach(d=>{
    let b = new Date(d.tanggal).getMonth();
    bulan[b]+=d.jumlah;
  });

  chart = new Chart(document.getElementById("chart"),{
    type:"bar",
    data:{
      labels:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],
      datasets:[{label:"Pengunjung",data:bulan}]
    }
  });
}

loadChart();
