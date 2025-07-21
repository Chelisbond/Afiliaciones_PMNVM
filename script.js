const form = document.querySelector("#form-contacto");
const status = document.querySelector("#form-status");

const scriptURL = "https://script.google.com/macros/s/AKfycbwjEjgu56mrH-ll1yk--h8eZVD_ubr5gNO_OwOa4ZqluNCkZUwjqIOey-CD0T6LP2SM/exec"; // <-- Pega aquí tu URL del Web App

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
