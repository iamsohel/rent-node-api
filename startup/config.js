const config = require('config');
const key = process.env.KEY;
module.exports = function() {
  if (!key) {
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
  }
}