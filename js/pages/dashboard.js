import {data, harga, saveData} from "../core/data.js";

const form = document.getElementById("form");

form.onsubmit = e=>{
  e.preventDefault();

  let h = kategori.value==="UNY"?0:harga[paket.value];
  let total = h * jumlah.value;

  data.push({
    tanggal:tanggal.value,
    nama:nama.value,
    kategori:kategori.value,
    paket:paket.value,
    jumlah:+jumlah.value,
    total
  });

  saveData();
  render();
};

function render(){
  let tbody = document.getElementById("tbody");
  tbody.innerHTML="";

  let tp=0, tu=0;

  data.forEach((d,i)=>{
    tp+=d.jumlah;
    tu+=d.total;

    tbody.innerHTML+=`
    <tr>
      <td>${i+1}</td>
      <td>${d.tanggal}</td>
      <td>${d.nama}</td>
      <td>${d.paket}</td>
      <td>${d.jumlah}</td>
      <td>Rp ${d.total}</td>
    </tr>`;
  });

  totalPengunjung.innerText = tp;
  totalUang.innerText = "Rp " + tu;
}

render();
