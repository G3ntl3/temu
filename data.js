Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { } // Callback after click
}).showToast();


const signup = () => {
    let detailsArray = []
    let detailsobj = {
        firstName: fname.value,
        lastName: lname.value,
        userName: Username.value,
        Email: phoneNumber.value,
        Password: Password.value,
        Confirm: cPassword.value
    }
    detailsArray.push(detailsobj);
    if (document.getElementById("fname").value == "" || document.getElementById("lname").value == ""
        || document.getElementById("Username").value == "" || document.getElementById("phoneNumber").value == "" || document.getElementById("Password").value !== document.getElementById("cPassword").value) {
        alert("first name issue")
   
    }
    else {
        console.log(detailsArray)
    }
}







   

  
    
