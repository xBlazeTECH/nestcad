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
socket.on('hide', function(data) {
    $(data.selector).hide();
})
socket.on('show', function(data) {
    $(data.selector).show();
})
socket.on('addCss', function(data) {
    $(data.selector).addClass(data.class);
})
socket.on('remCss', function (data) {
    $(data.selector).removeClass(data.class);
})
socket.on('disable', function(data) {
    $(data.selector).prop("disabled", true);
})
socket.on('enable', function(data) {
    $(data.selector).prop("disabled", false);
})

socket.on('action', function(data) {
    console.log('action: ', data);
});