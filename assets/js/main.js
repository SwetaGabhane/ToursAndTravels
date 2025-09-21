// Main JavaScript for Tours and Travels

document.addEventListener('DOMContentLoaded', function() {
    // Example: Form submission handler
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting us!');
            form.reset();
        });
    }
});
