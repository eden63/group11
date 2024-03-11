document.addEventListener("DOMContentLoaded", function() {
    const formData = document.getElementById("signInForm");

    formData.addEventListener("submit", function(e) {
        e.preventDefault();

        const users = [
            {userName: "1", password: "1"}
        ];

        const userName = document.getElementById("userName").value;
        const password = document.getElementById("password").value;

        const userExists = users.some(user => user.userName === userName && user.password === password);

        if (userName === "" || password === ""){
            alert("אנא מלא את כל הפרטים");
            return false;
        }

        if (!userExists) {
            alert("הכנסת שם משתמש או סיסמה לא נכונים");
            return false;
        }

        formData.reset();

        sessionStorage.setItem('user', userName);
        window.location.href = '/homePage'
    });
});




