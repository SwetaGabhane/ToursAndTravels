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


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('bookingModal');
    const bookButton = document.querySelector('.book-online');
    const closeButton = document.querySelector('.close');

    // Open modal when Book Online button is clicked
    bookButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Close modal when X is clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
        modal.style.display = 'none';
        e.preventDefault();
            alert('Thank you for contacting us!');
            form.reset();
    });
});