document.getElementById('yesButton').addEventListener('click', function() {
    showImage('img/Feli.jpg'); // Cambia esto a la ruta de tu imagen para "Sí"
});

document.getElementById('noButton').addEventListener('click', function() {
    showImage('img/Trite.jpg'); // Cambia esto a la ruta de tu imagen para "No"
});

function showImage(imageSrc) {
    const responseContainer = document.getElementById('responseContainer');
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Imagen de respuesta';
    
    // Limpiar contenido previo
    responseContainer.innerHTML = '';
    
    // Añadir la nueva imagen al contenedor
    responseContainer.appendChild(img);
    
    // Mostrar la imagen
    img.style.display = 'block';
}
