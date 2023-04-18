window.onload = function () {
  var verification = document.getElementById("verification");
  var verification_name = document.getElementById("verification_name");
  var signup_name = document.getElementById("signup_name");
  var signup_email = document.getElementById("signup_email");
  var signup_pass = document.getElementById("signup_pass");
  var signup_repass = document.getElementById("signup_repass");
  var signup_form = document.getElementById("signup_form");
  var sub_headers = document.getElementById("sub_headers");
  var error_msg = document.getElementById("error_msg");

  var formHandle = document.forms.login;
  formHandle.onsubmit = checkForm;
  verification.style.display = "none";
  error_msg.style.display = "none";
  function checkForm() {
    if (signup_name.value === "") {
      signup_name.focus();
      signup_name.style.border = "solid 2px red";
      error_msg.style.display="block";
      return false;
    } 

    if (signup_email.value === "") {
      signup_email.focus();
      signup_email.style.border = "solid 2px red";
      error_msg.style.display="block";
      return false;
    }

    if (signup_pass.value === "") {
      signup_pass.focus();
      signup_pass.style.border = "solid 2px red";
      error_msg.style.display="block";
      return false;
    } 

    if (signup_repass.value === "") {
      signup_repass.focus();
      signup_repass.style.border = "solid 2px red";
      error_msg.style.display= "block";
      return false;
    } 
    
    error_msg.style.display= "none";
    signup_form.style.display = "none";
    sub_headers.style.display = "none";
    verification.style.display = "block";
    verification_name.innerHTML = signup_name.value;
    return false;
  }
};
