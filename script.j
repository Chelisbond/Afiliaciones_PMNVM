"script.js": """document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const data = new FormData();
      data.append("email", email);

      fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (response.ok) {
            alert("Gracias por tu interés. Te contactaremos pronto.");
            form.reset();
          } else {
            alert("Ocurrió un error. Intenta de nuevo más tarde.");
          }
        })
        .catch(() => {
          alert("Ocurrió un error. Intenta de nuevo más tarde.");
        });
    });
  }
});