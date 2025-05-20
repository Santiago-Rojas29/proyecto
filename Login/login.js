document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("contrasena").value;

    
    if (user === "Santiago" && pass === "1234") {
        window.location.href = "../index.html";
    }
    else {
        alert("Credenciales incorrectas")
    }
});