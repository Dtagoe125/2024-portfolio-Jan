// Add this JavaScript code to your script.js file

function openFullscreen(imageSrc) {
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    overlay.appendChild(img);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn btn-danger close-btn';
    closeBtn.innerHTML = 'Close Fullscreen';
    closeBtn.onclick = closeFullscreen;
    overlay.appendChild(closeBtn);

    document.body.appendChild(overlay);

    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const overlay = document.querySelector('.fullscreen-overlay');
    if (overlay) {
        document.body.removeChild(overlay);
        document.body.style.overflow = 'auto';
    }
}
