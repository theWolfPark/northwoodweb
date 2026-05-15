console.log("Northwood Care Website Loaded");

const scriptURL = "Yhttps://script.google.com/a/macros/northwoodcare.com/s/AKfycbzLmBKwHNtGHd0B8RabJSFdUx7lQ6LlbXaPZ79dbcWXaX3JN2keNOehvaOVcBbA4RNL/exec";

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const submitButton = contactForm.querySelector("button[type='submit']");

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(contactForm)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.result === "success") {
          alert("Thank you! Your message has been sent.");
          contactForm.reset();
        } else {
          alert("Error: " + data.message);
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
        alert("Failed to send message. Please try again.");
      })
      .finally(function () {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Send Message";
        }
      });
  });
}