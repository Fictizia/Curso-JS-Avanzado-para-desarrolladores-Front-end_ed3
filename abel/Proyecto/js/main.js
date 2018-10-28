const forms = document.querySelectorAll(".card_options > form >");

console.log(forms);

forms.forEach(form => {
  form.addEventListener("click", () => {
    console.log(form);
  });
})