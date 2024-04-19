import API_BASE_URL, { endpoints } from "./API/constants.js";
import { getAll, post } from "./API/requests/index.js";

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmpassword = document
    .getElementById("confirmpassword")
    .value.trim();

  const user = {
  
    username: username,
    email: email,
    password: password,
    confirmpassword: confirmpassword,
    wishlistItems: [],
  };

  getAll(endpoints.users).then((res) => {
    const existingUser = res.data.find(
      (u) => u.username === username || u.email == email
    );
    if (existingUser) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username or email already exists!",
      });
      return;
    }
    if (password != confirmpassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and confirm password dont match",
      });
      return;
    }
   
    Swal.fire({
      icon: "success",
      title: "Registration Successful!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
        post(endpoints.users, user);
      window.location.href = "login.html";
    });
  
    this.reset();
  });
});
