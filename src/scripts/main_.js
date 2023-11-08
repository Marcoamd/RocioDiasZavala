document.addEventListener("mousemove", function (event) {
  const trail = document.createElement("div");
  trail.className = "trail";
  document.body.appendChild(trail);
  trail.style.left = event.pageX - 5 + "px";
  trail.style.top = event.pageY - 5 + "px";
  setTimeout(() => {
    trail.remove();
  }, 1000);
});

function activarEnlaceSeleccionado() {
  var paginaActual = window.location.href;

  var enlacesMenu = document.querySelectorAll("#my-menu ul li a");
  enlacesMenu.forEach(function (enlace) {
    if (paginaActual === enlace.href) {
      enlace.classList.add("link-active");
    } else {
      enlace.classList.remove("link-active"); // Remueve la clase "activo" de otros enlaces
    }
  });
}

activarEnlaceSeleccionado();
