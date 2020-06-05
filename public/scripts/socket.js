const socket = io('http://localhost:3001');
socket.on('connect', function() {
    console.log('Client Connected!');

    socket.emit('action', { text: 'test' });
    socket.emit('identity', 0, response =>
        console.log('Identity:', response),
    );
});
socket.on('exception', function(data) {
    console.log('event', data);
});
socket.on('disconnect', function() {
    console.log('Disconnected');
});

socket.on('action', function(data) {
    console.log('event', data);
});