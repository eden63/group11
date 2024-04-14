
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
    var words = input.trim().split(' ');
    return /^[a-zA-Z\u0590-\u05FF\s]+$/.test(input) && words.length >= 2;
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

document.addEventListener("DOMContentLoaded", function() {
    const formData = document.querySelector('#orderForm');

    const onSubmit = function (event) {
        event.preventDefault();
        const numberClasses = document.querySelector('#numOfClass').value
        const cardNum = document.querySelector('#cardNumer').value
        const expDate = document.querySelector('#expirationDate').value
        const cvv = document.querySelector('#cvv2').value
        const cardName = document.querySelector('#cardName2').value
        const idNumber = document.querySelector('#idNumber').value

        //Validate all fields have been filled out
        if (numberClasses === "" || cardNum === "" || expDate === "" ||
            cvv === "" || cardName === "" || idNumber === "") {
            alert("אנא מלא את כל הפרטים");
            return;
        }

        //Validate the number of classes is a number and bigger than 0
         if (!checkNumber(numberClasses)) {
          alert("אנא הכנס מספר שיעורים תקין");
          return;
        }

        //check the card number is valid - 16 digits
        if (!isValidCardNum(cardNum )) {
          alert("אנא הכנס מספר כרטיס אשראי תקין");
          return;
        }
        //check if the expiration date is valid
        if(!ExpirationValid(expDate)) {
            alert("אנא הכנס תוקף אשראי תקין");
            return;
        }

        //check if the cvv is valid
        if(!CVVValid(cvv))
        {
            alert("אנא הכנס CVV תקין");
            return;
        }

        //validate name card is only letters
        if (!isLettersOnly(cardName)) {
            alert("אנא הכנס שם המלא רק באותיות ולפחות 2 מילים");
          return;
        }

         //check if the id number  is valid
        if(!validID(idNumber)) {
            alert("אנא הכנס מספר תעודת זהות תקין");
            return;
        }

        // All inputs are valid, submit the form
        formData.removeEventListener('submit', onSubmit);  // Remove the event listener
        formData.submit();  // Submit the form
        formData.addEventListener('submit', onSubmit);  // Add the event listener back
    };

    formData.addEventListener("submit", onSubmit);
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


