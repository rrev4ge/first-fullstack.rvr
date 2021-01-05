const path = require('path');

module.exports = {
  staticPath: /*process.env.STATIC_PATH ??*/ path.join(__dirname,'../public')
}
