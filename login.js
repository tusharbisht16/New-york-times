// let userLoginURL = 'https://new-york-times-2.onrender.com/user';
// --------------------------------------------------------------------
let submitButton = document.getElementById('submit');
let passwordInput = document.getElementById('password');
let emailInput = document.getElementById('email');


//logic on submit click
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    // console.log(email+"console email");

    if(passwordInput.style.display === 'block' && passwordInput.value !== '' && submitButton.value == 'Submit'){
        let userCredential = localStorage.setItem("emailAddress" ,JSON.stringify(email));
        console.log(email);
        window.location.href = 'breakPage.html';

    }
    else if(email.value !== ''){
    passwordInput.style.display = 'block';
    submitButton.value = 'Submit';
    }
    
});
