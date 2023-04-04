const form = document.getElementById("wf-form-Contact-FormX");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = document.getElementById("First-name").value;
  const lastname = document.getElementById("Last-name").value;
  const phone = document.getElementById("Phone-number").value;
  const email = document.getElementById("Email-address").value;
  const message = document.getElementById("field").value;

  // Check if all fields are filled
  if (!firstname || !lastname || !phone || !email || !message) {
    const error = document.createElement("div");
    error.classList.add("error");
    error.textContent = "All fields are required.";
    form.appendChild(error);
    return;
  }

  // Create the email message
  const emailMessage = `Name: ${firstname}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;

  // Open the user's email client and populate the fields
  window.location.href = `mailto:info@planrota.com?subject=Contact Us&body=${emailMessage}`;
});