// function Click() {
//     // Check if the user is logged in (example using localStorage)
//     const isLoggedIn = localStorage.getItem('isLoggedIn'); // Adjust based on your authentication logic

//     if (!isLoggedIn) {
//         // If the user is not logged in, navigate to the login page
//         window.location.href = '../loginPage/login.html'; // Replace with your actual login page URL
//     } else {
//         // Check if the user is signed up
//         const isSignedUp = localStorage.getItem('isSignedUp'); // Adjust based on your signup logic

//         if (!isSignedUp) {
//             // If the user is not signed up, navigate to the signup page
//             window.location.href = '../signUp/signup.html'; // Replace with your actual signup page URL
//         } else {
//             // If the user is both logged in and signed up, proceed with booking or other actions
//             alert("Proceeding with booking...");
//         }
//     }
// }
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for card click
    document.getElementById('turf-card').addEventListener('click', function() {
        // Check if the user is logged in (example using localStorage)
        const isLoggedIn = localStorage.getItem('isLoggedIn'); // Adjust based on your authentication logic

        if (!isLoggedIn) {
            // If the user is not logged in, navigate to the login page
            window.location.href = '../loginPage/login.html'; // Replace with your actual login page URL
        } else {
            // Check if the user is signed up
            const isSignedUp = localStorage.getItem('isSignedUp'); // Adjust based on your signup logic

            if (!isSignedUp) {
                // If the user is not signed up, navigate to the signup page
                window.location.href = '../signUp/signup.html'; // Replace with your actual signup page URL
            } else {
                // If the user is both logged in and signed up, proceed with booking or other actions
                alert("Proceeding with booking...");
            }
        }
    });
});