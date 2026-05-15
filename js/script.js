console.log("Northwood Care Website Loaded");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzLmBKwHNtGHd0B8RabJSFdUx7lQ6LlbXaPZ79dbcWXaX3JN2keNOehvaOVcBbA4RNL/exec";

const contactForm =
  document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const submitButton =
      contactForm.querySelector("button[type='submit']");

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(contactForm)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.result === "success") {
          submitButton.textContent = "Sent ✓";
          submitButton.style.backgroundColor = "#1f7a3e";

          contactForm.reset();

          setTimeout(function () {
            submitButton.disabled = false;
            submitButton.textContent = "Send Message";
            submitButton.style.backgroundColor = "";
          }, 4000);
        } else {
          submitButton.disabled = false;
          submitButton.textContent = "Send Message";
          alert("Failed to send message.");
        }
      })
      .catch(function (error) {
        console.error("Error:", error);

        submitButton.disabled = false;
        submitButton.textContent = "Send Message";

        alert("Failed to send message.");
      });
  });
}