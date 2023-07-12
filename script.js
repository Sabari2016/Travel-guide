document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    
    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;
    
    // Here you can implement the logic to send the form data to your desired destination
    
    // Example: Logging the form data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
    
    // Clear the form fields
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });