setTimeout(function() {
    window.close();
}, 3500);

function redirectToSteam() {
    // Tenta redirecionar para o servidor do Steam
    window.location.href = "steam://connect/131.196.196.196:27330/mixpriv";
    
    // Caso o redirecionamento falhe, o código continua e exibe uma mensagem de erro após um tempo.
    setTimeout(function() {
        alert("Certifique-se que o CS:GO esteja aberto.");
    }, 5000); // Ajuste o tempo conforme necessário
}

window.onload = function() {
    redirectToSteam();
    animateTitle("R e d i r e c t");
};

// Animate title function
function animateTitle(text) {
    let index = 0;

    function loop() {
        // Show letters one by one
        document.title = text.slice(0, index + 1); 
        index++;

        // If the character is a space, add a delay before the next character
        if (text[index - 1] === ' ') {
            setTimeout(loop, 200); // Pause longer for spaces (300ms)
        } else {
            // If not a space, continue quickly
            setTimeout(loop, 100); // Normal speed
        }

        // If the full text has been displayed, reset the index to loop
        if (index >= text.length) {
            index = 0; // Reset index to loop
        }
    }

    loop(); // Start the loop
}
