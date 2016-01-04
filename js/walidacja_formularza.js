function check_form() {
    var time_change_to_seconds = 1000,
        time = date.getTime() / time_change_to_seconds,
        new_date = new Date(),
        new_time =new_date.getTime() / time_change_to_seconds,
        check_time = new_time- time ;
    if (check_time>2) {
        error_mail = '';
        error_number = '';
        test_mail();
        test_number();
        if (!error_mail && !error_number) {
            number_comment = document.getElementById('Kod_Komunikat_numer');
            number_comment.innerHTML = '';
            mail_comment = document.getElementById('Kod_Komunikat_mail');
            mail_comment.innerHTML = '';
            send_form.submit();
        }
        else{
            date = new Date();
        }
        // jak sa bledy to komunikaty
        if (error_number) {
            number_comment = document.getElementById('Kod_Komunikat_numer');
            number_comment.innerHTML = error_numer;
        }
        else {
            number_comment = document.getElementById('Kod_Komunikat_numer');
            number_comment.innerHTML = '';
        }
        if (error_mail) {
            mail_comment = document.getElementById('Kod_Komunikat_mail');
            mail_comment.innerHTML = error_mail;
        }
        else {
            mail_comment = document.getElementById('Kod_Komunikat_mail');
           mail_comment.innerHTML = '';
        }
    }
    else{
        date = new Date();
    }
}

function test_mail(){
    var mailValue = document.getElementById('email').value,
// sprawdzenie poprawnosci adresu email
    mail_characters = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/,
    check_mail = mail_characters.test(mailValue);
    if (mailValue == '') {
        error_mail = 'Pole nie może być puste';
    }
    else {
        if (!check_mail) {
            error_mail = 'Niepoprawny adres email';
        }
    }
}
function test_number (){
    var numberValue = document.getElementById('numer').value;
    number = numberValue.replace(new RegExp(" ","g"),"");
// sprawdzenie poprawnosci numeru
    var number_characters = /^[+]{0,1}[1-9]{0,2}[1-9]{1}[0-9]{2}[-]{0,1}[0-9]{3}[-]{0,1}[0-9]{3}$/,
        home_number_characters = /^[0+]{0,1}[1-9]{0,2}[1-9]{0,2}[1-9]{1}[0-9-]{6,8}$/,
        premium_rate_number_characters = /^[7]{1}[0-1]{1}[0-9]{1}[0-9-]{6,8}$/,
        check_number = number_characters.test(number),
        check_home_number = home_number_characters.test(number),
        check_premium_rate_number = premium_rate_number_characters.test(number);
    if (number == '') {
        error_number = 'Pole nie może być puste';
    }
    else {
        if (check_premium_rate_number) {
            error_number = 'Nie podawaj płatnego numeru';
        }

        else if (!check_number && !check_home_number) {
            error_number = 'Musisz wpisać prawdziwy numer';

        }
    }
}