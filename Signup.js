Toastify({
    text: "This is a toast",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { } // Callback after click
        .showToast()

})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;


const signUp = () => {

    let detailsArray = []
    let detailsobj = {
        fullName: fullName.value,
        userName: userName.value,
        Email: email.value,
        Password: password.value,

    }

    if (fullName.value == "" || userName.value == "" || email.value == "" || password.value == '') {
        alert('Please complete the form');
    } else {
        if (!emailRegex.test(email.value)) {
            alert('Please enter a valid email address');
        } else if (!passwordRegex.test(password.value)) {
            alert('Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character');
        } else {
            fullName.value = ''
            userName.value = ''
            email.value = ''
            password.value = ''
            detailsArray.push(detailsobj);
            savedDate = localStorage.setItem('savedata', JSON.stringify(detailsArray))


            // console.log(detailsArray);


        }
    }
};



const logIn = () => {
    
    i

}







