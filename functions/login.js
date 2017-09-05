// Import engine api
const engine = require('engine-api')

// Export the callback function
module.exports = (args, cb) => {
  console.log('Login Arguments', args);

  var userName = args.Username
  var chatRoom = args.Chatroom

  // Monitor the client to enable sending it messages
  cb(engine.MONITOR, chatRoom)

  // Send acknowledgement to the client
  cb(engine.RESPONSE, JSON.stringify({ Ack: true }))
}
