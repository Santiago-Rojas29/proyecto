document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const correo = document.getElementById("correo").value;

    
    if (correo === "santiago@gmail.com") {
        alert("Se le ha enviado a su correo electronico el link de cammbio de contraseña")
    } else {
        alert("correo incorrecto");
    }
});