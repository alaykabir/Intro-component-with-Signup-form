const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (input.value == '') {
      input.nextElementSibling.classList.remove("no-error");
      input.nextElementSibling.nextElementSibling.classList.remove("no-error");
      input.classList.add("error-border");
    }
  });
});