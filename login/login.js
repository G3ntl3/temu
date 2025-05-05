const toast = (text, backgroundcolor, textColor) => {
    Toastify({
        text: text,
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: backgroundcolor,
            color: textColor,
            marginTop: '100px'
        },
        onClick: function () { } // Callback after click
    }).showToast()
}


var savedData = JSON.parse(localStorage.getItem('savedata')) || []

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;



let isUserExist

const logIn = () => {
    login.innerHTML = ' ...loading'

    isUserExist = (savedData.find(data => data.Password == loginPassword.value && data.Email == loginEmail.value))


    if (loginEmail.value == "" || loginPassword.value == '') {
        setTimeout(() => {

            login.innerHTML = 'Log in'
            toast('Please complete the form', 'red', 'white')
        }, 1000)

    } else if (!emailRegex.test(loginEmail.value)) {
        toast('Please enter a valid email address', 'red', 'white')
    } else if (!passwordRegex.test(loginPassword.value)) {
        toast('Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character', 'red', 'white')
    }



    else if (isUserExist) {

        setTimeout(() => {
            toast('Log in successful', 'green', 'white');
            window.location.href = '../temu.html'

        }, 2000)


    }

    else {
        setTimeout(() => {

            login.innerHTML = 'Log in'
            toast('Wrong password or Email', 'red', 'white');
        }, 1000)


    }



}

