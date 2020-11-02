/* Add your JavaScript to this file */
window.onload = function () {
    var  btn = document.getElementsByClassName("btn")[1];
    btn.addEventListener("click", function (e) {
        var mail = document.getElementById("email").value;
        var message = document.getElementsByClassName("message")[0];
        if (mail.length == 0) {
            message.innerHTML = "Please enter a valid email address.";
        }
        else if (mail.length > 0) {
            message.innerHTML = "Thank you! Your email address "+mail+" has been added to our mailing list!";
        }
        e.preventDefault();
    });
}

