//  signup model
    document.getElementById("signUpButton").addEventListener("click", () => {
        const modal = new bootstrap.Modal(document.getElementById("signupModal"));
        modal.show();
    });

    // Handle Signup Form Submission
    document.getElementById("signUpForm").addEventListener("submit", (e) => {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let passwordError = document.getElementById("passwordError");
        let confirmPasswordError = document.getElementById("confirmPasswordError");

        let isValid = true;

        // Reset errors
        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        // Name validation
        if (name === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        } else if (name.length <= 3) {
            nameError.textContent = "Name must be more than 3 characters";
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        }

        // Password validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (password === "") {
            passwordError.textContent = "Password is required";
            isValid = false;
        } else if (!passwordPattern.test(password)) {
            passwordError.textContent = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character";
            isValid = false;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match";
            isValid = false;
        }

        // If valid, store data in localStorage and reset form
        if (isValid) {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ name, email, password });
            localStorage.setItem("users", JSON.stringify(users));

            // Reset form fields
            document.getElementById("signUpForm").reset();

            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById("signupModal"));
            modal.hide();

            // Refresh the page (simulate returning to the home page)
            window.location.reload();
        }
    });