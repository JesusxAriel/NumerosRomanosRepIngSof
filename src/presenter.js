import { convertirARomano } from "./numeros_romanos.js";

const numeroInput = document.querySelector("#numero");
const form = document.querySelector("#convertir-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = Number.parseInt(numeroInput.value);

  if (isNaN(numero) || numero <= 0 || numero > 3999) {
    div.innerHTML = "<p>Por favor, introduce un número válido entre 1 y 3999.</p>";
  } else {
    try {
      const romano = convertirARomano(numero);
      div.innerHTML = "<p>El número " + numero + " en romano es: " + romano + "</p>";
    } catch (error) {
      div.innerHTML = "<p>Ocurrió un error al convertir el número.</p>";
    }
  }
});