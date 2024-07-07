const socket = io('https://nocardgame.glitch.me'); // Asegúrate de que la URL sea correcta

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);
});

// Lógica adicional del juego, gestión de estados, etc.
