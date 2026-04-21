let data = JSON.parse(localStorage.getItem("mpiData")) || [];

const harga = {
  Umum:10000,
  Sabak:10000,
  Paket:35000,
  Grip:50000,
  Ongotan:100000
};

const form = document.getElementById("form");

if(form){
form.onsubmit = e=>{
  e.preventDefault();

  let tanggal = document.getElementById("tanggal").value;
  let nama = document.getElementById("nama").value;
  let kategori = document.getElementById("kategori").value;
  let paket = document.getElementById("paket").value;
  let jumlah = document.getElementById("jumlah").value;

  let h = kategori==="UNY"?0:harga[paket];
  let total = h * jumlah;

  data.push({tanggal,nama,kategori,paket,jumlah,total});
  localStorage.setItem("mpiData", JSON.stringify(data));

  render();
};
}

function render(){
  let tbody = document.getElementById("tbody");
  if(!tbody) return;

  tbody.innerHTML="";
  let tp=0,tu=0;

  data.forEach((d,i)=>{
    tp+=parseInt(d.jumlah);
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

  document.getElementById("totalPengunjung").innerText = tp;
  document.getElementById("totalUang").innerText = "Rp "+tu;
}

render();
