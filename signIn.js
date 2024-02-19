document.addEventListener("DOMContentLoaded", function() {
    const formData = document.getElementById("signInForm");

    formData.addEventListener("submit", function(e) {
        e.preventDefault();

        const users = [
            {userName: "eden", password: "123"}
        ];

        const userName = document.getElementById("userName").value;
        const password = document.getElementById("password").value;

        const userExists = users.some(user => user.userName === userName && user.password === password);

        if (!userExists) {
            alert("הכנסת שם משתמש או סיסמה לא נכונים");
            return false;
        }

        formData.reset();

        sessionStorage.setItem('user', userName);
        window.location.href = "homePage.html";
    });
});




