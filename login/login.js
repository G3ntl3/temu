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


var savedData = JSON.parse(localStorage.getItem('savedata'))
let isUserExist = (savedData.find(data => data.Password == loginPassword.value && data.Email == loginEmail.value)) 

console.log(isUserExist);


const logIn = () => {
    if (isUserExist) {
       alert('welcome')
    }
    else {
        alert('wrong info')
    }
    //     var log_password = loginPassword.value
    // if(l)


}