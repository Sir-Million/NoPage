const socket = io('https://nocardgame.glitch.me'); // Reemplaza con la URL de tu servidor en Glitch

document.addEventListener('DOMContentLoaded', () => {
    const gameId = 'game1'; // ID del juego, podría generarse dinámicamente o como prefieras
    const playerId = 'player1'; // ID del jugador, podría generarse dinámicamente o como prefieras
    const playerType = 'impostor'; // Tipo de jugador: 'impostor' o 'normal'

    // Emitir evento para unirse al juego
    socket.emit('joinGame', gameId, playerId, playerType);

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
