const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      document.getElementById("Contact").innerHTML = "<p>Thank you for reaching out to us. We will get back to you shortly. <br/><strong>If you need a faster response, feel free to contact us at the contact number provided.</strong></p>";
      window.scrollTo(0, 0);
    })
    .catch((error) => alert(error));

};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);