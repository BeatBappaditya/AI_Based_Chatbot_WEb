document.addEventListener("DOMContentLoaded", function () {
    const chatbot = document.querySelector(".chat-container");
    chatbot.style.opacity = "0";
    chatbot.style.transform = "scale(0.9)";

    setTimeout(() => {
        chatbot.style.transition = "all 0.5s ease-in-out";
        chatbot.style.opacity = "1";
        chatbot.style.transform = "scale(1)";
    }, 300);
});
