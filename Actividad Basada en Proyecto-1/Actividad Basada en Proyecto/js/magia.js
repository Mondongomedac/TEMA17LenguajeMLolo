function login() {
    // Obtener los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === "mondongo" && password === "1234") {
      errorMessage.textContent = ""; 
      alert("Inicio de sesión exitoso");
      
  
    } else {
      errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
  }

  