// ================  CARRUSEL  =================================
const slides = document.querySelectorAll('.carruselCard li');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides[currentSlide].style.display = 'none';
  slides[slideIndex].style.display = 'block';
  currentSlide = slideIndex;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}
function autoSlide(){
    nextSlide();
}
// Agregamos un temporizador para cambiar las imágenes cada 5 segundos
const interval = setInterval(autoSlide, 5000);
// Manualmente lo hacemos tambien
document.getElementById('prevBoton').addEventListener('click', prevSlide);
document.getElementById('nextBoton').addEventListener('click', nextSlide);







/* ================       PREFERENCIA  ====================*/
document.addEventListener("DOMContentLoaded", function() {
  const temaSelect = document.getElementById("tema");
  const guardaButton = document.getElementById("guarda2");

  // Recuperar la preferencia de tema almacenada en localStorage, si existe
  const temaAlmacenado = localStorage.getItem("tema");
  if (temaAlmacenado) {
    document.body.style.backgroundColor = temaAlmacenado === "oscuro" ? "#737373" : "white";
    document.body.style.color = temaAlmacenado === "oscuro" ? "white" : "#737373";
    temaSelect.value = temaAlmacenado;
  }

  // Agregar un evento click al botón "Guardar Cambios"
  guardaButton.addEventListener("click", function() {
    const temaElegido = temaSelect.value;

    // Guardar la preferencia del tema en localStorage
    localStorage.setItem("tema", temaElegido);

    if (temaElegido === "oscuro") {
      // Cambiar el fondo del body a oscuro
      document.body.style.backgroundColor = "#737373";
      document.body.style.color = "#f5f5f5";
    } else {
      // Restaurar el fondo claro
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "black";
    }
  });
});


