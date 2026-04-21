export let data = JSON.parse(localStorage.getItem("mpiData")) || [];

export const harga = {
  Umum:10000,
  Sabak:10000,
  Paket:35000,
  Grip:50000,
  Ongotan:100000
};

export function saveData(){
  localStorage.setItem("mpiData", JSON.stringify(data));
}
