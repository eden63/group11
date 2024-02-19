function isLettersOnly(input) {
    return /^[a-zA-Z\u0590-\u05FF\s]+$/.test(input);
}

function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^0\d{9}$/;
    return phoneRegex.test(phoneNumber);
}

    const formData = document.querySelector('#signUpForm')
    const userName = document.querySelector('#username2')
    const password = document.querySelector('#password2')
    const phone = document.querySelector('#phone2')
    const fullName = document.querySelector('#fullName2')
    const email = document.querySelector('#email2')
    const users=document.querySelector('.users')


const onSubmit = (e) => {
    e.preventDefault()

    // Validate all fields have been filled out
    if (userName.value === "" || password.value === "" || phone.value === "" ||
        fullName.value === "" || email.value === "") {
        alert("אנא מלא את כל הפרטים");
        return false;
    }
    //validate full name is only letters
    if (!isLettersOnly(fullName.value)) {
        alert("אנא הכנס שם המלא רק באותיות");
        return false;
    }

    //Validate the phone number is 10 digits
    if (!isValidPhoneNumber(phone.value)) {
        alert("אנא הכנס מספר טלפון תקין");
        return false;
    }

    const li = document.createElement('li')
    li.innerHTML = `userName: ${userName.value} | password: ${password.value} | phone: ${phone.value} | 
    fullName: ${fullName.value} | email: ${email.value}`
    users.appendChild(li)
    console.log(users)

    //Redirect to the sign in page with form data as query parameters
    window.location.href =`signIn.html?userName=${encodeURIComponent(userName.value)}&password=${encodeURIComponent(password.value)}&phone=${encodeURIComponent(phone.value)}&fullName=${encodeURIComponent(fullName.value)}&email=${encodeURIComponent(email.value)}`;
    alert("הרשמה בוצעה בהצלחה");
}

formData.addEventListener('submit', onSubmit)















