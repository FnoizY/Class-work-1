const emitter = require('./emitter');

function simulateUserLogin(userId) {
  const timestamp = new Date().toLocaleString();
  console.log(`${timestamp}: USER_${userId} logged in`);
}

emitter.on('userLoggedIn', simulateUserLogin);

setInterval(() => {
  const randomUserId = Math.floor(Math.random() * 1000);
  emitter.emit('userLoggedIn', randomUserId);
}, Math.random() * (1900) + 100);
