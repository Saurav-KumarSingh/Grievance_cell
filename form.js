document.getElementById('sendButton').addEventListener('click', function () {
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');

    console.log('First Name: ' + firstName.value);
    console.log('Last Name: ' + lastName.value);
    console.log('Email: ' + email.value);
    console.log('Phone: ' + phone.value);
    console.log('Message: ' + message.value);
    firstName.value='';
    lastName.value='';
    email.value='';
    phone.value='';
    message.value='';
});