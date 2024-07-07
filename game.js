// Reemplaza 'your-glitch-project-name' con el nombre de tu proyecto en Glitch
const socket = io('https://nocardgame.glitch.me');

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('actionButton').addEventListener('click', () => {
        const action = { player: 'Player1', action: 'move', direction: 'left' };
        socket.emit('playerAction', action);
    });

    socket.on('playerAction', (data) => {
        console.log('Player action received:', data);
    });
});
