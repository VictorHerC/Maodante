let navBar = document.getElementById("menu");

function menu() {
  navBar.innerHTML = ` <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a class="navbar-brand" href="/index.html"><h1>MA</h1>
  <img class="logo"  src="/imagenes/CAP.png" alt="Cap"  width="70" height="70" > <h2>DANTE</h2></a>
<br>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <a class="nav-link" href="/html/trabajo.html">Work</a>
        <a class="nav-link" href="/html/acercademi.html">AboutMe</a>
        <a class="nav-link" href="/html/contacto.html">Contact</a>
        <a class="nav-link "href="#">Courses</a>
      </div>
    </div>
    
  </div>
</nav>
`;
}
menu();