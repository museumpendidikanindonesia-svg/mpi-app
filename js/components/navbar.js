export function navbar(active){
  return `
  <div class="navbar">
    <div><b>MPI</b></div>
    <div class="nav-menu">
      <div class="nav-item ${active==='dashboard'?'active':''}" onclick="location.href='dashboard.html'">Dashboard</div>
      <div class="nav-item ${active==='statistik'?'active':''}" onclick="location.href='statistik.html'">Statistik</div>
    </div>
  </div>
  `;
}
