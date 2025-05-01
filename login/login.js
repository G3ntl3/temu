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
// console.log(savedData);


const logIn = () => {
    console.log(savedData.find('O8fcjhkdbvijh2.'));
    
    
    // if( loginPassword.value=savedData.find(loginPassword.value)){


    //     // alert(9)
    // }
    
}