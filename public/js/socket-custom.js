var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

//Escuchar
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

//Escuchar
socket.on('enviarMensaje', function (mensaje) {
    console.log(`Servidor`, mensaje
    );
});


//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Jonathan',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log("Respuesta server: ", resp);
});