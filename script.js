function checkEmail() {
    const emailCheck = document.getElementById('email').value;
    const emailPattern = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

    if(emailCheck === '') {
        document.getElementById('showEmailMsg').innerHTML = "Please enter a valid email address!";
    } else if(emailPattern.test(emailCheck)) {
        document.getElementById('showEmailMsg').innerHTML = "Your email address is valid!";
    } else {
        document.getElementById('showEmailMsg').innerHTML = "Sorry, Your email address is invalid!"; 
    }
}

function checkPhone() {
    const phoneCheck = document.getElementById('phone').value;
    const phonePattern = /^(?:\+88|01)?(?:\d{11}|\d{13})$/;

    if(phoneCheck === '') {
        document.getElementById('showPhoneMsg').innerHTML = "Please enter a valid phone number!";
    } else if(phonePattern.test(phoneCheck)) {
        document.getElementById('showPhoneMsg').innerHTML = "Your phone number is valid!";
    } else {
        document.getElementById('showPhoneMsg').innerHTML = "Sorry, Your phone number is invalid!";
    }
}

function checkPostal() {
    const postalCheck = document.getElementById('postal').value;
    const postalPattern = /^[0-9]{4}$/;

    if(postalCheck === '') {
        document.getElementById('showPostalMsg').innerHTML = "Please enter a valid postal code!";
    } else if(postalPattern.test(postalCheck)) {
        document.getElementById('showPostalMsg').innerHTML = "Your postal code is valid!";
    } else {
        document.getElementById('showPostalMsg').innerHTML = "Sorry, Your postal code is invalid!";
    }
}

