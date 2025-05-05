const toast = (text, backgroundcolor, textColor) => {
    Toastify({
        text: text,
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: backgroundcolor,
            color: textColor,
        },
        onClick: function () { } // Callback after click
    }).showToast()
}



const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

let detailsArray = JSON.parse(localStorage.getItem('savedata')) || []


const signUp = () => {
// let detailsobj = {
//     fullName: fullName.value,
//     userName: userName.value,
//     Email: email.value,
//     Password: password.value,

// }

// submit.innerHTML='...loading'

    if (fullName.value == "" || userName.value == "" || email.value == "" || password.value == '') {
        toast('Please complete the form', 'red', 'white')

    } else {
        alert('form complete')
        // // if (!emailRegex.test(email.value)) {
        // //     toast('Please enter a valid email address', 'red', 'white')
        // // } else if (!passwordRegex.test(password.value)) {
        // //     toast('Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character', 'red', 'white')
        // // } else {
        // //     fullName.value = ''
        // //     userName.value = ''
        // //     email.value = ''
        // //     password.value = ''
        // //     detailsArray.push(detailsobj);
        // //     savedDate = localStorage.setItem('savedata', JSON.stringify(detailsArray))
        // //     toast('Sign up successful', 'green', 'white')
        // //     window.location.href='../login.html'


        // }
    }
};
// console.log(detailsArray.find('O8fcjhkdbvijh2.  '));
 
