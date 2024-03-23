function isLettersOnly(input) {
    return /^[a-zA-Z\u0590-\u05FF\s]+$/.test(input);
}

function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^0\d{9}$/;
    return phoneRegex.test(phoneNumber);
}

document.addEventListener("DOMContentLoaded", function() {

    const formData = document.querySelector('#signUpForm');

    formData.addEventListener("submit", function(event) {
        const userName = document.querySelector('#username2').value;
        const password = document.querySelector('#password2').value;
        const phone = document.querySelector('#phone2').value;
        const fullName = document.querySelector('#fullName2').value;
        const email = document.querySelector('#email2').value;


        // Validate all fields have been filled out
        if (userName === "" || password === "" || phone === "" ||
            fullName === "" || email === "") {
            alert("אנא מלא את כל הפרטים");
            return false;
        }
        //validate full name is only letters
        if (!isLettersOnly(fullName)) {
            alert("אנא הכנס שם המלא רק באותיות");
            return false;
        }

        //Validate the phone number is 10 digits
        if (!isValidPhoneNumber(phone)) {
            alert("אנא הכנס מספר טלפון תקין");
            return false;
        }


    })
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






