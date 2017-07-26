const app = require('./app');

const PORT = process.env.PORT || 8000;

let server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


let io = require("socket.io").listen(server);
io.on("connection", socket => {
	console.log("ID LINE 12:", socket.id);
	socket.on("new_connect", data => {
		// set user's session id to his/her socket id
    let sessionID = socket.id;
    console.log("Data:", data);
		// add new user to users array
		//// new user comes in, alert everyone (other than new user)
		// socket.broadcast.emit("new_user", {data:data.name});
		// send welcome msg back to new user
		socket.emit("welcome", sessionID, data.name);
		//// update all clients with new list of users in chatroom
		// io.emit("update_users_everywhere", users);
	});
	// receive notice of user leaving chatroom
	// socket.on("disconnect", () => {
	// 	// update all remaining users with notice that someone left
	// 	io.emit("disconnected_user", goodbye_user, users);
	// })
})

module.exports=app;
