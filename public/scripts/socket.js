const socket = io('http://localhost:3001');
socket.on('connect', function() {
    console.log('Client Connected!');
    socket.emit('identity', 0, response =>
        console.log('Identity:', response),
    );
});
socket.on('exception', function(data) {
    console.log('Exception: ', data);
});
socket.on('disconnect', function() {
    console.log('Disconnected!');
});
socket.on('update', function(data) {
    $(data.selector).text(data.text);
})
socket.on('action', function(data) {
    console.log('action: ', data);
});