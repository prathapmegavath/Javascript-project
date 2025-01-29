 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaT3dzQjnLjgEauPdiLrC0lmPJJwee--c",
  authDomain: "javaproject-c03a9.firebaseapp.com",
  projectId: "javaproject-c03a9",
  storageBucket: "javaproject-c03a9.firebasestorage.app",
  messagingSenderId: "572738808271",
  appId: "1:572738808271:web:e53d66779192c3166b4aba",
  measurementId: "G-6W13GMBR8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle login form submission
document.getElementById("LoginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailError = document.getElementById("emailError");
  const pswdError = document.getElementById("pswdError");

  let isValid = true;

  // Clear previous errors
  emailError.textContent = "";
  pswdError.textContent = "";

  // Validate email
  if (!email) {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  }

  // Validate password
  if (!password) {
    pswdError.textContent = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    pswdError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  // Perform login if inputs are valid
  if (isValid) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login successful! Redirecting to dashboard...");
        window.location.href = "../Navbar/navbar.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/user-not-found") {
          emailError.textContent = "User not found";
        } else if (errorCode === "auth/wrong-password") {
          pswdError.textContent = "Incorrect password";
        } else {
          alert(`Error: ${errorMessage}`);
        }
      });
  }
});
