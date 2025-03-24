var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.left = "0"
}

function closeNavbar()
{
    sidenav.style.left = "-60%"

}
const responses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi! How can I assist you today?",
    "ok": "Do you have any more queries?",
    "no": "Thankyou!! have a great day ahead",
    "thankyou": "Thankyou!! happy shopping",
    "good morning": "Very good morning",
    "good afternoon": "Very good afternoon",
    "good evening": "Good evening",
    "how are you": "I am just a chatbot, but I am always ready to help!",
    "return policy": "Our return policy allows returns within 30 days of purchase.",
    "shipping details": "We offer free shipping for orders above ₹500.",
    "payment options": "We accept credit cards, UPI, and net banking."
};

// Toggle Chatbot Visibility
function toggleChatbot() {
    const chatbotBody = document.getElementById("chatbot-body");
    chatbotBody.style.display = chatbotBody.style.display === "block" ? "none" : "block";
}

// Handle User Input
function handleChat() {
    let inputField = document.getElementById("chatbot-input");
    let userMessage = inputField.value.trim().toLowerCase();
    let chatbotMessages = document.getElementById("chatbot-messages");

    if (userMessage === "") return;

    // Display user message
    let userHtml = `<div class="chat-message user-message"><strong>You:</strong> ${userMessage}</div>`;
    chatbotMessages.innerHTML += userHtml;

    // Get chatbot response
    let botResponse = responses[userMessage] || "Sorry, I don't understand that.";
    let botHtml = `<div class="chat-message bot-message"><strong>Bot:</strong> ${botResponse}</div>`;
    chatbotMessages.innerHTML += botHtml;

    // Clear input and auto-scroll to latest message
    inputField.value = "";
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Listen for "Enter" key press
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chatbot-input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            handleChat();
        }
    });

    document.getElementById("chatbot-send").addEventListener("click", function () {
        handleChat();
    });
});

