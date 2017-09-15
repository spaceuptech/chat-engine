// Import engine api
const engine = require('engine-api')

// Export the callback function
module.exports = (args, cb) => {
  console.log('Chat Arguments', args);

  if (args.Message === null) {
    // Send no response to the client
    cb(engine.NO_REPLY)
    return
  }
  
  // Emit the message to all connected clients of chat room
  cb(engine.EMIT, args.Chatroom, 'chat', JSON.stringify({ Username: args.Username, Message: args.Message }))

  // Send no response to the client
  cb(engine.NO_REPLY)
}
