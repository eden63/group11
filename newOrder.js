
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

    const formData = document.querySelector('#orderForm')
    const numberClasses = document.querySelector('#numOfClass')
    const cardNum = document.querySelector('#cardNumer')
    const expDate = document.querySelector('#expirationDate')
    const cvv = document.querySelector('#cvv2')
    const cardName = document.querySelector('#cardName2')
    const idNumber = document.querySelector('#idNumber')
    const orders=document.querySelector('.orders')

const onSubmit = (e) =>{
    e.preventDefault()

    //Validate all fields have been filled out
    if (numberClasses.value === "" || cardNum.value === "" || expDate.value === "" ||
        cvv.value === "" || cardName.value === "" || idNumber.value === "") {
        alert("אנא מלא את כל הפרטים");
        return false;
    }

    //Validate the number of classes is a number and bigger than 0
     if (!checkNumber(numberClasses.value)) {
      alert("אנא הכנס מספר שיעורים תקין");
      return false;
    }
    //check the card number is valid - 16 digits
    if (!isValidCardNum(cardNum.value )) {
      alert("אנא הכנס מספר כרטיס אשראי תקין");
      return false;
    }
    //check if the expiration date is valid
    if(!ExpirationValid(expDate.value)) {
        console.log(expDate)
        alert("אנא הכנס תוקף אשראי תקין");
        return false;
    }

    //check if the cvv is valid
    if(!CVVValid(cvv.value))
    {
        alert("אנא הכנס CVV תקין");
        return false
    }
    //validate name card is only letters
    if (!isLettersOnly(cardName.value)) {
      alert("אנא הכנס שם בעל הכרטיס רק באותיות");
      return false;
    }

     //check if the id number  is valid
    if(!validID(idNumber.value)) {
        alert("אנא הכנס מספר תעודת זהות תקין");
        return false;
    }

    const li=document.createElement('li')
    li.innerHTML=`numberClasses: ${numberClasses.value} | cardNum: ${cardNum.value} | expdate: ${expDate.value} |
                    cvv: ${cvv.value} | cardName: ${cardName.value} | idNumber: ${idNumber.value}`
    orders.appendChild(li)
    console.log(orders)

    //Redirect to the home page with form data as query parameters
    window.location.href = `myAccount.html?numberClasses=${encodeURIComponent(numberClasses.value)}`;
    alert("ההזמנה בוצעה בהצלחה");

}

formData.addEventListener('submit', onSubmit)




