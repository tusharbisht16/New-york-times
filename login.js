// let loginForm = document.getElementById('loginForm');
// let submitButton = loginForm.getElementById('submit');
// let passwordInput = loginForm.getElementById('password');

// submitButton.addEventListener('submit', function(event) {
//     event.preventDefault();
//     var email = document.getElementById('email').value;
//     passwordInput.style.display = 'block';
//     console.log
//     if(email.value !== null){
//         submitButton.value = 'Submit';
//     }
    
//    if(submitButton.value = 'Submit' && passwordInput !== null){
//     window.location.href = 'breakPage.html';
//    }
    
//    console.log("click");
//     alert("Email entered: " + email);

  
// });
document.addEventListener('DOMContentLoaded', function(){
    // Select elements by their IDs
    let submitButton = document.getElementById('submit');
    let passwordInput = document.getElementById('password');
    // Add event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        var email = document.getElementById('email').value;
        

        // Change the value of the submit button to "Submit"
        submitButton.value = 'Submit';

        // Redirect to 'breakPage.html' if email is entered and password input field is visible
  if(email.value !== ''){
    passwordInput.style.display = 'block';


        if (passwordInput.style.display === 'block' && passwordInput.value !== '') {
            window.location.href = 'breakPage.html';
        }
       
}

        // Display an alert with the entered email
        // alert("Email entered: " + email);
    });
});
