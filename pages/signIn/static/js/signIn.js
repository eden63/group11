document.addEventListener("DOMContentLoaded", function() {
    const formData = document.getElementById("signInForm");

    formData.addEventListener("submit", function(e) {

        const userName = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (userName === "" || password === ""){
            alert("אנא מלא את כל הפרטים");
            return false;
        }
    });
});

const sendMessage = (message) => {
    alert(message);
};

window.addEventListener("load", function() {
    // Check if the .msg element exists
    const msgElement = document.querySelector(".msg");
    if (msgElement) {
        // Check if it has any text content
        const msgContent = msgElement.textContent.trim();
        if (msgContent !== "") {
            sendMessage(msgContent);
        }
    }
});
