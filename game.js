const socket = io('https://nocardgame.glitch.me');

document.addEventListener('DOMContentLoaded', () => {
    const gameId = 'game1'; // ID del juego, podría generarse dinámicamente o como prefieras

    // Función para obtener datos del juego desde el servidor
    function fetchGameData(gameId) {
        fetch(`https://nocardgame.glitch.me/game/${gameId}`)
            .then(response => response.json())
            .then(data => {
                console.log('Game Data:', data);
                // Actualizar interfaz con los datos del juego si es necesario
            })
            .catch(error => console.error('Error fetching game data:', error));
    }

    // Llamar a la función para obtener los datos del juego al cargar la página
    fetchGameData(gameId);

    // Resto del código de Socket.io y eventos de juego
    // ...

    socket.on('stateChanged', (newState) => {
        document.getElementById('gameState').textContent = `Current State: ${newState}`;
    });

    socket.on('playerStatusChanged', (data) => {
        console.log(`Player ${data.playerId} is now ${data.status}`);
        // Actualizar interfaz si es necesario
    });

    // Ejemplo: Emitir acción del jugador
    function sendPlayerAction(action, response) {
        socket.emit('playerAction', { gameId, playerId, action, response });
    }

    // Ejemplo: Enviar acción para comenzar el juego
    document.getElementById('startGameButton').addEventListener('click', () => {
        sendPlayerAction('startGame');
    });

    // Ejemplo: Enviar acción para terminar el juego
    document.getElementById('endGameButton').addEventListener('click', () => {
        sendPlayerAction('endGame');
    });

    // Ejemplo: Enviar acción para matar a otro jugador (simulado)
    document.getElementById('killPlayerButton').addEventListener('click', () => {
        const targetPlayerId = 'player2'; // ID del jugador objetivo, debería obtenerse dinámicamente
        sendPlayerAction('killPlayer', { targetPlayerId });
    });
});
