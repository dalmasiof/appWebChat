const sxpress = require('express');
const app = sxpress();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection',(socket)=>{
    socket.on('message',(msg)=>{
        io.emit('message',msg);
    })
});

http.listen(4231,()=>{
        console.log('listening port 4231')
});