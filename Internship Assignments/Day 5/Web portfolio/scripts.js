// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
    } else {
        alert('Please fill out all fields.');
    }

    // Reset form after submission
    document.getElementById('contact-form').reset();
});
