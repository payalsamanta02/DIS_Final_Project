// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// General JavaScript functions

// Toggle navigation menu (useful for mobile navigation)
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
}

// Smooth scrolling to page sections
function smoothScrollTo(elementId) {
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
}

// Event listener for toggling the navigation menu
document.querySelector('.navbar-toggle').addEventListener('click', toggleMenu);

// Any other general JavaScript code can go here

// For example, form validation functions or utilities:

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Event listener for form submission
document.querySelector('form').addEventListener('submit', function (event) {
    const emailInput = document.querySelector('input[type="email"]');
    if (!isValidEmail(emailInput.value)) {
        event.preventDefault(); // Prevent form submission if email is invalid
        alert('Please enter a valid email address.');
    }
});

// More functions and event handlers can be added as needed
