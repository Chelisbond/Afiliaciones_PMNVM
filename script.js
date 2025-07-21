const form = document.querySelector("#form-contacto");
const status = document.querySelector("#form-status");

const scriptURL = "https://script.google.com/macros/s/AKfycbyKbIOKm-OjHHEOUzEDINCrHHSSiy739att-_5C3CcVln6qpKiVOaQFfbvfeo8XmhIl/exec"; // <-- Pega aquí tu URL del Web App

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then(response => {
      status.textContent = "¡Gracias por tu contacto!";
      form.reset();
    })
    .catch(error => {
      console.error("Error:", error);
      status.textContent = "Hubo un error. Intenta más tarde.";
    });
});
