 const socket = io('https://localhost:8000');

 const form = document.getElementById('send-container');
 const messageInput = document.getElementById('messageInp')
 const messageContainer = document.querySelector(".container")
const append = (message,position) =>{
    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messageElement.classList.add = ('message')
    messageElement.classList.add = (position)
    messageContainer.append(messageElement);

    
}
 const name = prompt("Enter your user_name to join"); 
socket.emit('new-user-joined',user_name);  

socket.on('receive', data =>{
    append(`${data.message}: ${data.user}joined the chat`, 'right') //fix the problem

 })














