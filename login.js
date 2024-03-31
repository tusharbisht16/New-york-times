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

// async function postDataToApi() {
//     try {
//         let user_data = {
//             username: emailInput.value,
//             password: passwordInput.value
//         };
//         console.log(user_data);

//         let res = await fetch(userLoginURL, {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify(user_data)
//         });

//         if (res.ok) {
//             let data = await res.json();
//             console.log(data);
//             localStorage.setItem("token", JSON.stringify(data.accessToken));
//             localStorage.setItem("userID", JSON.stringify(data.username));
//         } else {
//             console.error('Error:', res.status);
//         }
//     } catch (err) {
//         console.error(err);
//     }
// }
