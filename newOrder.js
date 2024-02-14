
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
    // if (numberClasses === "" || cardNum === "" || expDate === "" || cvv === "" || cardName === "" || idNumber === "") {
    //     alert("אנא מלא את כל הפרטים");
    //     return false;
    // }
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


    // console.log("userName:", userName);
    // console.log("password:", password);
    // console.log("phone:", phone);
    // console.log("fullName:", fullName);
    // console.log("email:", email);


    // Redirect to the home page with form data as query parameters
    window.location.href = `myAccount.html?numberClasses=${encodeURIComponent(numberClasses)}`;

    alert("הרשמה בוצעה בהצלחה");

});
