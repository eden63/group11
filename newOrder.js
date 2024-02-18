
function checkNumber(input) {
    return !isNaN(input) && parseFloat(input) > 0;
}

function  isValidCardNum(input){
    if (input.length !== 16) {
        return false;
    }

    if (!/^\d+$/.test(input)) {
        return false;
    }
    return true;
}

function ExpirationValid(expirationDate) {
    const dateRegex = /^(0[1-9]|1[0-2])\/(20\d{2}|[0-9]{2})$/;
    if (!dateRegex.test(expirationDate)) {
        return false; // Invalid date format
    }

    const [inputMonth, inputYear] = expirationDate.split('/');
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear() % 100; // Take only the last two digits

    const cardMonth = Number(inputMonth);
    const cardYear = Number(inputYear);

    return cardYear > currentYear || (cardYear === currentYear && cardMonth >= currentMonth);
}


function isLettersOnly(input) {
    return /^[a-zA-Z\u0590-\u05FF\s]+$/.test(input);
}

function CVVValid(cvv) {
    const cvvRegex = /^[0-9]{3,4}$/;

    return cvvRegex.test(cvv);
}
function validID(id) {
    const idRegex = /^\d+$/; // Only digits allowed
    const expectedLength = 9; // Adjust the expected length as needed

    return idRegex.test(id) && id.length === expectedLength;
}
document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const numberClasses = formData.get("number");
    const cardNum = formData.get("CardNumber");
    const expDate = formData.get("expirationDate");
    const cvv = formData.get("cvv");
    const cardName = formData.get("fullName");
    const idNumber = formData.get("idNumber");


    // Validate all fields have been filled out
    if (numberClasses === "" || cardNum === "" || expDate === "" || cvv === "" || cardName === "" || idNumber === "") {
        alert("אנא מלא את כל הפרטים");
        return false;
    }

    //Validate the number of classes is a number and bigger than 0
     if (!checkNumber(numberClasses)) {
      alert("אנא הכנס מספר שיעורים תקין");
      return false;
    }
    //check the card number is valid - 16 digits
    if (!isValidCardNum(cardNum)) {
      alert("אנא הכנס מספר כרטיס אשראי תקין");
      return false;
    }
    //check if the expiration date is valid
    if(!ExpirationValid(expDate)) {
        alert("אנא הכנס תוקף אשראי תקין");
        return false;
    }

    //check if the cvv is valid
    if(!CVVValid(cvv))
    {
        alert("אנא הכנס CVV תקין");
        return false
    }
    //validate name card is only letters
    if (!isLettersOnly(cardName)) {
      alert("אנא הכנס שם בעל הכרטיס רק באותיות");
      return false;
    }

     //check if the id number  is valid
    if(!validID(idNumber)) {
        alert("אנא הכנס מסר תעודת זהות תקין");
        return false;
    }

    console.log("numberClasses:", numberClasses);
    console.log("cardNum:", cardNum);
    console.log("expDate:", expDate);
    console.log("cvv:", cvv);
    console.log("cardName:", cardName);
    console.log("idNumber:", idNumber);



    // Redirect to the home page with form data as query parameters
    window.location.href = `myAccount.html?numberClasses=${encodeURIComponent(numberClasses)}`;

    alert("הרשמה בוצעה בהצלחה");

});
