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



let isUserExist 

const logIn = () => {

     isUserExist = (savedData.find(data => data.Password == loginPassword.value && data.Email == loginEmail.value))

    if (isUserExist) {
        toast('Log in successful', 'green', 'white');

        
        window.location.href = '../temu.html'
        // alert('Welcome')

    }

    else {
        // alert('wrongpassword')
        toast('Wrong password', 'red', 'white');
        // alert('failed')  
    }



}

