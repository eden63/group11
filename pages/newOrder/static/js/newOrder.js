
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

document.addEventListener("DOMContentLoaded", function() {
    const orders = [];
    const formData = document.querySelector('#orderForm');

    formData.addEventListener("submit", function (event) {
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
            return false;
        }

        //Validate the number of classes is a number and bigger than 0
         if (!checkNumber(numberClasses)) {
          alert("אנא הכנס מספר שיעורים תקין");
          return false;
        }

        //check the card number is valid - 16 digits
        if (!isValidCardNum(cardNum )) {
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
            alert("אנא הכנס מספר תעודת זהות תקין");
            return false;
        }

        const newOrder={numberClasses,cardNum,expDate,cvv,cardName,idNumber};
        orders.push(newOrder);
        alert("ההזמנה בוצעה בהצלחה");
        window.location.href = "myAccount.html";


    })

});




