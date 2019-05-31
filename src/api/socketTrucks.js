import openSocket from 'socket.io-client';
//const  socket = openSocket('localhost:8000');
function socketTruck(cb) {
  
        socket.on('connect', () => {
            console.log('connected')
         })
         socket.on('message',()=>{
             console.log('message arrived')
         })
}
    
export { socketTruck }