var hasSentMail = false; // Flag to track whether the email has been sent

function SendMail() {
  if (hasSentMail) {
    alert("Email has already been sent.");
    return;
  }
  console.log("clicked");

  let form_id = document.getElementById("contact_number");
  form_id.value = (Math.random() * 100000) | 0;

  var params = {
    contact_number: form_id.value,
    from_name: document.getElementById("from_name").value,
    user_email: document.getElementById("user_email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_7p7rpdr", "contact_form", params).then(function (res) {
    alert("Success!" + res.status);
    hasSentMail = true; // Update the flag to indicate that the email has been sent
  });
}
