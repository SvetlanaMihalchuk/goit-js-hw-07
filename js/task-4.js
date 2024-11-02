const submit = document.querySelector(".login-form");

submit.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;

  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  if (
    elements.email.value.trim() === "" ||
    elements.password.value.trim() === ""
  ) {
    alert("All form fields must be filled in");
    return;
  }
  console.log(info);

  submit.reset();
}
