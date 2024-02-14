document.getElementById("signInForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userName = formData.get("userName");
    const password = formData.get("password");

    // Validate all fields have been filled out
    if (userName === "" || password === "") {
        alert("אנא מלא את כל השדות");
        return false;
    }

    console.log("userName", userName);
    console.log("Password:", password);

    // Redirect to the home page with form data as query parameters
    window.location.href = `homePage.html?userName=${encodeURIComponent(userName)}&password=${encodeURIComponent(password)}`;
});
