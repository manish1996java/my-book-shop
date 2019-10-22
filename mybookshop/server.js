const http = require('http');
const app = require('./backend/app');

const port = process.env.PORT || 1123;
app.set('port',port);


const server = http.createServer(app);
server.listen(1123);


server.on('close',()=>{
    console.log('server close');
})
server.on('connection',()=>{
    console.log('connect')
})
server.on('error',(err)=>{
    console.log('error:',err);
})
server.on('listening',()=>{
    console.log('server litening');
})