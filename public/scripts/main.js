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

var enlacesMenu = document.querySelectorAll("#my-menu ul li a");
enlacesMenu.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    // Llama a la función para establecer la clase "activo" después de hacer clic
    activarEnlaceSeleccionado();
  });
});

// var menuHome = document.getElementById("home");
// menuHome.addEventListener("click", function () {
//   console.log("menuHome", menuHome);
//   activarEnlaceSeleccionado();
// });

// var menuAbout = document.getElementById("about");
// menuAbout.addEventListener("click", function () {
//   activarEnlaceSeleccionado();
// });

// Llama a la función para establecer la clase "activo" cuando se carga la página
activarEnlaceSeleccionado();
