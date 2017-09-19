// Import the engine-api
const engine = require('engine-api')

// Import the functions to be registered with the platform
const login = require('./functions/login')
const chat = require('./functions/chat')

// Connect to the platform
engine.connect('localhost', 5672, (err) => {
  if (err) {
    console.error(err)
    return
  }

  // Run setup command
  setup()

  // Subscribe to the platform in Devlopment Mode
  engine.subscribe('chat-engine', engine.DEV, subscribe)
})

// The subscribe callback
const subscribe = (err) => {
  if (err) {
    console.log('Couldnt subscribe')
    return
  }

  console.log('Subscribed')

  // Register callback functions with the platform
  engine.registerCallback('login', engine.JSON, login)
  engine.registerCallback('chat', engine.JSON, chat)
}

const setup = () => {
  // Do any set up you need to do here
  // Initialise database drivers, etc.
}
