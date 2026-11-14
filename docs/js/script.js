// ==========================================================
// GÁLVEZ GP · JavaScript
// ==========================================================

// ---------- 1. Entradas: se leen desde data/data.json con fetch ----------
// (la ruta es relativa al HTML: index.html)
const cargarEntradas = () => {
  fetch('data/data.json')
    .then(res => res.json())
    .then(datos => {
      let contenedor = document.getElementById('contenedor-entradas');
      let htmlAcumulado = '';

      // Se arma una tarjeta por cada objeto del array
      datos.forEach(item => {
        htmlAcumulado += `<div class="col">`;
        htmlAcumulado += `  <div class="tarjeta-entrada border h-100 d-flex flex-column p-4">`;
        htmlAcumulado += `    <p class="tarjeta-numero mb-4">${item.numero}</p>`;
        htmlAcumulado += `    <h3 class="tarjeta-titulo mb-3">${item.titulo}</h3>`;
        htmlAcumulado += `    <p class="tarjeta-texto mb-4">${item.descripcion}</p>`;
        htmlAcumulado += `    <p class="tarjeta-precio mt-auto mb-3">${item.precio}</p>`;
        htmlAcumulado += `    <button type="button" class="enlace-card" data-bs-toggle="modal" data-bs-target="#modalEntradas">${item.cta} ↗</button>`;
        htmlAcumulado += `  </div>`;
        htmlAcumulado += `</div>`;
      });

      // Se inyecta todo junto en el DOM
      contenedor.innerHTML = htmlAcumulado;
    })
    .catch(error => {
      console.log(error);
      document.getElementById('contenedor-entradas').innerHTML =
        `<div class="col"><p class="texto-seccion">No pudimos cargar las entradas. Probá de nuevo en unos minutos.</p></div>`;
    });
};

cargarEntradas();

// ---------- 2. Validación del formulario con Bootstrap ----------
const forms = document.querySelectorAll('.needs-validation');

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add('was-validated');
  });
});
