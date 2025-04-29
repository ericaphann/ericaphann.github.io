function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Get the form elements
    var form = document.getElementById("contactForm");

    // Hide the form and show the thank you message
    form.style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
}