function isLettersOnly(input) {
    return /^[a-zA-Z\u0590-\u05FF\s]+$/.test(input);
}

function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^0\d{9}$/;
    return phoneRegex.test(phoneNumber);
}

document.getElementById("signUpForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userName = formData.get("name");
    const password = formData.get("password");
    const phone = formData.get("tel");
    const fullName = formData.get("fullName");
    const email = formData.get("email");


    // Validate all fields have been filled out
    if (userName === "" || password === "" || phone === "" || fullName === "" || email === "") {
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

    console.log("userName:", userName);
    console.log("password:", password);
    console.log("phone:", phone);
    console.log("fullName:", fullName);
    console.log("email:", email);


    // Redirect to the home page with form data as query parameters
    window.location.href = `signIn.html?userName=${encodeURIComponent(userName)}&password=${encodeURIComponent(password)}`;

    alert("הרשמה בוצעה בהצלחה");

});
