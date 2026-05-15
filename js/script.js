console.log("Northwood Care Website Loaded");

const form = document.getElementById("contactForm");

if(form){

  form.addEventListener("submit", function(event){

    event.preventDefault();

    alert(
      "Thank you for contacting Northwood Care. We will respond shortly."
    );

    form.reset();

  });

}

let submitted = false;

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function () {
    setTimeout(function () {
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    }, 500);
  });
}