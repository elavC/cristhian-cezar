  const nav = document.querySelector("header .container nav");
  
  const toggle = document.querySelectorAll(".toggle");
  
  for (element of toggle) {
    element.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
  
  const links = document.querySelectorAll(
    "nav .menu li .menu-item, nav .btn-primary, nav .menu-social li a"
  );
  
  for (const link of links) {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  }

  window.onload = function() {
    Particles.init({
      selector: '.background'
    });
  };
  