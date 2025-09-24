// Welcome alert + footer year
window.onload = function() {
  alert("Welcome to My Website!");
  let yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
};

// Product availability checker
function checkAvailability(productId) {
  if (productId === 'product1') {
    alert("Product 1 is In Stock!");
  } else if (productId === 'product2') {
    alert("Product 2 is Out of Stock!");
  } else {
    alert("Product availability unknown.");
  }
}

// Contact form validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill all fields.");
    return false;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}

// Simple chatbot
function sendMessage() {
  let input = document.getElementById("user-input").value.toLowerCase();
  let chatLog = document.getElementById("chat-log");

  let userMsg = document.createElement("p");
  userMsg.textContent = "You: " + input;
  chatLog.appendChild(userMsg);

  let botReply = document.createElement("p");
  botReply.textContent = "Bot: " + getBotResponse(input);
  chatLog.appendChild(botReply);

  document.getElementById("user-input").value = "";
}

function getBotResponse(input) {
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you today?";
  } else if (input.includes("product")) {
    return "We have some amazing products — check the Products page!";
  } else if (input.includes("contact")) {
    return "You can reach us via email at myemail@example.com.";
  } else {
    return "Sorry, I don't understand that. Try asking about products or contact info.";
  }
}
