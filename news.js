function sendMail() {
    let params = {
        // name : document.getElementById("email").value,
        email : document.getElementById("email").value,
        // name : document.getElementById("email").value,
        // name : document.getElementById("email").value,
    }

    emailjs.send("service_qj43zee", "template_kuu9fkl", params).then(alert("Email Sent"))

}