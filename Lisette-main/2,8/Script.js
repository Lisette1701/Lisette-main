const informacion = {
    dick: {
        nombre: "Dick Grayson - Nightwing",
        info: "Dick Grayson fue el primer Robin y el hijo adoptivo de Bruce Wayne. Después de años luchando junto a Batman, decidió independizarse y convertirse en Nightwing. Actualmente protege la ciudad de Blüdhaven. Es conocido por su agilidad acrobática, heredada de su tiempo como acróbata circense con los 'Flying Graysons'. Es el líder natural de los Titanes y uno de los héroes más respetados del universo DC."
    },
    jason: {
        nombre: "Jason Todd - Red Hood",
        info: "Jason Todd fue el segundo Robin, pero murió a manos del Joker. Fue resucitado por Ra's al Ghul usando el Pozo de Lázaro. Regresó como Red Hood, inicialmente como un antihéroe violento que estaba dispuesto a matar criminales. Con el tiempo, ha encontrado un equilibrio entre sus métodos más duros y su deseo de proteger inocentes. Actualmente trabaja con la Bat-Family, aunque mantiene sus propios métodos."
    },
    tim: {
        nombre: "Tim Drake - Red Robin",
        info: "Tim Drake se convirtió en el tercer Robin después de deducir la identidad secreta de Batman por sí mismo. Es considerado el mejor detective de todos los Robins y posiblemente el más inteligente. Cuando Damian Wayne se convirtió en Robin, Tim adoptó la identidad de Red Robin. Es el estratega del grupo y a menudo es quien planifica las misiones más complejas. Su dedicación a la justicia y su intelecto lo convierten en un miembro invaluable de la Bat-Family."
    },
    damian: {
        nombre: "Damian Wayne - Robin",
        info: "Damian Wayne es el hijo biológico de Bruce Wayne y Talia al Ghul. Fue criado por la Liga de Asesinos hasta los 10 años, cuando llegó a Gotham para conocer a su padre. Inicialmente era violento y arrogante, pero bajo la tutela de Bruce ha aprendido a controlar sus impulsos asesinos. Es el Robin actual y, a pesar de su corta edad, es extremadamente hábil en combate. Su relación con Bruce es compleja, ya que lucha entre su crianza violenta y los valores de su padre."
    }
};

function mostrarInfo(personaje) {
    const info = informacion[personaje];
    const contenidoInfo = document.getElementById('contenido-info');
    const infoDiv = document.getElementById('info');
    
    contenidoInfo.innerHTML = `
        <h2>${info.nombre}</h2>
        <p>${info.info}</p>
    `;
    
    infoDiv.classList.add('activa');
}

function cerrarInfo() {
    const infoDiv = document.getElementById('info');
    infoDiv.classList.remove('activa');
}

// Cerrar info al hacer clic fuera de ella
document.addEventListener('click', function(e) {
    const infoDiv = document.getElementById('info');
    const galeria = document.querySelector('.galeria');
    
    if (!infoDiv.contains(e.target) && !galeria.contains(e.target)) {
        cerrarInfo();
    }
});