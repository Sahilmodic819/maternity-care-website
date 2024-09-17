// Appointment Form Submission
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;

    if (name && email && date) {
        alert(`Appointment booked for ${name} on ${date}. A confirmation will be sent to ${email}.`);
        document.getElementById("appointmentForm").reset(); // Clear the form
    } else {
        alert("Please fill out all fields.");
    }
});

