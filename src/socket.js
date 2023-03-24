import io from "socket.io-client"; // Add this

let socket;

const connectSocket = (user_id) => {
  socket = io("http://localhost:8005", {
    query: `user_id=${user_id}`,
  });
  console.log(socket, "socket url")
} // Add this -- our server will run on port 8005, so we connect to it from here

export {socket, connectSocket};