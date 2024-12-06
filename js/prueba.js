// Función para validar el formulario
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    // Verificar si los campos están vacíos
    if (name === "" || email == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    
    // Mensaje de éxito al enviar el formulario
    alert("Formulario enviado correctamente.");
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("mensaje").value="";
    return true;
}
