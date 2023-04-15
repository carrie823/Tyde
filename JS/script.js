window.onload = function () {
  var verification = document.getElementById("verification");
  var verification_name = document.getElementById("verification_name");
  var signup_name = document.getElementById("signup_name");
  var signup_email = document.getElementById("signup_email");
  var signup_pass = document.getElementById("signup_pass");
  var signup_repass = document.getElementById("signup_repass");
  var signup_form = document.getElementById("signup_form");
  var sub_headers = document.getElementById("sub_headers");

  var formHandle = document.forms.login;
  formHandle.onsubmit = checkForm;
  verification.style.display = "none";
  function checkForm() {
    if (signup_name.value === "") {
      signup_name.focus();
      //signup_name.style.background = "red";
      return false;
    }

    if (signup_email.value === "") {
      signup_email.focus();
      // signup_email.style.background = "red";
      return false;
    }

    if (signup_pass.value === "") {
      signup_pass.focus();
      // signup_pass.style.background = "red";
      return false;
    }

    if (signup_repass.value === "") {
      signup_repass.focus();
      // signup_repass.style.background = "red";
      return false;
    }
    signup_form.style.display = "none";
    sub_headers.style.display = "none";
    verification.style.display = "block";
    verification_name.innerHTML = signup_name.value;
    return false;
  }
};


// var idHidden = document.getElementById("idHidden");
  // var idHidden__username = document.getElementById("idHidden__username");
  // var login__user_error = document.getElementById("login__user_error");
  // var idHidden__password = document.getElementById("idHidden__password");
  // var login__pass_error = document.getElementById("login__pass_error");
  // var formHandle = document.forms.login;
  // formHandle.onsubmit = checkForm;
  // function checkForm() {
  //     if (login__user_error.value === "") {
  //         login__user_error.focus();
  //         login__user_error.style.background = "red";
  //         return false;
  //     }
  //     if (login__pass_error.value === "") {
  //         login__pass_error.focus();
  //         login__pass_error.style.background = "red";
  //         return false;
  //     }
  //     idHidden.style.display = "block";
  //     idHidden__username.innerHTML = login__user_error.value;
  //     idHidden__password.innerHTML = login__pass_error.value;
  //     return false;
  // }