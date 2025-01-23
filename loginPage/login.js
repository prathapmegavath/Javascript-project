
// // let login=document.getElementById("LoginForm");

// // login.addEventListener("submit",async(e)=>{
// //     e.preventDefault()

// //     let emailFormValue=document.getElementById("email").value.trim();
// //     let passwordFormValue=document.getElementById("password").value.trim();

// //     let storageCrenerials=JSON.parse(localStorage.getItem("users"));

// //     console.log(storageCrenerials);

// //     const user=storageCrenerials.find(x=>{
// //         return x.email === emailFormValue && x.password === passwordFormValue
// //     })
// //     console.log(user);
    

// //     if(user){
// //         alert("successfully loggedin")
// //         location.href="../index/index.html"
// //     }else{
// //         alert("user not found")
// //     }
// // })
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const loginForm = document.getElementById("LoginForm");

// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value.trim();

//     const emailError = document.getElementById("emailError");
//     const pswdError = document.getElementById("pswdError");

//     let isValid = true;

//     emailError.textContent = "";
//     pswdError.textContent = "";

//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!email) {
//         emailError.textContent = "Email is required";
//         isValid = false;
//     } else if (!emailPattern.test(email)) {
//         emailError.textContent = "Invalid email format";
//         isValid = false;
//     }

//     if (!password) {
//         pswdError.textContent = "Password is required";
//         isValid = false;
//     } else if (password.length < 6) {
//         pswdError.textContent = "Password must be at least 6 characters";
//         isValid = false;
//     }

//     if (isValid) {
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 alert("Login Successful! Redirecting...");
//                 window.location.href = "../dashboard/dashboard.html";
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 if (errorCode === "auth/user-not-found") {
//                     emailError.textContent = "User not found";
//                 } else if (errorCode === "auth/wrong-password") {
//                     pswdError.textContent = "Incorrect password";
//                 } else {
//                     alert(`Error: ${errorMessage}`);
//                 }
//             });
//     }
// });
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
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
