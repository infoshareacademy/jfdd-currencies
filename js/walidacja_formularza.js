function checkForm() {

    var timeChangeToSeconds = 1000;
    var time = date.getTime() / timeChangeToSeconds;
    var newDate = new Date();
    var newTime =newDate.getTime() / timeChangeToSeconds;
    var checkTime = newTime- time ;

    if (checkTime>2) {
        errorMail = '';
        errorNumber = '';
        testMail();
        testNumber();

        if (!errorMail && !errorNumber) {
            numberComment = document.getElementById('divNumberErrorMassage');
            numberComment.innerHTML = '';
            mailComment = document.getElementById('divMailErrorMassage');
            mailComment.innerHTML = '';
            sendForm.submit();
        }
        else{
            date = new Date();
        }

        if (errorNumber) {
            numberComment = document.getElementById('divNumberErrorMassage');
            numberComment.innerHTML = errorNumber;
        }
        else {
            numberComment = document.getElementById('divNumberErrorMassage');
            numberComment.innerHTML = '';
        }

        if (errorMail) {
            mailComment = document.getElementById('divMailErrorMassage');
            mailComment.innerHTML = errorMail;
        }
        else {
            mailComment = document.getElementById('divMailErrorMassage');
           mailComment.innerHTML = '';
        }

    }
    else{
        date = new Date();
    }
}

function testMail(){

    var mailValue = document.getElementById('email').value,
    mailCharacters = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/,
    checkMail = mailCharacters.test(mailValue);

    if (mailValue == '') {
        errorMail = 'Pole nie może być puste';
    }
    else {
        if (!checkMail) {
            errorMail = 'Niepoprawny adres email';
        }
    }
}

function testNumber (){
    var numberValue = document.getElementById('numer').value;
    number = numberValue.replace(new RegExp(" ","g"),"");
    var numberCharacters = /^[+]{0,1}[1-9]{0,2}[1-9]{1}[0-9]{2}[-]{0,1}[0-9]{3}[-]{0,1}[0-9]{3}$/,
        homeNumberCharacters = /^[0+]{0,1}[1-9]{0,2}[1-9]{0,2}[1-9]{1}[0-9-]{6,8}$/,
        premiumRateNumberCharacters = /^[7]{1}[0-1]{1}[0-9]{1}[0-9-]{6,8}$/,
        checkNumber = numberCharacters.test(number),
        checkHomeNumber = homeNumberCharacters.test(number),
        checkPremiumRateNumber = premiumRateNumberCharacters.test(number);

    if (number == '') {
        errorNumber = 'Pole nie może być puste';
    }
    else {
        if (checkPremiumRateNumber) {
            errorNumber = 'Nie podawaj płatnego numeru';
        }
        else if (!checkNumber && !checkHomeNumber) {
            errorNumber = 'Musisz wpisać prawdziwy numer';

        }
    }
}