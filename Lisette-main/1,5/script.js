console.log("Funcionando correctamente");

// Problema 8: Validación de Usuario y Contraseña con NOT
function validarLogin() {
    let usuario = "admin";
    let contraseña = "password123";
    if (!usuario || !contraseña) {
        console.log("Error: Debes ingresar usuario y contraseña");
    } else {
        console.log("Inicio de sesión exitoso");
    }
}

// Problema 9: Encendido de una Máquina con Condiciones Lógicas
function encenderMaquina() {
    let energiaSuficiente = true;
    let interruptorEncendido = true;
    if (energiaSuficiente && interruptorEncendido) {
        console.log("Máquina encendida");
    } else {
        console.log("No se puede encender la máquina");
    }
}

// Problema 10: Acceso Restringido por Estado de Seguridad
function verificarAccesoRestringido() {
    let bloqueado = false;
    let tieneCredenciales = true;
    if (bloqueado || !tieneCredenciales) {
        console.log("Acceso denegado");
    } else {
        console.log("Acceso permitido");
    }
}