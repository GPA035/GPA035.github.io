// Inicializar el contador de descargas desde localStorage
let downloadCount = localStorage.getItem('downloadCount') ? parseInt(localStorage.getItem('downloadCount')) : 0;

// Actualizar el texto en la página
document.getElementById('download-count').innerText = downloadCount;

document.getElementById('download-button').addEventListener('click', function() {
    // Incrementar contador de descargas
    downloadCount++;
    
    // Guardar el nuevo conteo en localStorage
    localStorage.setItem('downloadCount', downloadCount);
    
    // Actualizar el texto en la página
    document.getElementById('download-count').innerText = downloadCount;

    // Simular la descarga del archivo (puedes reemplazar con la URL real del archivo)
    const link = '/Imagenes/logo_GPA035.jpg';
    link.href = '/Imagenes/logo_GPA035.jpg'; // Cambia esto por la ruta real de tu archivo
    link.download = 'logo_GPA035'; // Cambia esto por el nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});