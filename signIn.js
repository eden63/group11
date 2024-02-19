function doesUserExist(usernameToCheck) {
    return users.some(user => user.username === usernameToCheck);
}

const formData = document.querySelector('#signInForm')
const userName = document.querySelector('#userName')
const password = document.querySelector('#password')
const onSubmit = (e) =>{
    e.preventDefault()

    // Validate all fields have been filled out
    if (userName.value === "" || password.value === "") {
        alert("אנא מלא את כל השדות");
        return false;
    }

     //Redirect to the home page with form data as query parameters
    window.location.href = `homePage.html?userName=${encodeURIComponent(userName.value)}&password=${encodeURIComponent(password.value)}`;
    alert("ההתחברות בוצעה בהצלחה");

}

formData.addEventListener('submit', onSubmit)















document.getElementById("signInForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userName = formData.get("userName");
    const password = formData.get("password");



    console.log("userName", userName);
    console.log("Password:", password);

    // Redirect to the home page with form data as query parameters
    window.location.href = `homePage.html?userName=${encodeURIComponent(userName)}&password=${encodeURIComponent(password)}`;
});
