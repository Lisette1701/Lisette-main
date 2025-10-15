function cambiarVideo(elemento) {
    const mainVideo = document.getElementById("video_main");
    let rutaMainVideo = mainVideo.src;
    let videoPequeno = elemento.src;
    elemento.src = rutaMainVideo;
    mainVideo.src = videoPequeno;

    const textoMain = document.getElementById("video-title");
    let contentTextoMain = textoMain.textContent;
    const textoPequeno = elemento.nextElementSibling;
    let contentTextoPequeno = textoPequeno.textContent;

    textoMain.textContent = contentTextoPequeno;
    textoPequeno.textContent = contentTextoMain;
}